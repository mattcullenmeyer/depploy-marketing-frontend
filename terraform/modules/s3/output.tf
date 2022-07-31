output "s3_bucket_domain_name" {
  description = "The bucket domain name"
  value       = aws_s3_bucket.s3_bucket.bucket_domain_name
}

output "s3_bucket_id" {
  description = "The name of the bucket"
  value       = aws_s3_bucket.s3_bucket.id
}
