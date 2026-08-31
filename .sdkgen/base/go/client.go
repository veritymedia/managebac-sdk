package managebac_sdk

import (
	"bufio"
	"bytes"
	"context"
	cryptorand "crypto/rand"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"math/rand"
	"mime/multipart"
	"net/http"
	"net/url"
	"os"
	"strings"
	"time"
)

type Client struct {
	baseURL              string
	apiKey               string
	httpClient           *http.Client
	maxRetries           int
	retryStatuses        map[int]bool
	packageVersion       string
	omitStainlessHeaders bool
	idempotencyHeader    string
	clientID             string
	clientSecret         string
	oauth2TokenURL       string
	oauth2Scopes         []string
	oauth2AuthStyle      string
	oauth2AuthURL        string
	oauth2DeviceURL      string
	cachedToken          string
	tokenExpiry          time.Time
	onRequest            func(map[string]any)
	onResponse           func(map[string]any)
	onError              func(map[string]any)

	Coursework           *CourseworkService
	Attendance           *AttendanceService
	Authentication       *AuthenticationService
	Utilities            *UtilitiesService
	BehaviorNotes        *BehaviorNotesService
	Memberships          *MembershipsService
	ExtendedApis         *ExtendedApisService
	Classes              *ClassesService
	Relationships        *RelationshipsService
	Parents              *ParentsService
	Academics            *AcademicsService
	Students             *StudentsService
	OnlineAssessment     *OnlineAssessmentService
	Teachers             *TeachersService
	UnitClassAssignments *UnitClassAssignmentsService
	Units                *UnitsService
	Projects             *ProjectsService
	YearGroups           *YearGroupsService
}

type ClientOption func(*Client)

func NewClient(options ...ClientOption) *Client {
	client := &Client{
		baseURL:              "https://api.managebac.com",
		apiKey:               os.Getenv("MANAGE_BAC_PLUS_API_KEY"),
		httpClient:           &http.Client{Timeout: 60 * time.Second},
		maxRetries:           2,
		retryStatuses:        map[int]bool{408: true, 409: true, 429: true, 500: true, 502: true, 503: true, 504: true},
		packageVersion:       "v2p3",
		omitStainlessHeaders: false,
		idempotencyHeader:    "",
	}
	for _, option := range options {
		option(client)
	}
	client.Coursework = newCourseworkService(client)
	client.Attendance = newAttendanceService(client)
	client.Authentication = newAuthenticationService(client)
	client.Utilities = newUtilitiesService(client)
	client.BehaviorNotes = newBehaviorNotesService(client)
	client.Memberships = newMembershipsService(client)
	client.ExtendedApis = newExtendedApisService(client)
	client.Classes = newClassesService(client)
	client.Relationships = newRelationshipsService(client)
	client.Parents = newParentsService(client)
	client.Academics = newAcademicsService(client)
	client.Students = newStudentsService(client)
	client.OnlineAssessment = newOnlineAssessmentService(client)
	client.Teachers = newTeachersService(client)
	client.UnitClassAssignments = newUnitClassAssignmentsService(client)
	client.Units = newUnitsService(client)
	client.Projects = newProjectsService(client)
	client.YearGroups = newYearGroupsService(client)

	return client
}

func WithAPIKey(apiKey string) ClientOption {
	return func(client *Client) {
		client.apiKey = apiKey
	}
}

func WithBaseURL(baseURL string) ClientOption {
	return func(client *Client) {
		client.baseURL = strings.TrimRight(baseURL, "/")
	}
}

// WithEnvironment selects a named base URL (e.g. "production", "sandbox").
func WithEnvironment(name string) ClientOption {
	return func(client *Client) {
		environments := map[string]string{}
		if url, ok := environments[name]; ok {
			client.baseURL = strings.TrimRight(url, "/")
		}
	}
}

func WithMaxRetries(maxRetries int) ClientOption {
	return func(client *Client) {
		client.maxRetries = maxRetries
	}
}

func WithHTTPClient(httpClient *http.Client) ClientOption {
	return func(client *Client) {
		client.httpClient = httpClient
	}
}

