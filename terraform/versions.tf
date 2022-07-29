terraform {
  backend "s3" {
    bucket         = "depploy-terraform-state"
    key            = "state/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    kms_key_id     = "arn:aws:kms:us-east-1:875677295633:key/d62c3c17-a6d8-4ca9-aab3-259659be443c"
    dynamodb_table = "depploy-terraform-lock"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
