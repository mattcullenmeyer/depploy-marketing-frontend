import React from 'react';
import { GridCardProps } from '../../../components/LandingPage/components/CardRow';
import { SquiggleText } from '../../../components/LandingPage/components/SquiggleText';
import globalStyles from '../../../styles/variables.module.scss';

export const words = {
  heroSection: {
    heading: (
      <>
        {'The easy way to deploy your'}
        <span style={{ color: globalStyles.secondaryColor }}>
          {' React app '}
        </span>
        {'to AWS'}
      </>
    ),
    // h2: `Provision AWS infrastructure for your React app in minutes without logging into the AWS console.
    //   Get fast and secure hosting, global CDN caching, TLS provisioning, and more.`,
    subheading: `Easily provision and update your cloud infrastructure on AWS without logging into the AWS console. 
      Get fast and secure hosting, global CDN caching, TLS provisioning, and more out of the box for your React app.`,
    button: 'Get started free',
    imageAlt: 'People building a React app static website on AWS',
  },
  infrastructureSection: {
    heading: (
      <>
        React to{' '}
        <SquiggleText text="production" imageAlt="Squiggly underline" /> in
        minutes
      </>
    ),
    subheading: 'Build, deploy, and scale your React app on AWS with Depploy.',
    gridCards: (): GridCardProps[] => [
      {
        heading: 'Fully managed AWS solution',
        paragraph: `
          Quickly launch your React app into production with zero configuration required. 
          Depploy automatically handles all the AWS deployment details so you can focus on app development.`,
      },
      {
        heading: 'Blazing fast, global CDN',
        paragraph: `
          Make your React site as lightening fast as possible. 
          Automatically compress and cache static assets to edge locations around the world with AWS Cloudfront.`,
      },
      {
        heading: 'TLS certificate renewal',
        paragraph: `
          Easily encrypt and secure your network communications with SSL/TLS certificates. 
          Certificates are provisioned and renewed automatically by AWS Certificate Manager.`,
      },
    ],
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
    title: 'Focus on development, not deployment',
    summary:
      'Depploy makes it incredibly easy to deploy React applications to AWS, freeing up more developer time for writing code and shipping features.',
  },
  integrationSection: {
    heading: (
      <>
        Automatic and{' '}
        <SquiggleText text="continuous" imageAlt="Squiggly underline" /> deploys
      </>
    ),
  },
  continuousDeploySection: {
    leftSide: {
      imgAlt:
        'Software developer working on a laptop with connected dots floating behind them',
      heading: 'Easily integrate with GitHub',
      text: `
        Build and deploy your React app continuously with GitHub integrations. 
        Automatically trigger a deployment workflow every time you push changes to your GitHub repository.`,
    },
    rightSide: {
      imgAlt:
        'Two people standing to the side of a website screen, moving pieces around on the screen',
      heading: 'Shareable deployment previews',
      text: `
        Confidently deploy to production by previewing changes in advance. 
        Every pull request automatically deploys a new version of your site with its own URL to preview before going live.`,
    },
  },
  whyUseDepploySection: {
    heading: (
      <>
        Why use <SquiggleText text="Depploy" imageAlt="Squiggly underline" />?
      </>
    ),
    subheading:
      'Get the simple experience of a managed solution with the savings and flexibility of running your own infrastructure.',
    reason1: {
      heading: 'No devops required',
      subheading: `
        Easy to use and understand with no training or prior experience. 
        No need to learn another templating taxonomy, CLI, SDK or write any YAML.`,
    },
    reason2: {
      heading: 'It’s your infrastructure',
      subheading: `
        We deploy your React app directly to your AWS account. 
        You maintain full control of your infrastructure at all times, even after leaving Depploy.`,
    },
    reason3: {
      heading: 'Modern user experience',
      subheading: `
        The AWS console is outdated and has a steep learning curve. 
        We've built an easy-to-use, modern UI because we think design and user experience are important.`,
    },
    reason4: {
      heading: 'Avoid vendor lock-in',
      subheading: `
        Depploy offers flat and affordable pricing. 
        Alternatives get costly if you have a large team of developers, sites with high bandwidth usage, or lengthy build times each month.`,
    },
    reason5: {
      heading: 'Customize over time',
      subheading: `
        Perfect for both early-stage and later-stage projects. Use streamlined defaults to get started quickly. 
        Customize configurations later with super intuitive options.`,
    },
    reason6: {
      heading: 'Proven reusable templates',
      subheading: `
        Most static sites have the same basic infrastructure needs. 
        Leverage our collection of reusable, production-ready templates instead of starting from scratch.`,
    },
  },
  awsSection: {
    heading: (
      <>
        Best in class cloud{' '}
        <SquiggleText text="architecture" imageAlt="Squiggly underline" />
      </>
    ),
    subheading: `
      Automate the orchestration of your AWS resources. 
      Your architecture will feature enterprise-grade security, scalability, and performance built on modern best practices.`,
  },
};
