import { Box } from '@twilio-paste/core/box';
import globalStyles from '../../../../styles/variables.module.scss';

export const IconBackground = ({ children }: { children: React.ReactNode }) => (
  <Box
    marginBottom="space70"
    height="55px"
    width="55px"
    backgroundColor="colorBackgroundDecorative40Weakest"
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRadius="borderRadius30"
    style={{
      fontSize: '35px',
      color: globalStyles.secondaryColor,
    }}
  >
    {children}
  </Box>
);
