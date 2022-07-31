variable "s3_bucket_name" {
  description = "Name of S3 bucket"
  type        = string
}

variable "cloudfront_origin_access_identity_iam_arn" {
  description = "A pre-generated ARN for use in S3 bucket policies"
  type = string
}
