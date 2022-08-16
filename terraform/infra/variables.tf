# variable "aws_region" {
#   type        = string
#   description = "AWS geographic region to deploy resources"
# }

variable "domain_name" {
  type        = string
  description = "Exact domain or subdomain for routing and SSL"
}

variable "alternate_domain_names" {
  type        = list(string)
  description = "List of alternate domain names"
}
