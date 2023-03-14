import { Anchor } from '@twilio-paste/core/anchor';
import { ContentBlock } from '../../../components/LandingPage/components/ContentSeparatedSection';
import { SquiggleText } from '../../../components/LandingPage/components/SquiggleText';
import globalStyles from '../../../styles/variables.module.scss';
import { env } from '../../../constants/env';

const contactSupportUrl = `${env.CONSOLE_ENDPOINT}/support/contact`;

export const words = {
  ctaButton: 'Get started free',
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
    //   Get fast and secure hosting, global CDN caching, TLS provisioning, and more  out of the box for your React app.`,
    subheading: `Easily provision and update your cloud infrastructure on AWS. 
      Get fast and secure hosting, global CDN caching, TLS provisioning, and more.`,
    imageAlt: 'People building a React app static website on AWS',
    objectionBustingCopy:
      'Deploy your first 2 apps free. No credit card required.',
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
    gridCards: (): ContentBlock[] => [
      {
        heading: 'Fully managed AWS solution',
        paragraph: `
          Quickly launch your React app into production with zero configuration. 
          Depploy handles all the AWS deployment details so you can focus on app development.`,
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
          Easily encrypt and secure your network communications with SSL/TLS certificates, 
          provisioned and renewed automatically by AWS Certificate Manager.`,
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
        <SquiggleText text="Continuous" imageAlt="Squiggly underline" /> and
        automatic deploys
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
        The AWS console has a steep learning curve and an outdated UI. 
        We built an easy-to-use, modern UI because we think design and user experience are important.`,
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
        Perfect for both early-stage and later-stage projects. 
        Use streamlined defaults to get started quickly. 
        Fine tune your configurations later with customizable options.`,
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
      Get enterprise-grade security, scalability, and performance built on modern best practices.`,
  },
  faqSection: {
    heading: 'Frequently asked questions',
    subheading: (
      <>
        {`Can't`} find the answer here?{' '}
        <Anchor href={contactSupportUrl}>Contact support</Anchor>
      </>
    ),
    questions: [
      {
        question: 'How does Depploy access my AWS account?',
        answer: [
          `You will need to give Depploy programmatic access to some of your AWS resources to use our service. 
          This requires you to create an IAM role in AWS and attach policies that give Depploy cross-account access. 
          Setup only takes a few minutes and we walk you through every step of the process.`,

          <>
            If that seems overwhelming, we understand. Thankfully, it only takes
            a few simple steps and we show you exactly what to do. You can
            always <Anchor href={contactSupportUrl}>contact support</Anchor> if
            you get stuck or have questions.
          </>,
        ],
      },
      {
        question: `Is my AWS account safe with the permissions I'm providing?`,
        answer: [
          <>
            All of our data and credentials are encrypted using the AES
            encryption algorithm with a 256-bit key. We follow the principle of
            least privilege when generating your
            {`role's`} permissions policy and provide you with a unique external
            ID for increased security. You can read more about{' '}
            <Anchor href="#">cross-account access</Anchor>
            {' and '}
            <Anchor href="#">external IDs</Anchor> in the AWS docs. You also
            have the option of revoking access to Depploy from your AWS account
            whenever {`you're`} not applying changes.
          </>,
        ],
      },
      // {
      //   question: 'How is this different from AWS Elastic Beanstalk?',
      //   answer: [
      //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      //   ],
      // },
      {
        question: `Can't I just deploy this myself?`,
        answer: [
          `You certainly can if you have the time and engineering resources. 
          However, provisioning and managing cloud infrastructure takes away precious time from app development. 
          Depploy provides a fully managed solution that doesn't require cloud experience or training to get started.`,

          `We provide free help via email, phone, or video any time you need a bug fixed or help with troubleshooting. 
          If something goes wrong with a do-it-yourself deployment, you're typically on your own.`,
        ],
      },
      // {
      //   question: 'How much effort is required to get setup?',
      //   answer: [
      //     `Initial setup only takes about 5 minutes.
      //     After signing up, you will need to grant Depploy partial access to your AWS account.
      //     We walk through this simple process together, step-by-step.`,

      //     `Once you've set up your account, you can start deploying your React app.
      //     You only need to provide a few details, like your domain name, if you choose the default configurations.
      //     `,

      //     `Signup, create role in AWS, update DNS records with your DNS provider, default configurations, few minutes to deploy (TLS certificate and edge locations)`,
      //   ],
      // },
      {
        question:
          'Can I make manual changes to AWS resources managed by Depploy?',
        answer: [
          `No, it is not recommended. Depploy keeps a state file of all the resources that it manages on your behalf. 
          Making manual changes to these resources causes our state file to be out of sync with your actual infrastructure.`,

          `If our state file doesn't match your infrastructure, we will attempt to reconcile the differences next time you apply changes from the Depploy console.
          This will override your manual changes and may destroy or recreate resources.`,

          <>
            If you have a use case that is not supported by our product or made
            changes to your AWS resources outside of the Depploy workflow,
            please <Anchor href={contactSupportUrl}>contact support</Anchor>.
          </>,
        ],
      },
      {
        question:
          'What happens to my AWS resources if I cancel my subscription?',
        answer: [
          `You retain full control of your AWS resources at all times. 
          Your AWS infrastructure will continue to work just as before if you decide to cancel your subscription. 
          This flexibility allows developers to seamlessly transition into managing some or all of their underlying infrastructre as needed.`,
        ],
      },
      {
        question: 'Why is an annual subscription required?',
        answer: [
          `We automatically provision and manage AWS infrastructure on your behalf within your own AWS account. 
          You remain in control of your infrastructure at all times, even if you cancel your subscription. 
          If we didn't require an annual subscription, customers could sign up for a month, deploy their apps, and then cancel.`,

          // `However, we offer a 30-day money back guarantee.
          // If you're unhappy with Depploy for any reason, you can cancel your annual subscription within the first 30 days and we'll refund 100% of your money.`,
        ],
      },
      {
        question:
          'Can I try Depploy before committing to an annual subscription?',
        answer: [
          `New signups can deploy their first 2 apps for free with Depploy to test its capabilities before purchasing a subscription. 
          After that, you will see a message that a subscription is necessary to deploy additional apps.`,
        ],
      },
    ],
  },
  ctaSection: {
    heading: 'Try Depploy for free',
    subheading: `
      It only takes a few minutes to deploy your React app. 
      No credit card required.`,
  },
};
