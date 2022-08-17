locals {
  top_level_domain_name = "depploy.io"
}

provider "aws" {
  region = "us-east-1"
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_zone
resource "aws_route53_zone" "route53_zone" {
  name = local.top_level_domain_name
}
