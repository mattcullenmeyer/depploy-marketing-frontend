provider "aws" {
  region = "us-east-1"
}

module "aws_deployment" {
  source                 = "../../infra"
  domain_name            = "staging.depploy.io"
  alternate_domain_names = ["staging.depploy.io"]
}
