package managebac_sdk

import (
	"context"
	"fmt"
	"net/url"
)

type UtilitiesService struct {
	client *Client
}

func newUtilitiesService(client *Client) *UtilitiesService {
	service := &UtilitiesService{client: client}

	return service
}

type UtilitiesShowAvatarByIdParams struct {
	Id int64 `path:"id"`
}

func (service *UtilitiesService) ShowAvatarById(ctx context.Context, params UtilitiesShowAvatarByIdParams) error {
	path := "/v2p3/avatars/" + url.PathEscape(fmt.Sprint(params.Id)) + ""
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}

func (service *UtilitiesService) Ping(ctx context.Context) error {
	path := "/v2p3/ping"
	query := url.Values{}
	return service.client.do(ctx, "get", path, query, nil, nil)
}