func WithClientCredentials(clientID string, clientSecret string) ClientOption {
	return func(client *Client) {
		client.clientID = clientID
		client.clientSecret = clientSecret
	}
}

// Observability hooks. Wire OpenTelemetry/metrics/logging here; default is no-op.
func WithOnRequest(hook func(map[string]any)) ClientOption {
	return func(client *Client) { client.onRequest = hook }
}

func WithOnResponse(hook func(map[string]any)) ClientOption {
	return func(client *Client) { client.onResponse = hook }
}

func WithOnError(hook func(map[string]any)) ClientOption {
	return func(client *Client) { client.onError = hook }
}

// OtelSpan and OtelTracer are the minimal interfaces for optional OpenTelemetry
// instrumentation (zero dependency). Adapt your tracer to these and pass OtelHooks(...).
type OtelSpan interface {
	SetAttribute(key string, value any)
	SetStatus(code int)
	End()
}

type OtelTracer interface {
	StartSpan(name string, kind int) OtelSpan
}

// OtelHooks returns client options emitting one CLIENT span per HTTP attempt with stable
// HTTP semantic-convention attributes. Usage: client := NewClient(OtelHooks(tracer)...).
func OtelHooks(tracer OtelTracer) []ClientOption {
	spans := map[string]OtelSpan{}
	keyOf := func(info map[string]any) string {
		return fmt.Sprintf("%v %v #%v", info["method"], info["url"], info["attempt"])
	}
	return []ClientOption{
		WithOnRequest(func(info map[string]any) {
			span := tracer.StartSpan(fmt.Sprint(info["method"]), 3)
			span.SetAttribute("http.request.method", info["method"])
			span.SetAttribute("url.full", info["url"])
			if parsed, err := url.Parse(fmt.Sprint(info["url"])); err == nil && parsed.Hostname() != "" {
				span.SetAttribute("server.address", parsed.Hostname())
			}
			if attempt, ok := info["attempt"].(int); ok && attempt > 0 {
				span.SetAttribute("http.request.resend_count", attempt)
			}
			spans[keyOf(info)] = span
		}),
		WithOnResponse(func(info map[string]any) {
			span, ok := spans[keyOf(info)]
			if !ok {
				return
			}
			delete(spans, keyOf(info))
			span.SetAttribute("http.response.status_code", info["status"])
			if status, ok := info["status"].(int); ok && status >= 400 {
				span.SetStatus(2)
			}
			span.End()
		}),
		WithOnError(func(info map[string]any) {
			span, ok := spans[keyOf(info)]
			if !ok {
				return
			}
			delete(spans, keyOf(info))
			span.SetAttribute("error.type", "error")
			span.SetStatus(2)
			span.End()
		}),
	}
}

func (client *Client) applyDefaultHeaders(request *http.Request, attempt int) {
	request.Header.Set("Accept", "application/json")
	if !client.omitStainlessHeaders {
		request.Header.Set("X-Stainless-Lang", "go")
		request.Header.Set("X-Stainless-Package-Version", client.packageVersion)
		request.Header.Set("X-Stainless-Runtime", "go")
		request.Header.Set("X-Stainless-Timeout", fmt.Sprint(client.httpClient.Timeout.Seconds()))
		request.Header.Set("X-Stainless-Retry-Count", fmt.Sprint(attempt))
	}
}

