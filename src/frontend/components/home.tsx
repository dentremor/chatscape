import {
  Avatar,
  Button,
  Card,
  CardBody,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelBody,
  DrawerPanelContent,
  List,
  ListItem,
  Page,
  PageSection,
  SearchInput,
  SkipToContent,
  TextInput,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { EditIcon, EllipsisVIcon } from "@patternfly/react-icons";

const contacts = [
  {
    name: "Jane Doe",
    intro: "Optio, voluptate accus",
    avatar: "/avatar.svg",
  },
  {
    name: "Jean Doe",
    intro: "Quas iste doloribus",
    avatar: "/avatar.svg",
  },
  {
    name: "Luo Wenzao",
    intro: "Dolor sit amet",
    avatar: "/avatar.svg",
  },
];

const activeContactID = 0;

export default function Home() {
  return (
    <Page
      className="pf-c-page--background"
      skipToContent={
        <SkipToContent href="#main">Skip to content</SkipToContent>
      }
      mainContainerId="main"
    >
      <PageSection
        className="pf-u-p-0 pf-c-page__main-section--transparent"
        id="main"
      >
        <Drawer isExpanded isInline position="left">
          <DrawerContent
            panelContent={
              <DrawerPanelContent
                className="pf-c-drawer__panel--transparent"
                widths={{ default: "width_33" }}
              >
                <Toolbar className="pf-u-m-0" isSticky>
                  <ToolbarContent className="pf-u-px-lg">
                    <ToolbarItem className="pf-u-display-flex">
                      <Avatar src="/avatar.svg" alt="avatar" />
                    </ToolbarItem>

                    <ToolbarItem className="pf-u-flex-1">
                      <SearchInput
                        aria-label="Search"
                        placeholder="Search"
                        className="pf-c-search--main"
                      />
                    </ToolbarItem>

                    <ToolbarItem>
                      <Button variant="plain" aria-label="edit">
                        <EditIcon />
                      </Button>
                    </ToolbarItem>
                  </ToolbarContent>
                </Toolbar>

                <DrawerPanelBody className="pf-c-overflow-y pf-u-p-0">
                  <List isPlain>
                    {contacts.map((contact, id) => (
                      <ListItem key={id}>
                        <Button
                          variant="plain"
                          className="pf-u-display-flex pf-u-align-items-center pf-u-p-md pf-u-m-sm pf-u-contact-selector"
                          isActive={id === activeContactID}
                        >
                          <Avatar
                            src={contact.avatar}
                            alt="avatar"
                            className="pf-u-mr-md"
                          />

                          <div className="pf-u-display-flex pf-u-flex-direction-column pf-u-align-items-flex-start pf-u-justify-content-center">
                            <div className="pf-u-font-family-heading-sans-serif">
                              {contact.name}
                            </div>

                            <div className="pf-u-icon-color-light">
                              {contact.intro} ...
                            </div>
                          </div>
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </DrawerPanelBody>
              </DrawerPanelContent>
            }
          >
            <Toolbar className="pf-u-m-0" isSticky>
              <ToolbarContent className="pf-u-px-lg">
                <ToolbarGroup>
                  <ToolbarItem className="pf-u-display-flex">
                    <span className="pf-u-icon-color-light pf-u-mr-xs">
                      To:
                    </span>{" "}
                    Jane Doe
                  </ToolbarItem>
                </ToolbarGroup>

                <ToolbarGroup
                  alignment={{
                    default: "alignRight",
                  }}
                >
                  <Button variant="plain" aria-label="edit">
                    <EllipsisVIcon />
                  </Button>
                </ToolbarGroup>
              </ToolbarContent>
            </Toolbar>

            <DrawerContentBody className="pf-u-p-lg pf-c-overflow-y">
              <List isPlain>
                <ListItem>
                  <Card isCompact isFlat isRounded className="pf-c-card--them">
                    <CardBody>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis dolor hic temporibus nesciunt enim optio,
                      voluptate accusamus, sit eum cumque suscipit rerum, vel
                      quae quas iste doloribus modi ipsa fugit.
                    </CardBody>
                  </Card>
                </ListItem>
                <ListItem>
                  <span className="pf-c-date">Today 16:02</span>
                </ListItem>
                <ListItem>
                  <Card isCompact isFlat isRounded className="pf-c-card--us">
                    <CardBody>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Blanditiis dolor hic temporibus nesciunt enim optio.
                    </CardBody>
                  </Card>
                </ListItem>
                <ListItem>
                  <Card isCompact isFlat isRounded className="pf-c-card--us">
                    <CardBody>Lorem!</CardBody>
                  </Card>
                </ListItem>
                <ListItem>
                  <Card isCompact isFlat isRounded className="pf-c-card--them">
                    <CardBody>
                      Optio, voluptate accusamus, sit eum cumque suscipit rerum,
                      vel quae quas iste doloribus modi ipsa fugit.
                    </CardBody>
                  </Card>
                </ListItem>
                <ListItem>
                  <span className="pf-c-date">Today 16:10</span>
                </ListItem>
              </List>
            </DrawerContentBody>

            <Toolbar className="pf-u-m-0 pf-u-pt-md pf-u-box-shadow-sm-top pf-u-box-shadow-none-bottom pf-c-toolbar--sticky-bottom">
              <ToolbarContent className="pf-u-px-lg">
                <ToolbarItem className="pf-u-flex-1">
                  <TextInput
                    type="text"
                    aria-label="Message to send"
                    placeholder="Your message"
                  />
                </ToolbarItem>
              </ToolbarContent>
            </Toolbar>
          </DrawerContent>
        </Drawer>
      </PageSection>
    </Page>
  );
}
