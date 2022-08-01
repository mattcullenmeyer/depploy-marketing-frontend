variable "hosted_zone_domain_name" {
  type        = string
  description = "Route 53 hosted zone domain name"
}

variable "hosted_zone_record_name" {
  type        = string
  description = "Route 53 hosted zone record name"
}

variable "cloudfront_domain_name" {
  type        = string
  description = "CloudFront distribution domain name"
}

variable "cloudfront_hosted_zone_id" {
  type        = string
  description = "CloudFront distribution hosted zone ID"
}

variable "acm_certificate_validation_options" {
  type        = any
  description = "Set of domain validation objects which can be used to complete certificate validation"
}
