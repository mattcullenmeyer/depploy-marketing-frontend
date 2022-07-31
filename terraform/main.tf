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
  source                                    = "./modules/s3"
  s3_bucket_name                            = local.domain_name
  cloudfront_origin_access_identity_iam_arn = module.aws_cloudfront.cloudfront_origin_access_identity_iam_arn
}

module "aws_cloudfront" {
  source                         = "./modules/cloudfront"
  alternate_domain_names         = local.alternate_domain_names
  s3_bucket_regional_domain_name = module.aws_s3_bucket.s3_bucket_regional_domain_name
  s3_bucket_id                   = module.aws_s3_bucket.s3_bucket_id
  acm_certificate_arn            = module.aws_acm.acm_certificate_arn
}

module "aws_route_53" {
  source                             = "./modules/route53"
  hosted_zone_domain_name            = local.domain_name
  hosted_zone_record_name            = local.domain_name
  cloudfront_domain_name             = module.aws_cloudfront.cloudfront_domain_name
  cloudfront_hosted_zone_id          = module.aws_cloudfront.cloudfront_hosted_zone_id
  acm_certificate_validation_options = module.aws_acm.acm_certificate_validation_options
}
