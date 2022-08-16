provider "aws" {
  region = var.aws_region
}

module "aws_deployment" {
  source                 = "../../infra"
  domain_name            = var.domain_name
  alternate_domain_names = var.alternate_domain_names
}
