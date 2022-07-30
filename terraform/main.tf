locals {
  aws_region             = "us-east-1"
  domain_name            = "depploy.io"
  alternate_domain_names = ["depploy.io"]
}

provider "aws" {
  region = local.aws_region
}

module "aws_acm" {
  source      = "./modules/acm"
  domain_name = local.domain_name
}

module "aws_s3_bucket" {
  source         = "./modules/s3"
  s3_bucket_name = local.domain_name
}

# module "aws_cloudfront" {
#   source                 = "./modules/cloudfront"
#   alternate_domain_names = local.alternate_domain_names
# }

module "aws_route_53" {
  source                  = "./modules/route53"
  hosted_zone_domain_name = local.domain_name
  hosted_zone_record_name = local.domain_name
}
