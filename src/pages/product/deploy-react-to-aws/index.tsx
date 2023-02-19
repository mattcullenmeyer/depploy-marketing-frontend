import React from 'react';
import Image from 'next/image';
// Components
import { Box } from '@twilio-paste/core/box';
import { Layout } from '../../../components/Layout';
import { HeroSection } from '../../../components/LandingPage/components/HeroSection';
import { FeatureSection } from '../../../components/LandingPage/components/FeatureSection';
import { ImageBlock } from '../../../components/LandingPage/components/ImageBlock';
// import {
//   AwsS3Card,
//   AwsCloudfrontCard,
//   AwsRoute53Card,
//   AwsCertificateManagerCard,
// } from '../../../components/LandingPage/components/ArchitectureCard/AWS';
// Images
import deployReactImg from '/images/aws-react.png';
import backgroundShapesImg from '/images/background-shapes-1.svg';
import addInformationImg from '/images/add_information.svg';
import doneCheckingImg from '/images/done_checking.svg';
import serverStatusImg from '/images/server_status.svg';
import devFocusImg from '/images/dev_focus.svg';
import buildingReactImg from '/images/building_react.svg';
import onlinePaymentsImg from '/images/online_payments_right.svg';
// Other
import styles from '../../../styles/pages/aws/awsReact.module.scss';
import { words } from '../../../words/pages/aws/react.words';

const AwsReact = () => {
  const onClickCta = () => {
    console.log('get started');
  };

  return (
    <Box display="flex" flexDirection="column" marginBottom="space200">
      <Layout paddingTop={true} backgroundColor="colorBackgroundPrimaryWeakest">
        <HeroSection
          // heading1="Deploy React to AWS the easy way."
          heading1="Quickly deploy React apps to AWS without managing infrastructure"
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
      </Layout>

      <Layout paddingTop={false}>
        <>
          <FeatureSection
            name={words.infrastructureSection.name}
            title={words.infrastructureSection.title}
            summary={words.infrastructureSection.summary}
            buttonText={words.infrastructureSection.buttonText}
            // hasBorderTop={true}
            onClickButton={onClickCta}
          >
            {/* <Box
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
          </Box> */}
            <ImageBlock
              src={buildingReactImg}
              alt={'People building a React website on AWS'}
            />
          </FeatureSection>

          <FeatureSection
            name={words.simplicitySection.name}
            title={words.simplicitySection.title}
            summary={words.simplicitySection.summary}
            buttonText={words.simplicitySection.buttonText}
            onClickButton={onClickCta}
            reverse
          >
            <ImageBlock
              src={devFocusImg}
              alt={
                'A software developer sitting at a laptop computer, focusing on work'
              }
            />
          </FeatureSection>

          <FeatureSection
            name={words.flexibilitySection.name}
            title={words.flexibilitySection.title}
            summary={words.flexibilitySection.summary}
            buttonText={words.flexibilitySection.buttonText}
            onClickButton={onClickCta}
          >
            <ImageBlock
              src={serverStatusImg}
              alt={'A person checking on the status of a web server'}
            />
          </FeatureSection>

          <FeatureSection
            name={words.customizationSection.name}
            title={words.customizationSection.title}
            summary={words.customizationSection.summary}
            buttonText={words.customizationSection.buttonText}
            onClickButton={onClickCta}
            reverse
          >
            <ImageBlock
              src={addInformationImg}
              alt={'A person adding boxes of information to a blank screen'}
            />
          </FeatureSection>

          <FeatureSection
            name={words.savingsSection.name}
            title={words.savingsSection.title}
            summary={words.savingsSection.summary}
            buttonText={words.savingsSection.buttonText}
            onClickButton={onClickCta}
          >
            <ImageBlock
              src={onlinePaymentsImg}
              alt={
                'Someone holding an oversized credit card in front of a list of checkmarks'
              }
            />
          </FeatureSection>

          <FeatureSection
            name={words.centralizationSection.name}
            title={words.centralizationSection.title}
            summary={words.centralizationSection.summary}
            buttonText={words.centralizationSection.buttonText}
            onClickButton={onClickCta}
            reverse
          >
            <ImageBlock
              src={doneCheckingImg}
              alt={'A person staring at floating to-do lists with checkmarks'}
            />
          </FeatureSection>
        </>
      </Layout>
    </Box>
  );
};

export default AwsReact;