// accessToken implements the OAuth2 client-credentials flow with caching and refresh.
func (client *Client) accessToken(ctx context.Context, force bool) (string, error) {
	if client.clientID == "" || client.clientSecret == "" {
		return "", nil
	}
	if !force && client.cachedToken != "" && time.Now().Before(client.tokenExpiry) {
		return client.cachedToken, nil
	}
	tokenURL := client.oauth2TokenURL
	if !strings.HasPrefix(tokenURL, "http") {
		tokenURL = client.baseURL + tokenURL
	}
	form := url.Values{}
	form.Set("grant_type", "client_credentials")
	if len(client.oauth2Scopes) > 0 {
		form.Set("scope", strings.Join(client.oauth2Scopes, " "))
	}
	if client.oauth2AuthStyle != "basic" {
		form.Set("client_id", client.clientID)
		form.Set("client_secret", client.clientSecret)
	}
	request, err := http.NewRequestWithContext(ctx, "POST", tokenURL, strings.NewReader(form.Encode()))
	if err != nil {
		return "", err
	}
	request.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	request.Header.Set("Accept", "application/json")
	if client.oauth2AuthStyle == "basic" {
		request.SetBasicAuth(client.clientID, client.clientSecret)
	}
	response, err := client.httpClient.Do(request)
	if err != nil {
		return "", err
	}
	body, _ := io.ReadAll(response.Body)
	response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return "", newAPIError(response.StatusCode, body, response.Header)
	}
	var payload struct {
		AccessToken string `json:"access_token"`
		ExpiresIn   int64  `json:"expires_in"`
	}
	if err := json.Unmarshal(body, &payload); err != nil {
		return "", err
	}
	expires := payload.ExpiresIn
	if expires == 0 {
		expires = 3600
	}
	client.cachedToken = payload.AccessToken
	client.tokenExpiry = time.Now().Add(time.Duration(expires-30) * time.Second)
	return client.cachedToken, nil
}

func (client *Client) authorize(ctx context.Context, request *http.Request) error {
	if client.clientID != "" && client.clientSecret != "" {
		token, err := client.accessToken(ctx, false)
		if err != nil {
			return err
		}
		if token != "" {
			request.Header.Set("Authorization", "Bearer "+token)
		}
		return nil
	}
	if client.apiKey != "" {
		request.Header.Set("Authorization", "Bearer "+client.apiKey)
		return nil
	}
	return nil
}

// RawResponse carries parsed data plus the raw HTTP status, headers, and request id.
type RawResponse[T any] struct {
	Data       T
	StatusCode int
	Headers    http.Header
	RequestID  string
}

type rawMeta struct {
	StatusCode int
	Headers    http.Header
	RequestID  string
}

func (client *Client) do(ctx context.Context, method string, path string, query url.Values, body any, out any) error {
	return client.doEncoded(ctx, method, path, query, body, out, "json", nil)
}

func (client *Client) doRaw(ctx context.Context, method string, path string, query url.Values, body any, out any, encoding string) (rawMeta, error) {
	var meta rawMeta
	err := client.doEncoded(ctx, method, path, query, body, out, encoding, &meta)
	return meta, err
}

// doAbsolute GETs a (possibly absolute) URL for cursor_url pagination.
func (client *Client) doAbsolute(ctx context.Context, absURL string, out any) error {
	requestURL := absURL
	if !strings.HasPrefix(absURL, "http") {
		requestURL = client.baseURL + absURL
	}
	request, err := http.NewRequestWithContext(ctx, "GET", requestURL, nil)
	if err != nil {
		return err
	}
	client.applyDefaultHeaders(request, 0)
	if err := client.authorize(ctx, request); err != nil {
		return err
	}
	response, err := client.httpClient.Do(request)
	if err != nil {
		return err
	}
	body, _ := io.ReadAll(response.Body)
	response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return newAPIError(response.StatusCode, body, response.Header)
	}
	if out != nil {
		return json.Unmarshal(body, out)
	}
	return nil
}

