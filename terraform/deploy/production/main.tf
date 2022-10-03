locals {
  top_level_domain_name = "depploy.io"
  domain_name           = "depploy.io"
  name                  = "depploy-prod"
}

provider "aws" {
  region = "us-east-1"
}

data "aws_route53_zone" "route53_zone" {
  name = local.top_level_domain_name
}

module "aws_deployment" {
  source                 = "../../infra"
  domain_name            = local.domain_name
  alternate_domain_names = [local.domain_name]
  name                   = local.name
  route53_zone_id        = data.aws_route53_zone.route53_zone.zone_id
}
