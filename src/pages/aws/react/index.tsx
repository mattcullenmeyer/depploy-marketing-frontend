import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Text } from '@twilio-paste/core/text';
import Image from 'next/image';
import deployReactImg from '/images/aws-react.png';
import backgroundShapesImg from '/images/background-shapes-1.svg';
import styles from './awsReact.module.scss';

const AwsReact = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      className={styles.container}
    >
      <Box
        width="450x"
        display="flex"
        flexDirection="column"
        marginBottom="space200"
        className={styles.containerLeftHalf}
      >
        <Box maxWidth="380px" marginTop="space200">
          <Text
            as="h1"
            fontSize="fontSize100"
            fontWeight="fontWeightSemibold"
            lineHeight="lineHeight100"
            marginBottom="space40"
          >
            Deploy React to AWS the easy way.
          </Text>
        </Box>
        <Box maxWidth="370px" marginBottom="space120">
          <Text
            as="h2"
            fontSize="fontSize60"
            fontWeight="fontWeightMedium"
            lineHeight="lineHeight50"
          >
            Get your React app into production on AWS in minutes, no DevOps
            required.
          </Text>
        </Box>
        <Box width="150px">
          <Button variant="primary" fullWidth>
            Deploy React
          </Button>
        </Box>
      </Box>
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
    </Box>
  );
};

export default AwsReact;
