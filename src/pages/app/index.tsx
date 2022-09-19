import React from 'react';
import type { NextPage } from 'next';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Card } from '@twilio-paste/core/card';
import { Combobox } from '@twilio-paste/core/combobox';
import {
  Disclosure,
  DisclosureContent,
  DisclosureHeading,
} from '@twilio-paste/core/disclosure';
import { Heading } from '@twilio-paste/core/heading';
import { Input } from '@twilio-paste/core/input';
import { Label } from '@twilio-paste/core/label';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';
import styles from './app.module.scss';

const App: NextPage = () => {
  const regions = [
    { label: 'US East (N. Virginia)', abbr: 'us-east-1' },
    { label: 'US East (Ohio)', abbr: 'us-east-2' },
    { label: 'US West (N. California)', abbr: 'us-west-1' },
    { label: 'US West (Oregon)', abbr: 'us-west-2' },
    { label: 'Africa (Cape Town)', abbr: 'af-south-1' },
    { label: 'Asia Pacific (Hong Kong)', abbr: 'ap-east-1' },
    { label: 'Asia Pacific (Jakarta)', abbr: 'ap-southeast-3' },
    { label: 'Asia Pacific (Mumbai)', abbr: 'ap-south-1' },
    { label: 'Asia Pacific (Osaka)', abbr: 'ap-northeast-3' },
    { label: 'Asia Pacific (Seoul)', abbr: 'ap-northeast-2' },
    { label: 'Asia Pacific (Singapore)', abbr: 'ap-southeast-1' },
    { label: 'Asia Pacific (Sydney)', abbr: 'ap-southeast-2' },
    { label: 'Asia Pacific (Tokyo)', abbr: 'ap-northeast-1' },
    { label: 'Canada (Central)', abbr: 'ca-central-1' },
    { label: 'Europe (Frankfurt)', abbr: 'eu-central-1' },
    { label: 'Europe (Ireland)', abbr: 'eu-west-1' },
    { label: 'Europe (London)', abbr: 'eu-west-2' },
    { label: 'Europe (Milan)', abbr: 'eu-south-1' },
    { label: 'Europe (Paris)', abbr: 'eu-west-3' },
    { label: 'Europe (Stockholm)', abbr: 'eu-north-1' },
    { label: 'Middle East (Bahrain)', abbr: 'me-south-1' },
    { label: 'Middle East (UAE)', abbr: 'me-central-1' },
    { label: 'South America (São Paulo)', abbr: 'sa-east-1' },
  ];

  const RegionCombobox = () => {
    return (
      <Combobox
        required
        items={regions}
        labelText="Region"
        optionTemplate={(item) => (
          <Box display="flex" justifyContent="space-between">
            <Text as="span">{item.label}</Text>
            <Text as="span">{item.abbr}</Text>
          </Box>
        )}
        itemToString={(item) => (item ? `${item.label} ${item.abbr}` : '')}
      />
    );
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box width="500px" position="relative">
        <Box position="absolute" padding="space100" width="100%">
          <Box className={styles.getit}>
            <Card>
              <Box marginBottom="space100">
                <Heading as="h2" variant="heading20">
                  Deploy React to AWS
                </Heading>
              </Box>
              <Stack orientation="vertical" spacing="space70">
                <>
                  <Label htmlFor="domain" required>
                    Domain
                  </Label>
                  {/* <Label htmlFor="domain">Domain</Label> */}
                  <Input
                    aria-describedby="domain_help_text"
                    id="domain"
                    name="domain"
                    type="text"
                    placeholder="example.com"
                    insertBefore={
                      <Text as="span" fontWeight="fontWeightSemibold">
                        https://
                      </Text>
                    }
                    onChange={() => {}}
                    required
                  />
                </>
                <RegionCombobox />
                <Disclosure variant="contained">
                  <DisclosureHeading as="h3" variant="heading40">
                    Additional options
                  </DisclosureHeading>
                  <DisclosureContent>
                    <Stack orientation="vertical" spacing="space80">
                      <>
                        <Label htmlFor="subdomain">Subdomain</Label>
                        <Input
                          aria-describedby="subdomain_help_text"
                          id="subdomain"
                          name="subdomain"
                          type="text"
                          placeholder="subdomain"
                          insertAfter={
                            <Text as="span" fontWeight="fontWeightSemibold">
                              .example.com
                            </Text>
                          }
                          onChange={() => {}}
                        />
                      </>
                      <Button variant="secondary">Add another</Button>
                    </Stack>
                  </DisclosureContent>
                </Disclosure>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  marginTop="space100"
                >
                  <Stack orientation="horizontal" spacing="space50">
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="primary">Next</Button>
                    {/* <Button variant="primary">Deploy React</Button> */}
                  </Stack>
                </Box>
              </Stack>
            </Card>
          </Box>
        </Box>
        <img
          className={styles.newimg}
          src="https://www.mozilla.org/media/img/firefox/new/desktop/comparison-noodles-mr1.c18c975efae6.svg"
        />
      </Box>
    </Box>
  );
};

export default App;
