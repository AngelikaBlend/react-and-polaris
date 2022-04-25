import React from "react";

// POLARIS
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  AppProvider,
  Page,
  Card,
  Link,
  List,
  Heading,
  Subheading,
  Thumbnail,
  Badge
} from '@shopify/polaris';


class App extends React.Component {

  render() {
    return (
      <AppProvider i18n={enTranslations}>
        <Page title="Simple App - React.JS and Polaris">
          <Card >
            <Card.Section>
              <List type="bullet">
                <List.Item>
                  <Link url="https://polaris.shopify.com/components/get-started" external>See Polaris documentation</Link>
                </List.Item>
                <List.Item>
                  <Link url="https://blendprojects.monday.com/boards/2230938030/pulses/2586969778" external>Monday Pulse</Link>
                </List.Item>
              </List>
            </Card.Section>
            <Card.Section title="Description">
              <Heading>Using Polaris components create:</Heading>
              <br />
              <List type="number">
                <List.Item>
                  Two tabs view
                </List.Item>
                <List.Item>
                  In first tab:
                  <List type="bullet">
                    <List.Item>
                      Empty state with custom image.<br />
                      <Link url="https://www.shutterstock.com/search/empty+state" external>Choose one from here</Link>
                    </List.Item>
                    <List.Item>
                      Divider line
                    </List.Item>
                    <List.Item>
                      Card with text on the side (see image with example below).
                      <br />
                      <Thumbnail
                        source="https://user-images.githubusercontent.com/56729/50725732-67004f80-1145-11e9-9cc8-48c77b8df1a6.png"
                        size="large"
                      />
                      <Link url="https://user-images.githubusercontent.com/56729/50725732-67004f80-1145-11e9-9cc8-48c77b8df1a6.png" external>
                        Full image
                      </Link>
                    </List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  In second tab:
                  <List type="bullet">
                    <List.Item>
                      Create accordion with collapsable content
                      <Thumbnail
                        source={process.env.PUBLIC_URL + '/accordion close.png'}
                        size="large"
                      />
                      <Link url={process.env.PUBLIC_URL + '/accordion close.png'} external>
                        Full image
                      </Link>
                      <Thumbnail
                        source={process.env.PUBLIC_URL + '/accordion open.png'}
                        size="large"
                      />
                      <Link url={process.env.PUBLIC_URL + '/accordion open.png'} external>
                        Full image
                      </Link>
                    </List.Item>
                    <List.Item>
                      Two cards like in the image below                      
                      <br />
                      <Thumbnail
                        source="https://cdn.dribbble.com/users/1098897/screenshots/5986743/carson-checkout-_2x-dribbble.png"
                        size="large"
                      />
                      <Link url="https://cdn.dribbble.com/users/1098897/screenshots/5986743/carson-checkout-_2x-dribbble.png" external>
                        Full image
                      </Link>
                      When user clicks on the "Complate order" button please open Tooltip with
                    </List.Item>
                  </List>
                </List.Item>
              </List>
              <Heading>Please use only Polaris components (you can use: <Badge>p</Badge>,<Badge>br</Badge> if needed) and standard styles.</Heading>
              <Subheading>Use Lorem Ipsum to generate text</Subheading>
            </Card.Section>
          </Card>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
