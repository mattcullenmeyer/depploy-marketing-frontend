import { ArchitectureCard } from '..';
import { words } from './words';
import awsS3BucketImage from '/images/aws/aws-s3-bucket-icon.svg';
import awsCloudfrontImage from '/images/aws/aws-cloudfront-icon.svg';
import awsRoute53Image from '/images/aws/aws-route-53-icon.svg';
import awsCertificateManagerImage from '/images/aws/aws-certificate-manager-icon.svg';
import awsIamImage from '/images/aws/aws-iam-icon.svg';

export const AwsS3Card = () => (
  <ArchitectureCard
    image={awsS3BucketImage}
    imageAlt={words.s3.imageAlt}
    heading={words.s3.heading}
    subheading={words.s3.subheading}
    description={words.s3.description}
  />
);

export const AwsCloudfrontCard = () => (
  <ArchitectureCard
    image={awsCloudfrontImage}
    imageAlt={words.cloudfront.imageAlt}
    heading={words.cloudfront.heading}
    subheading={words.cloudfront.subheading}
    description={words.cloudfront.description}
  />
);

export const AwsRoute53Card = () => (
  <ArchitectureCard
    image={awsRoute53Image}
    imageAlt={words.route53.imageAlt}
    heading={words.route53.heading}
    subheading={words.route53.subheading}
    description={words.route53.description}
  />
);

export const AwsCertificateManagerCard = () => (
  <ArchitectureCard
    image={awsCertificateManagerImage}
    imageAlt={words.certificateManager.imageAlt}
    heading={words.certificateManager.heading}
    subheading={words.certificateManager.subheading}
    description={words.certificateManager.description}
  />
);

export const AwsIamCard = () => (
  <ArchitectureCard
    image={awsIamImage}
    imageAlt={words.iam.imageAlt}
    heading={words.iam.heading}
    subheading={words.iam.subheading}
    description={words.iam.description}
  />
);
