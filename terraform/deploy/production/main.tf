provider "aws" {
  region = "us-east-1"
}

module "aws_deployment" {
  source                 = "../../infra"
  domain_name            = "depploy.io"
  alternate_domain_names = ["depploy.io"]
}
