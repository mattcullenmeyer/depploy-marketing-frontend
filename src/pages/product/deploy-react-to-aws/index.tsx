import React from 'react';
// Components
import { Box } from '@twilio-paste/core/box';
import { Layout } from '../../../components/Layout';
import { HeroSection } from '../../../components/LandingPage/components/HeroSection';
import { FeatureSection } from '../../../components/LandingPage/components/FeatureSection';
import { ImageBlock } from '../../../components/LandingPage/components/ImageBlock';
import addInformationImg from '/images/add_information.svg';
import doneCheckingImg from '/images/done_checking.svg';
import serverStatusImg from '/images/server_status.svg';
import devFocusImg from '/images/dev_focus.svg';
import buildingReactImg from '/images/building_react.svg';
import onlinePaymentsImg from '/images/online_payments_right.svg';
import fittingPieceImg from '/images/fitting_piece.svg';
// Other
import { words } from '../../../words/pages/aws/react.words';

const AwsReact = () => {
  const onClickCta = () => {
    console.log('get started');
  };

  return (
    <Box display="flex" flexDirection="column" marginBottom="space200">
      <Layout paddingTop={true} backgroundColor="colorBackgroundPrimaryWeakest">
        <HeroSection
          heading1={words.heroSection.h1}
          heading2={words.heroSection.h2}
        >
          <ImageBlock
            src={buildingReactImg}
            alt={words.heroSection.imageAlt}
            width="500px"
            priority
          />
        </HeroSection>
      </Layout>

      <Layout paddingTop={false}>
        <>
          <FeatureSection
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
              alt={words.simplicitySection.imageAlt}
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
              alt={words.flexibilitySection.imageAlt}
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
              alt={words.customizationSection.imageAlt}
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
          </FeatureSection>
        </>
      </Layout>
    </Box>
  );
};

export default AwsReact;