func (client *Client) doEncoded(ctx context.Context, method string, path string, query url.Values, body any, out any, encoding string, meta *rawMeta) error {
	var payload []byte
	contentType := "application/json"
	if body != nil {
		if encoding == "form" {
			payload = []byte(encodeForm(body))
			contentType = "application/x-www-form-urlencoded"
		} else if encoding == "text" {
			payload = []byte(fmt.Sprint(body))
			contentType = "text/plain"
		} else {
			encoded, err := json.Marshal(body)
			if err != nil {
				return err
			}
			payload = encoded
		}
	}

	requestURL := client.baseURL + path
	if len(query) > 0 {
		requestURL += "?" + query.Encode()
	}

	refreshed := false
	for attempt := 0; attempt <= client.maxRetries; attempt++ {
		var reader io.Reader
		if payload != nil {
			reader = bytes.NewReader(payload)
		}

		request, err := http.NewRequestWithContext(ctx, strings.ToUpper(method), requestURL, reader)
		if err != nil {
			return err
		}
		client.applyDefaultHeaders(request, attempt)
		if err := client.authorize(ctx, request); err != nil {
			return err
		}
		if body != nil {
			request.Header.Set("Content-Type", contentType)
		}
		if client.idempotencyHeader != "" && strings.ToLower(method) != "get" && request.Header.Get(client.idempotencyHeader) == "" {
			request.Header.Set(client.idempotencyHeader, "stainless-retry-"+randomID())
		}

		started := time.Now()
		if client.onRequest != nil {
			client.onRequest(map[string]any{"method": strings.ToUpper(method), "url": requestURL, "attempt": attempt})
		}
		response, err := client.httpClient.Do(request)
		if err != nil {
			if client.onError != nil {
				client.onError(map[string]any{"method": strings.ToUpper(method), "url": requestURL, "attempt": attempt, "error": err})
			}
			if attempt < client.maxRetries {
				time.Sleep(retryDelay(attempt))
				continue
			}
			return err
		}
		if client.onResponse != nil {
			client.onResponse(map[string]any{"method": strings.ToUpper(method), "url": requestURL, "attempt": attempt, "status": response.StatusCode, "durationMs": float64(time.Since(started).Milliseconds())})
		}

		responseBody, readErr := io.ReadAll(response.Body)
		response.Body.Close()
		if readErr != nil {
			return readErr
		}
		if response.StatusCode == 401 && client.clientID != "" && client.clientSecret != "" && !refreshed {
			refreshed = true
			if _, err := client.accessToken(ctx, true); err != nil {
				return err
			}
			continue
		}
		if response.StatusCode < 200 || response.StatusCode >= 300 {
			if attempt < client.maxRetries && client.shouldRetry(response) {
				time.Sleep(retryDelay(attempt, response))
				continue
			}
			return newAPIError(response.StatusCode, responseBody, response.Header)
		}
		if meta != nil {
			meta.StatusCode = response.StatusCode
			meta.Headers = response.Header
			meta.RequestID = response.Header.Get("x-request-id")
		}
		if raw, ok := out.(*[]byte); ok {
			*raw = responseBody
			return nil
		}
		if out == nil || len(responseBody) == 0 {
			return nil
		}
		if err := json.Unmarshal(responseBody, out); err != nil {
			return fmt.Errorf("decode response: %w", err)
		}
		return nil
	}
	return fmt.Errorf("request retry loop exited unexpectedly")
}

func (client *Client) doMultipart(ctx context.Context, method string, path string, query url.Values, fields map[string]any, out any) error {
	var buffer bytes.Buffer
	writer := multipart.NewWriter(&buffer)
	for key, value := range fields {
		if value == nil {
			continue
		}
		switch typed := value.(type) {
		case []byte:
			part, err := writer.CreateFormFile(key, key)
			if err != nil {
				return err
			}
			if _, err := part.Write(typed); err != nil {
				return err
			}
		case *string:
			if typed != nil {
				if err := writer.WriteField(key, *typed); err != nil {
					return err
				}
			}
		case string:
			if err := writer.WriteField(key, typed); err != nil {
				return err
			}
		default:
			encoded, err := json.Marshal(typed)
			if err != nil {
				return err
			}
			if err := writer.WriteField(key, string(encoded)); err != nil {
				return err
			}
		}
	}
	if err := writer.Close(); err != nil {
		return err
	}

	requestURL := client.baseURL + path
	if len(query) > 0 {
		requestURL += "?" + query.Encode()
	}
	request, err := http.NewRequestWithContext(ctx, strings.ToUpper(method), requestURL, &buffer)
	if err != nil {
		return err
	}
	client.applyDefaultHeaders(request, 0)
	if err := client.authorize(ctx, request); err != nil {
		return err
	}
	request.Header.Set("Content-Type", writer.FormDataContentType())
	response, err := client.httpClient.Do(request)
	if err != nil {
		return err
	}
	responseBody, readErr := io.ReadAll(response.Body)
	response.Body.Close()
	if readErr != nil {
		return readErr
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return newAPIError(response.StatusCode, responseBody, response.Header)
	}
	if out == nil || len(responseBody) == 0 {
		return nil
	}
	return json.Unmarshal(responseBody, out)
}

