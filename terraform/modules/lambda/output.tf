output "lambda_routing_arn" {
  description = "Amazon Resource Name (ARN) identifying the Lambda Function."
  # qualified_arn is used due to versioning of lambda functions
  value       = aws_lambda_function.lambda_function.qualified_arn
}
