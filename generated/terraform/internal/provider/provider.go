package provider

import (
	"context"

	"github.com/hashicorp/terraform-plugin-framework/datasource"
	"github.com/hashicorp/terraform-plugin-framework/provider"
	"github.com/hashicorp/terraform-plugin-framework/provider/schema"
	"github.com/hashicorp/terraform-plugin-framework/resource"
)

// ManagebacplusProvider is the generated Terraform provider for API V2P3.
type ManagebacplusProvider struct{}

func New() provider.Provider {
	return &ManagebacplusProvider{}
}

func (p *ManagebacplusProvider) Metadata(_ context.Context, _ provider.MetadataRequest, resp *provider.MetadataResponse) {
	resp.TypeName = "managebacplus"
}

func (p *ManagebacplusProvider) Schema(_ context.Context, _ provider.SchemaRequest, resp *provider.SchemaResponse) {
	resp.Schema = schema.Schema{}
}

func (p *ManagebacplusProvider) Configure(_ context.Context, _ provider.ConfigureRequest, _ *provider.ConfigureResponse) {
}

func (p *ManagebacplusProvider) Resources(_ context.Context) []func() resource.Resource {
	return []func() resource.Resource{

	}
}

func (p *ManagebacplusProvider) DataSources(_ context.Context) []func() datasource.DataSource {
	return nil
}
