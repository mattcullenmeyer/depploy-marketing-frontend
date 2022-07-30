locals {
  aws_region             = "us-east-1"
  s3_bucket_name         = "depploy.io"
  alternate_domain_names = ["depploy.io"]
}

provider "aws" {
  region = local.aws_region
}

module "aws_s3_bucket" {
  source         = "./modules/s3"
  s3_bucket_name = local.s3_bucket_name
}

module "" {
  source                 = "./modules/cloudfront"
  alternate_domain_names = local.alternate_domain_names
}
