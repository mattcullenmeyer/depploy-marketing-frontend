output "cloudfront_hosted_zone_id" {
  description = "CloudFront distribution hosted zone ID"
  value       = aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.cloudfront_distribution.domain_name
}

output "cloudfront_origin_access_identity_iam_arn" {
  description = "A pre-generated ARN for use in S3 bucket policies"
  value       = aws_cloudfront_origin_access_identity.cloudfront_origin_access_identity.iam_arn
}