func (client *Client) doStream(ctx context.Context, method string, path string, query url.Values, body any) (*http.Response, error) {
	var reader io.Reader
	if body != nil {
		encoded, err := json.Marshal(body)
		if err != nil {
			return nil, err
		}
		reader = bytes.NewReader(encoded)
	}
	requestURL := client.baseURL + path
	if len(query) > 0 {
		requestURL += "?" + query.Encode()
	}
	request, err := http.NewRequestWithContext(ctx, strings.ToUpper(method), requestURL, reader)
	if err != nil {
		return nil, err
	}
	client.applyDefaultHeaders(request, 0)
	if err := client.authorize(ctx, request); err != nil {
		return nil, err
	}
	request.Header.Set("Accept", "text/event-stream")
	if body != nil {
		request.Header.Set("Content-Type", "application/json")
	}
	response, err := client.httpClient.Do(request)
	if err != nil {
		return nil, err
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		responseBody, _ := io.ReadAll(response.Body)
		response.Body.Close()
		return nil, newAPIError(response.StatusCode, responseBody, response.Header)
	}
	return response, nil
}

type APIError struct {
	StatusCode int
	Body       []byte
	RequestID  string
	Headers    http.Header
}

func (err *APIError) Error() string {
	if err.RequestID != "" {
		return fmt.Sprintf("API request failed with status %d (request id: %s)", err.StatusCode, err.RequestID)
	}
	return fmt.Sprintf("API request failed with status %d", err.StatusCode)
}

// Per-status error types. Use errors.As to match, e.g. var e *NotFoundError; errors.As(err, &e).
type BadRequestError struct{ *APIError }          // 400
type AuthenticationError struct{ *APIError }      // 401
type PermissionDeniedError struct{ *APIError }    // 403
type NotFoundError struct{ *APIError }            // 404
type ConflictError struct{ *APIError }            // 409
type UnprocessableEntityError struct{ *APIError } // 422
type RateLimitError struct{ *APIError }           // 429
type InternalServerError struct{ *APIError }      // >= 500

func newAPIError(status int, body []byte, headers http.Header) error {
	base := &APIError{StatusCode: status, Body: body, Headers: headers}
	if headers != nil {
		base.RequestID = headers.Get("x-request-id")
	}
	switch status {
	case 400:
		return &BadRequestError{base}
	case 401:
		return &AuthenticationError{base}
	case 403:
		return &PermissionDeniedError{base}
	case 404:
		return &NotFoundError{base}
	case 409:
		return &ConflictError{base}
	case 422:
		return &UnprocessableEntityError{base}
	case 429:
		return &RateLimitError{base}
	}
	if status >= 500 {
		return &InternalServerError{base}
	}
	return base
}

// Stream is a typed iterator over a server-sent-event or JSONL response body.
type Stream[T any] struct {
	scanner      *bufio.Scanner
	body         io.ReadCloser
	sse          bool
	doneSentinel string
	current      T
	err          error
	finished     bool
}

func newStream[T any](body io.ReadCloser, sse bool, doneSentinel string) *Stream[T] {
	return &Stream[T]{scanner: bufio.NewScanner(body), body: body, sse: sse, doneSentinel: doneSentinel}
}

