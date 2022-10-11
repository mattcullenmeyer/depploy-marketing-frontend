data "archive_file" "lambda_zip_file" {
  type        = "zip"
  source_file = "${path.module}/index.js"
  output_path = "${path.module}/lambda_handler.zip"
}

resource "aws_lambda_function" "lambda_function" {
  filename         = data.archive_file.lambda_zip_file.output_path
  source_code_hash = data.archive_file.lambda_zip_file.output_base64sha256

  function_name = var.function_name
  role          = var.iam_role_arn
  handler       = "index.handler"
  runtime       = "nodejs16.x"
  publish       = true
}
