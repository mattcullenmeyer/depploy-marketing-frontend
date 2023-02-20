import React from 'react';
import globalStyles from '../../../styles/variables.module.scss';

export const words = {
  heroSection: {
    // h1: 'Deploy your React app to AWS in minutes without managing the infrastructure',
    h1: (
      <>
        {'Build and deploy your'}
        <span style={{ color: globalStyles.secondaryColor }}>
          {' React app '}
        </span>
        {'to AWS in minutes...'}
      </>
    ),
    h2: '...without managing the infrastructure.',
    imageAlt: 'People building a React app static website on AWS',
  },
  infrastructureSection: {
    name: 'AUTOMATION',
    title: 'Fully managed AWS solution',
    summary: `Automatically provision AWS infrastructure for your React app in minutes. 
      Get fast and secure hosting, global CDN caching, DNS routing, SSL/TLS provisioning, and more.`,
    imageAlt: 'Person putting shapes on a web page',
    buttonText: 'Deploy React',
  },
  simplicitySection: {
    name: 'SIMPLICITY',
    title: 'Build and deploy React quickly',
    summary: `Quickly launch your React app into production without the complexity of managing the underlying infrastructure yourself. 
      No DevOps or cloud experience required.`,
    imageAlt:
      'A software developer sitting at a laptop computer, focusing on work',
    buttonText: 'Deploy React',
  },
  flexibilitySection: {
    name: 'FLEXIBILITY',
    title: 'Future-proof your infrastructure',
    summary: `Enjoy the features and flexibility of a large cloud platform that you'll never outgrow. 
      Maintain full control of your AWS resources without needing to maintain them.`,
    imageAlt: 'A person checking on the status of a web server',
    buttonText: 'Deploy React',
  },
  savingsSection: {
    name: 'SAVINGS',
    title: 'Minimize your costs and surprise billings',
    summary: `AWS services can be cost effective with proper planning. 
      Depploy provides cost optimized deployments without you needing to scrutinize every step.`,
    imageAlt:
      'Someone holding an oversized credit card in front of a to-do list with checkmarks',
    buttonText: 'Deploy React',
  },
  customizationSection: {
    name: 'CUSTOMIZATION',
    title: 'Simple tools for complex configs',
    summary: `Your AWS infrastructure should evolve with your React app. 
      Customize your cloud architecture anytime with easy-to-change deployment templates.`,
    imageAlt: 'A person adding pieces of information to a blank screen',
    buttonText: 'Deploy React',
  },
  centralizationSection: {
    name: 'CENTRALIZATION',
    title: 'Review your infrastructure from a simple UI',
    summary: `Automate the orchestration of AWS resources without logging into the AWS console. 
      Depploy offers a super intuitive user interface to easily manage the many AWS products that power your React app, 
      all from one centralized dashboard.`,
    imageAlt: 'A person staring at floating to-do lists with checkmarks',
    buttonText: 'Deploy React',
  },
  freedomSection: {
    name: 'FREEDOM',
    title: 'Focus on development, not deployments',
    summary: '',
  },
};