func (stream *Stream[T]) Next() bool {
	if stream.err != nil || stream.finished {
		return false
	}
	if stream.sse {
		var dataLines []string
		for stream.scanner.Scan() {
			line := stream.scanner.Text()
			if line == "" {
				if len(dataLines) == 0 {
					continue
				}
				data := strings.Join(dataLines, "\n")
				dataLines = nil
				if stream.doneSentinel != "" && data == stream.doneSentinel {
					stream.finished = true
					return false
				}
				var event T
				if err := json.Unmarshal([]byte(data), &event); err != nil {
					stream.err = err
					return false
				}
				stream.current = event
				return true
			}
			if strings.HasPrefix(line, ":") {
				continue
			}
			if strings.HasPrefix(line, "data:") {
				dataLines = append(dataLines, strings.TrimPrefix(strings.TrimPrefix(line, "data:"), " "))
			}
		}
		if len(dataLines) > 0 {
			data := strings.Join(dataLines, "\n")
			if !(stream.doneSentinel != "" && data == stream.doneSentinel) {
				var event T
				if err := json.Unmarshal([]byte(data), &event); err == nil {
					stream.current = event
					stream.finished = true
					return true
				}
			}
		}
		stream.err = stream.scanner.Err()
		stream.finished = true
		return false
	}
	for stream.scanner.Scan() {
		line := strings.TrimSpace(stream.scanner.Text())
		if line == "" {
			continue
		}
		if stream.doneSentinel != "" && line == stream.doneSentinel {
			stream.finished = true
			return false
		}
		var event T
		if err := json.Unmarshal([]byte(line), &event); err != nil {
			stream.err = err
			return false
		}
		stream.current = event
		return true
	}
	stream.err = stream.scanner.Err()
	stream.finished = true
	return false
}

func (stream *Stream[T]) Current() T {
	return stream.current
}

func (stream *Stream[T]) Err() error {
	return stream.err
}

func (stream *Stream[T]) Close() error {
	return stream.body.Close()
}

// OnEvent drains the stream, invoking onEvent for each item, then returns any terminal
// error (nil on clean end). Event-handler alternative to the Next()/Current() loop.
func (stream *Stream[T]) OnEvent(onEvent func(T)) error {
	defer stream.Close()
	for stream.Next() {
		onEvent(stream.Current())
	}
	return stream.Err()
}

func (client *Client) shouldRetry(response *http.Response) bool {
	shouldRetry := strings.ToLower(response.Header.Get("X-Should-Retry"))
	if shouldRetry == "true" {
		return true
	}
	if shouldRetry == "false" {
		return false
	}
	return client.retryStatuses[response.StatusCode] || response.StatusCode >= 500
}

func retryDelay(attempt int, response ...*http.Response) time.Duration {
	if len(response) > 0 && response[0] != nil {
		if value := response[0].Header.Get("Retry-After-Ms"); value != "" {
			var milliseconds int64
			if _, err := fmt.Sscan(value, &milliseconds); err == nil && milliseconds >= 0 && milliseconds < 60000 {
				return time.Duration(milliseconds) * time.Millisecond
			}
		}
		if value := response[0].Header.Get("Retry-After"); value != "" {
			var seconds int64
			if _, err := fmt.Sscan(value, &seconds); err == nil && seconds >= 0 && seconds < 60 {
				return time.Duration(seconds) * time.Second
			}
		}
	}
	base := min(time.Duration(500*(1<<attempt))*time.Millisecond, 8*time.Second)
	jitter := 0.75 + rand.Float64()*0.5
	return time.Duration(float64(base) * jitter)
}

func randomID() string {
	bytes := make([]byte, 16)
	if _, err := cryptorand.Read(bytes); err != nil {
		return fmt.Sprint(time.Now().UnixNano())
	}
	return hex.EncodeToString(bytes)
}

// encodeForm renders a typed body as application/x-www-form-urlencoded with bracket
// notation for nested objects/arrays (json round-trip keeps it generic over any struct).
func encodeForm(body any) string {
	encoded, err := json.Marshal(body)
	if err != nil {
		return ""
	}
	var generic any
	if err := json.Unmarshal(encoded, &generic); err != nil {
		return ""
	}
	values := url.Values{}
	var add func(key string, value any)
	add = func(key string, value any) {
		switch typed := value.(type) {
		case nil:
			return
		case map[string]any:
			for k, v := range typed {
				if key == "" {
					add(k, v)
				} else {
					add(key+"["+k+"]", v)
				}
			}
		case []any:
			for i, v := range typed {
				add(fmt.Sprintf("%s[%d]", key, i), v)
			}
		default:
			values.Add(key, fmt.Sprint(typed))
		}
	}
	add("", generic)
	return values.Encode()
}
