# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_zone
resource "aws_route53_zone" "route53_zone" {
  name = var.hosted_zone_domain_name
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record
# resource "aws_route53_record" "route53_record" {
#   zone_id = aws_route53_zone.route53_zone.zone_id
#   name    = var.hosted_zone_record_name
#   type    = "A"

#   alias = {
#     name    = cloudfront_domain_name
#     zone_id = cloudfront_hosted_zone_id
#   }
# }
