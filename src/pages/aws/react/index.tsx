import React from 'react';
import Image from 'next/image';
import { Layout } from '../../../components/Layout';
import { Box } from '@twilio-paste/core/box';
import { HeroSection } from '../../../components/LandingPage/components/HeroSection';
import { FeatureSection } from '../../../components/LandingPage/components/FeatureSection';
import {
  AwsS3Card,
  AwsCloudfrontCard,
  AwsRoute53Card,
  AwsCertificateManagerCard,
} from '../../../components/LandingPage/components/ArchitectureCard/AWS';
import deployReactImg from '/images/aws-react.png';
import backgroundShapesImg from '/images/background-shapes-1.svg';
import styles from '../../../styles/pages/aws/awsReact.module.scss';
import { words } from '../../../words/pages/aws/react.words';

const AwsReact = () => {
  const onClickCta = () => {
    console.log('get started');
  };

  return (
    <Layout>
      <Box display="flex" flexDirection="column" marginBottom="space200">
        <HeroSection
          heading1="Deploy React to AWS the easy way."
          heading2="Get your React app into production on AWS in minutes with Depploy."
        >
          <Box flexGrow={1} display="flex" justifyContent="center">
            <Box width="500px" position="relative">
              <Box
                width="100%"
                position="absolute"
                padding="space150"
                zIndex="zIndex10"
              >
                <Box className={styles.deployReactImage}>
                  <Image src={deployReactImg} alt="Deploy React to AWS" />
                </Box>
              </Box>
              <Box zIndex="zIndex0">
                <Image
                  src={backgroundShapesImg}
                  layout="responsive"
                  alt="Deploy React to AWS Background"
                />
              </Box>
            </Box>
          </Box>
        </HeroSection>

        <FeatureSection
          name={words.infrastructureSection.name}
          title={words.infrastructureSection.title}
          summary={words.infrastructureSection.summary}
          buttonText={words.infrastructureSection.buttonText}
          hasBorderTop={true}
          onClickButton={onClickCta}
        >
          <Box
            display="grid"
            columnGap="space50"
            rowGap="space50"
            justifyContent="center"
            className={styles.architectureCardGrid}
          >
            <AwsS3Card />
            <AwsCloudfrontCard />
            <AwsRoute53Card />
            <AwsCertificateManagerCard />
          </Box>
        </FeatureSection>

        <FeatureSection
          name={words.simplicitySection.name}
          title={words.simplicitySection.title}
          summary={words.simplicitySection.summary}
          buttonText={words.simplicitySection.buttonText}
          onClickButton={onClickCta}
          reverse
        >
          <></>
        </FeatureSection>

        <FeatureSection
          name={words.freedomSection.name}
          title={words.freedomSection.title}
          summary={words.freedomSection.summary}
          buttonText={words.freedomSection.buttonText}
          onClickButton={onClickCta}
        >
          <></>
        </FeatureSection>

        <FeatureSection
          name={words.customizationSection.name}
          title={words.customizationSection.title}
          summary={words.customizationSection.summary}
          buttonText={words.customizationSection.buttonText}
          onClickButton={onClickCta}
          reverse
        >
          <></>
        </FeatureSection>
      </Box>
    </Layout>
  );
};

export default AwsReact;
