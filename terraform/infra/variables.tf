variable "domain_name" {
  type        = string
  description = "Exact domain or subdomain for routing and SSL"
}

variable "alternate_domain_names" {
  type        = list(string)
  description = "List of alternate domain names"
}

variable "name" {
  type        = string
  description = "Default name for infrastructure (eg lambda function)"
}

variable "route53_zone_id" {
  type        = string
  description = "The ID of the hosted zone to contain records"
}
