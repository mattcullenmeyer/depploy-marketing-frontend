# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_identity
resource "aws_cloudfront_origin_access_identity" "cloudfront_origin_access_identity" {}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution
resource "aws_cloudfront_distribution" "cloudfront_distribution" {
  origin {
    domain_name = s3_bucket_domain_name
    origin_id   = aws_cloudfront_origin_access_identity.cloudfront_origin_access_identity.cloudfront_access_identity_path
  }

  enabled             = true
  default_root_object = "index.html"
  aliases             = var.alternate_domain_names

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_cloudfront_origin_access_identity.cloudfront_origin_access_identity.cloudfront_access_identity_path
    min_ttl                = 1
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = acm_certificate_arn
  }

  custom_error_response = [
    {
      "error_caching_min_ttl" = 10
      "error_code"            = 404
      "response_code"         = 200
      "response_page_path"    = "/index.html"
    },
  ]
}
