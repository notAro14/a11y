import React from "react"
import ReactDOM from "react-dom"

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle"

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4"

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
}
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
)
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
)

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%">
        <Heading>Accessibilité dans le Web</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Résumé des conférences MiXiT 2022</Heading>
      <UnorderedList>
        <ListItem>
          Le handi-surf : l&apos;accessibilité d&apos;un site internet pour une
          personne tétraplégique
        </ListItem>
        <ListItem>The 97.4% North Star</ListItem>
      </UnorderedList>
    </Slide>
  </Deck>
)

ReactDOM.render(<Presentation />, document.getElementById("root"))
