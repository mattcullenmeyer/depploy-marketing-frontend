import React from 'react';
// Components
import { Box } from '@twilio-paste/core/box';
import { Layout } from '../../../components/Layout';
import { HeroSection } from '../../../components/LandingPage/components/HeroSection';
import { FeatureSection } from '../../../components/LandingPage/components/FeatureSection';
import { ImageBlock } from '../../../components/LandingPage/components/ImageBlock';
import { SectionHeading } from '../../../components/LandingPage/components/SectionHeading';
// import { CardRow } from '../../../components/LandingPage/components/CardRow';
import { SideBySide } from '../../../components/LandingPage/components/SideBySide';
import { ContentSeparatedSection } from '../../../components/LandingPage/components/ContentSeparatedSection';
// Images
import addInformationImg from '/images/add_information.svg';
// import doneCheckingImg from '/images/done_checking.svg';
import serverStatusImg from '/images/server_status.svg';
import devFocusImg from '/images/dev_focus.svg';
import buildingReactImg from '/images/building_react.svg';
// import onlinePaymentsImg from '/images/online_payments_right.svg';
import usabilityTestingImg from '/images/usability_testing.svg';
import versionControlImg from '/images/version_control.svg';
// Other
import { words } from '../../../words/product/aws/react.words';
import { env } from '../../../constants/env';

const AwsReact = () => {
  const heroSectionUrl = `${env.CONSOLE_ENDPOINT}/signup`;

  return (
    <Box display="flex" flexDirection="column" marginBottom="space200">
      <Layout paddingTop={true} backgroundColor="colorBackgroundPrimaryWeakest">
        <HeroSection
          heading={words.heroSection.heading}
          subheading={words.heroSection.subheading}
          buttonText={words.heroSection.button}
          buttonUrl={heroSectionUrl}
        >
          <ImageBlock
            src={buildingReactImg}
            alt={words.heroSection.imageAlt}
            width="600px"
            priority
          />
        </HeroSection>
      </Layout>

      <Layout paddingTop={false}>
        <>
          <SectionHeading
            heading={words.infrastructureSection.heading}
            subheading={words.infrastructureSection.subheading}
          />

          <ContentSeparatedSection
            content={words.infrastructureSection.gridCards()}
            paddingBottom
          />

          {/* <FeatureSection
            name={words.infrastructureSection.name}
            title={words.infrastructureSection.title}
            summary={words.infrastructureSection.summary}
            buttonText={words.infrastructureSection.buttonText}
            onClickButton={onClickCta}
          >
            <ImageBlock
              src={fittingPieceImg}
              alt={words.infrastructureSection.imageAlt}
              width="350px"
            />
          </FeatureSection> */}

          <FeatureSection
            name={words.freedomSection.name}
            title={words.freedomSection.title}
            summary={words.freedomSection.summary}
            reverse
          >
            <ImageBlock
              src={devFocusImg}
              alt={words.simplicitySection.imageAlt}
            />
          </FeatureSection>

          <FeatureSection
            name={words.flexibilitySection.name}
            title={words.flexibilitySection.title}
            summary={words.flexibilitySection.summary}
            buttonText={words.flexibilitySection.buttonText}
          >
            <ImageBlock
              src={serverStatusImg}
              alt={words.flexibilitySection.imageAlt}
            />
          </FeatureSection>

          <FeatureSection
            name={words.customizationSection.name}
            title={words.customizationSection.title}
            summary={words.customizationSection.summary}
            buttonText={words.customizationSection.buttonText}
            reverse
          >
            <ImageBlock
              src={addInformationImg}
              alt={words.customizationSection.imageAlt}
            />
          </FeatureSection>

          {/* 
          <FeatureSection
            name={words.savingsSection.name}
            title={words.savingsSection.title}
            summary={words.savingsSection.summary}
            buttonText={words.savingsSection.buttonText}
            onClickButton={onClickCta}
          >
            <ImageBlock
              src={onlinePaymentsImg}
              alt={words.savingsSection.imageAlt}
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
              alt={words.centralizationSection.imageAlt}
            />
          </FeatureSection> */}
        </>
      </Layout>

      <Layout paddingTop={false}>
        <>
          <SectionHeading heading={words.integrationSection.heading} />

          <SideBySide
            leftSide={{
              imgSrc: versionControlImg,
              imgAlt: words.continuousDeploySection.leftSide.imgAlt,
              heading: words.continuousDeploySection.leftSide.heading,
              text: words.continuousDeploySection.leftSide.text,
            }}
            rightSide={{
              imgSrc: usabilityTestingImg,
              imgAlt: words.continuousDeploySection.rightSide.imgAlt,
              heading: words.continuousDeploySection.rightSide.heading,
              text: words.continuousDeploySection.rightSide.text,
            }}
          />
        </>
      </Layout>
    </Box>
  );
};

export default AwsReact;
