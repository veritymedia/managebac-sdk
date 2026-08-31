package managebac_sdk

import (
	"context"
	"net/url"
)

type AuthenticationService struct {
	client *Client
}

func newAuthenticationService(client *Client) *AuthenticationService {
	service := &AuthenticationService{client: client}

	return service
}

type AuthenticationCreateOauthTokenParams struct {
	Body OauthTokenRequest
}

func (service *AuthenticationService) ListTokenResources(ctx context.Context) (*AuthPermissionsResponse, error) {
	path := "/v2p3/auth/permissions"
	query := url.Values{}
	var out AuthPermissionsResponse
	if err := service.client.do(ctx, "get", path, query, nil, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AuthenticationService) CreateOauthToken(ctx context.Context, params AuthenticationCreateOauthTokenParams) (*OauthTokenResponse, error) {
	path := "/oauth/token"
	query := url.Values{}
	var out OauthTokenResponse
	if err := service.client.do(ctx, "post", path, query, params.Body, &out); err != nil {
		return nil, err
	}
	return &out, nil
}

func (service *AuthenticationService) WithRawResponse() *AuthenticationRawService {
	return &AuthenticationRawService{client: service.client}
}

type AuthenticationRawService struct {
	client *Client
}

func (service *AuthenticationRawService) ListTokenResources(ctx context.Context) (*RawResponse[AuthPermissionsResponse], error) {
	path := "/v2p3/auth/permissions"
	query := url.Values{}
	var out AuthPermissionsResponse
	meta, err := service.client.doRaw(ctx, "get", path, query, nil, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[AuthPermissionsResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}

func (service *AuthenticationRawService) CreateOauthToken(ctx context.Context, params AuthenticationCreateOauthTokenParams) (*RawResponse[OauthTokenResponse], error) {
	path := "/oauth/token"
	query := url.Values{}
	var out OauthTokenResponse
	meta, err := service.client.doRaw(ctx, "post", path, query, params.Body, &out, "json")
	if err != nil {
		return nil, err
	}
	return &RawResponse[OauthTokenResponse]{Data: out, StatusCode: meta.StatusCode, Headers: meta.Headers, RequestID: meta.RequestID}, nil
}
