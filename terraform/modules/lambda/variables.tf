variable "function_name" {
  type        = string
  description = "Lambda function name"
}

variable "iam_role_arn" {
  type        = string
  description = "Amazon Resource Name (ARN) of the function's execution role"
}
