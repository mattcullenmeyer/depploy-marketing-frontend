# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_zone
resource "aws_route53_zone" "route53_zone" {
  name = var.hosted_zone_domain_name
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record
# TODO: Create record that routes traffic to CloudFront
