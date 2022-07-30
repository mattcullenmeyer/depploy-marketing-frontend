locals {
  aws_region              = "us-east-1"
  s3_bucket_name          = "depploy.io"
  alternate_domain_names  = ["depploy.io"]
  hosted_zone_domain_name = "depploy.io"
}

provider "aws" {
  region = local.aws_region
}

module "aws_s3_bucket" {
  source         = "./modules/s3"
  s3_bucket_name = local.s3_bucket_name
}

module "aws_route_53" {
  source                  = "./modules/route53"
  hosted_zone_domain_name = local.hosted_zone_domain_name
}

# module "aws_cloudfront" {
#   source                 = "./modules/cloudfront"
#   alternate_domain_names = local.alternate_domain_names
# }
