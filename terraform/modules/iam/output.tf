output "iam_for_lambda_arn" {
  description = "Amazon Resource Name (ARN) specifying the role for lambda"
  value       = aws_iam_role.lambda_iam_role.arn
}
