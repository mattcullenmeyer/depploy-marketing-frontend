import { ArchitectureCard } from '..';
import { words } from './words';
import awsS3BucketImage from '/images/aws/aws-s3-bucket-icon.svg';
import awsCloudfrontImage from '/images/aws/aws-cloudfront-icon.svg';
import awsRoute53Image from '/images/aws/aws-route-53-icon.svg';
import awsCertificateManagerImage from '/images/aws/aws-certificate-manager-icon.svg';

export function AwsS3Card() {
  return (
    <ArchitectureCard
      image={awsS3BucketImage}
      imageAlt={words.s3.imageAlt}
      heading={words.s3.heading}
      description={words.s3.description}
    />
  );
}

export function AwsCloudfrontCard() {
  return (
    <ArchitectureCard
      image={awsCloudfrontImage}
      imageAlt={words.cloudfront.imageAlt}
      heading={words.cloudfront.heading}
      description={words.cloudfront.description}
    />
  );
}

export function AwsRoute53Card() {
  return (
    <ArchitectureCard
      image={awsRoute53Image}
      imageAlt={words.route53.imageAlt}
      heading={words.route53.heading}
      description={words.route53.description}
    />
  );
}

export function AwsCertificateManagerCard() {
  return (
    <ArchitectureCard
      image={awsCertificateManagerImage}
      imageAlt={words.certificateManager.imageAlt}
      heading={words.certificateManager.heading}
      description={words.certificateManager.description}
    />
  );
}
