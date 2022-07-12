import React from "react"
import ReactDOM from "react-dom"

import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
  Link,
  Notes,
} from "spectacle"

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
    <Slide>
      <Heading>C&apos;est quoi l&apos;accessibilité ?</Heading>
      <Text>Le fait qu'un site soit utilisable par le plus grand nombre.</Text>
      <Text>
        Notamment par les personnes qui naviguent sur internet d&apos;une autre
        manière qu'avec le clavier et la souris.
      </Text>
      <Notes>
        <ul>
          <li>comme pour les bâtiments, le métro, le bus</li>
          <li>il s&apos;agit de l&apos;utilisabilité du site</li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>L'autre manière de naviguer sur internet</Heading>
      <Notes>
        <ul>
          <li>Concerne personnes avec handicap physique moteur</li>
          <li>Contacteur : pénible de naviguer sur un site inaccessible</li>
        </ul>
      </Notes>
      <UnorderedList>
        <Appear>
          <ListItem>appareil de suivi de la tête ou des yeux</ListItem>
        </Appear>
        <Appear>
          <ListItem>joystick</ListItem>
        </Appear>
        <Appear>
          <ListItem>commande vocale</ListItem>
        </Appear>
        <Appear>
          <ListItem>contacteur (souffle, muscle)</ListItem>
        </Appear>
        <Appear>
          <ListItem>licorne (casque avec une tige montée)</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Pourquoi l&apos;accessibilité ?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Améliorer l&apos;accessibilité pour certains améliore
            l&apos;utilisabilité pour tous
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Obligation légale</Text>
            <UnorderedList>
              <Appear>
                <ListItem>
                  Site du service public (<strong>Septembre 2020</strong>)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Secteur privé CA &gt; 250M euros (
                  <strong>Septembre 2020</strong>)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Apps mobiles (<strong>Juin 2021</strong>)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  E-commerce, banques et transport (<strong>2025</strong>)
                </ListItem>
              </Appear>
            </UnorderedList>
          </ListItem>
        </Appear>
        <Notes>
          <ul>
            <li>Texte bcp trop petit</li>
            <li>Constraste des couleurs mal ajusté (PS : devtools)</li>
            <li>Navigation dans les formulaires</li>
            <li>
              Pop up qui ne se ferme pas avec la touche <kbd>Esc</kbd>
            </li>
          </ul>
        </Notes>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Les problèmes les plus courants</Heading>
      <Text>
        <strong>97.4%</strong> des pages d&apos;accueil dans le Top 1 000 000
        des sites ont des problèmes d&apos;accessibilité basiques. Par exemple :
      </Text>
      <UnorderedList>
        <ListItem>images sans texte de description</ListItem>
        <ListItem>lien d&apos;accès rapide manquant</ListItem>
        <ListItem>mauvaise hiérarchie des titres</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Quelques exemples concrets</Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://optiweb.test-hydra-master.kozea.fr/">
            Pharminfo
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.nytimes.com/international/">NY Times</Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.opquast.com/">Opquast</Link>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Merci à tous 😁</Heading>
      </FlexBox>
    </Slide>
  </Deck>
)

ReactDOM.render(<Presentation />, document.getElementById("root"))
