import { Heading } from '@twilio-paste/core/heading';
import { Card } from '@twilio-paste/core/card';
import { Column, Grid } from '@twilio-paste/core/grid';
import { Text } from '@twilio-paste/core/text';
import { Box } from '@twilio-paste/core/box';

export interface GridCardProps {
  heading: string;
  paragraph: string;
}

interface CardComponent {
  cards: GridCardProps[];
}

interface CardRowProps extends CardComponent {
  paddingBottom?: boolean;
}

export function CardRow({
  cards,
  paddingBottom = false,
}: CardRowProps): React.ReactElement {
  if (paddingBottom) {
    return (
      <Box paddingBottom="space190">
        <CardComponent cards={cards} />
      </Box>
    );
  }

  return <CardComponent cards={cards} />;
}

const CardComponent = ({ cards }: CardComponent) => (
  <Grid gutter="space30" equalColumnHeights>
    {cards.map((card) => (
      <Column key={card.heading}>
        <Card padding="space70">
          <Heading as="h4" variant="heading30">
            {card.heading}
          </Heading>
          <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40">
            {card.paragraph}
          </Text>
        </Card>
      </Column>
    ))}
  </Grid>
);
