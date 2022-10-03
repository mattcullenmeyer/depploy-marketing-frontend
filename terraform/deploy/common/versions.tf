terraform {
  required_version = "1.2.9"

  # TODO: Create a backend for this
  # backend "s3" {
  #   bucket         = "depploy-terraform-state-staging"
  #   key            = "state/terraform.tfstate"
  #   region         = "us-east-1"
  #   dynamodb_table = "depploy-terraform-lock-staging"
  # }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
