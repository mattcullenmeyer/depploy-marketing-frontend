variable "alternate_domain_names" {
  type        = list(string)
  description = "List of alternate domain names"
}

variable "s3_bucket_domain_name" {
  type        = string
  description = "Domain name of the S3 bucket"
}

variable "s3_bucket_id" {
  type        = string
  description = "The name of the bucket"
}

variable "acm_certificate_arn" {
  type        = string
  description = "The ARN of the AWS certificate"
}
