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
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroup,
  KebabToggle,
  List,
  ListItem,
  Modal,
  ModalVariant,
  Page,
  PageSection,
  Popover,
  SearchInput,
  SkipToContent,
  TextArea,
  TextInput,
  Title,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { DownloadIcon, GlobeIcon, PlusIcon } from "@patternfly/react-icons";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/logo-light.png";

const contacts = [
  {
    name: "Jane Doe",
    intro: "Optio, voluptate accus",
    avatar: "/avatar.svg",
    messages: [
      {
        them: true,
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolor hic temporibus nesciunt enim optio, voluptate accusamus, sit eum cumque suscipit rerum, vel quae quas iste doloribus modi ipsa fugit.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 5);

          return now;
        })(),
      },
      {
        them: false,
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolor hic temporibus nesciunt enim optio.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 2);

          return now;
        })(),
      },
      {
        them: false,
        body: "Lorem!",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 2);

          return now;
        })(),
      },
      {
        them: true,
        body: "Optio, voluptate accusamus, sit eum cumque suscipit rerum, vel quae quas iste doloribus modi ipsa fugit.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 1);

          return now;
        })(),
      },
    ],
  },
  {
    name: "Jean Doe",
    intro: "Quas iste doloribus",
    avatar: "/avatar.svg",
    messages: [
      {
        them: false,
        body: "Pharetra sit amet magna. Sed sollicitudin quam eu malesuada dapibus. Nullam risus nibh, aliquet vitae faucibus sit amet, pretium ac mi. Vivamus vulputate gravida enim, non finibus justo pretium commodo.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 5);

          return now;
        })(),
      },
      {
        them: true,
        body: "Fusce vestibulum porttitor nibh, non pellentesque lacus lobortis non. Pellentesque tincidunt et ipsum quis iaculis. Sed vulputate imperdiet facilisis.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 5);

          return now;
        })(),
      },
    ],
  },
  {
    name: "Luo Wenzao",
    intro: "Dolor sit amet",
    avatar: "/avatar.svg",
    messages: [
      {
        them: true,
        body: "Suspendisse vulputate, ipsum consectetur lacinia rhoncus, ante lacus pharetra quam, eget accumsan felis justo eget leo.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 5);

          return now;
        })(),
      },
      {
        them: true,
        body: "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 5);

          return now;
        })(),
      },
      {
        them: true,
        body: "Donec aliquam nibh eu risus sollicitudin",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours() - 3);

          return now;
        })(),
      },
      {
        them: false,
        body: "Maecenas rhoncus sapien et varius pulvinar.",
        date: (() => {
          const now = new Date();

          now.setHours(now.getHours());

          return now;
        })(),
      },
    ],
  },
];

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [addContactPopoverOpen, setContactPopoverOpen] = useState(false);
  const [accountActionsOpen, setAccountActionsOpen] = useState(false);
  const [userActionsOpen, setUserActionsOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [activeContactID, setActiveContactID] = useState(0);

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
        {loggedIn ? (
          <>
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
                          <Dropdown
                            onSelect={() => setAccountActionsOpen((v) => !v)}
                            className="pf-u-display-flex"
                            toggle={
                              <DropdownToggle
                                toggleIndicator={null}
                                onToggle={() =>
                                  setAccountActionsOpen((v) => !v)
                                }
                                aria-label="Toggle account actions"
                                className="pf-u-p-0 pf-x-account-actions"
                              >
                                <Avatar src="/avatar.svg" alt="avatar" />
                              </DropdownToggle>
                            }
                            isOpen={accountActionsOpen}
                            isPlain
                            dropdownItems={[
                              <DropdownItem
                                key="1"
                                component="button"
                                onClick={() => setLoggedIn(false)}
                              >
                                Logout
                              </DropdownItem>,
                              <DropdownItem
                                key="2"
                                component="button"
                                onClick={() => setAboutModalOpen(true)}
                              >
                                About
                              </DropdownItem>,
                            ]}
                          />
                        </ToolbarItem>

                        <ToolbarItem className="pf-u-flex-1">
                          <SearchInput
                            aria-label="Search"
                            placeholder="Search"
                            className="pf-c-search--main"
                          />
                        </ToolbarItem>

                        <ToolbarItem>
                          <Popover
                            aria-label="Add a content"
                            hasAutoWidth
                            showClose={false}
                            isVisible={addContactPopoverOpen}
                            shouldOpen={() => setContactPopoverOpen(true)}
                            shouldClose={() => setContactPopoverOpen(false)}
                            bodyContent={() => (
                              <div>
                                <div className="pf-c-title pf-m-md">
                                  Add a contact
                                </div>

                                <InputGroup className="pf-u-mt-md">
                                  <TextInput
                                    aria-label="Email of the account to add"
                                    type="email"
                                    placeholder="jean.doe@example.com"
                                  />
                                  <Button variant="control">
                                    <PlusIcon />
                                  </Button>
                                </InputGroup>
                              </div>
                            )}
                          >
                            <Button variant="plain" aria-label="edit">
                              <PlusIcon />
                            </Button>
                          </Popover>
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
                              onClick={() => setActiveContactID(id)}
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
                      <Dropdown
                        position={DropdownPosition.right}
                        onSelect={() => setUserActionsOpen((v) => !v)}
                        toggle={
                          <KebabToggle
                            aria-label="Toggle user actions"
                            onToggle={() => setUserActionsOpen((v) => !v)}
                          />
                        }
                        isOpen={userActionsOpen}
                        isPlain
                        dropdownItems={[
                          <DropdownItem
                            key="1"
                            component="button"
                            onClick={() => setBlockModalOpen(true)}
                          >
                            Block
                          </DropdownItem>,
                          <DropdownItem
                            key="2"
                            component="button"
                            onClick={() => setReportModalOpen(true)}
                          >
                            Report
                          </DropdownItem>,
                        ]}
                      />
                    </ToolbarGroup>
                  </ToolbarContent>
                </Toolbar>

                <DrawerContentBody className="pf-u-p-lg pf-c-overflow-y">
                  <List isPlain>
                    {contacts[activeContactID].messages.map((message, id) => (
                      <>
                        <ListItem key={id}>
                          <Card
                            isCompact
                            isFlat
                            isRounded
                            className={
                              message.them ? "pf-c-card--them" : "pf-c-card--us"
                            }
                          >
                            <CardBody>{message.body}</CardBody>
                          </Card>
                        </ListItem>

                        {contacts[activeContactID].messages[id + 1] &&
                          Math.abs(
                            message.date.getTime() -
                              contacts[activeContactID].messages[
                                id + 1
                              ].date.getTime()
                          ) /
                            (1000 * 60 * 60) >
                            2 && (
                            <ListItem>
                              <span className="pf-c-date">
                                {`Today ${message.date
                                  .getHours()
                                  .toString()
                                  .padStart(2, "0")}:${message.date
                                  .getMinutes()
                                  .toString()
                                  .padStart(2, "0")}`}
                              </span>
                            </ListItem>
                          )}
                      </>
                    ))}
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

            <Modal
              bodyAriaLabel="About modal"
              tabIndex={0}
              variant={ModalVariant.small}
              title="About"
              isOpen={aboutModalOpen}
              onClose={() => setAboutModalOpen(false)}
            >
              <div className="pf-u-text-align-center">
                <Image
                  src={logo}
                  alt="ChatScape logo"
                  className="pf-x-logo--about pf-u-mt-md pf-u-mb-lg"
                />

                <p>© AGPL-3.0 2023 Felicitas Pojtinger</p>

                <p>
                  Find the source code here:{" "}
                  <a
                    href="https://github.com/pojntfx/chatscape"
                    target="_blank"
                  >
                    pojntfx/chatscape
                  </a>{" "}
                  (
                  <a
                    href="https://felicitas.pojtinger.com/imprint"
                    target="_blank"
                  >
                    Imprint
                  </a>
                  )
                </p>
              </div>
            </Modal>

            <Modal
              bodyAriaLabel="Block modal"
              tabIndex={0}
              variant={ModalVariant.small}
              title="Block Jean Doe"
              isOpen={blockModalOpen}
              onClose={() => setBlockModalOpen(false)}
              actions={[
                <Button
                  key="confirm"
                  variant="danger"
                  onClick={() => setBlockModalOpen(false)}
                >
                  Block
                </Button>,
                <Button
                  key="cancel"
                  variant="link"
                  onClick={() => setBlockModalOpen(false)}
                >
                  Cancel
                </Button>,
              ]}
            >
              Are you sure you want to block Jean Doe? You will have to manually
              add them as a contact if you want to contact them again.
            </Modal>

            <Modal
              bodyAriaLabel="Report modal"
              variant={ModalVariant.small}
              title="Report Jean Doe"
              isOpen={reportModalOpen}
              onClose={() => setReportModalOpen(false)}
              actions={[
                <Button
                  key="report"
                  variant="danger"
                  type="submit"
                  form="report-form"
                >
                  Report
                </Button>,
                <Button
                  key="cancel"
                  variant="link"
                  onClick={() => setReportModalOpen(false)}
                >
                  Cancel
                </Button>,
              ]}
            >
              <Form
                id="report-form"
                onSubmit={() => setReportModalOpen(false)}
                noValidate={false}
              >
                <FormGroup
                  label="Your comment and the messages in violations of our policy"
                  isRequired
                  fieldId="report-form-comment"
                >
                  <TextArea
                    isRequired
                    required
                    id="report-form-comment"
                    name="report-form-comment"
                  />
                </FormGroup>
              </Form>
            </Modal>
          </>
        ) : (
          <div className="pf-x-login-page pf-u-h-100 pf-u-display-flex pf-u-align-items-center pf-u-justify-content-center pf-u-flex-direction-column pf-u-p-lg">
            <div className="pf-u-flex-1 pf-u-display-flex pf-u-align-items-center pf-u-justify-content-center pf-u-flex-direction-column pf-u-p-md">
              <Image src={logo} alt="ChatScape logo" className="pf-x-logo" />

              <Title
                headingLevel="h3"
                className="pf-u-mt-sm pf-u-mb-lg pf-x-subtitle"
              >
                Scalable Serverless Chat
              </Title>

              <div className="pf-x-ctas">
                <Button
                  variant="primary"
                  icon={<DownloadIcon />}
                  className="pf-u-mr-0 pf-u-mr-sm-on-sm pf-u-mb-sm pf-u-mb-0-on-sm"
                  onClick={() => setLoggedIn(true)}
                >
                  Download the app
                </Button>{" "}
                <Button
                  variant="link"
                  className="pf-u-mb-sm pf-u-mb-0-on-sm"
                  onClick={() => setLoggedIn(true)}
                >
                  Open in browser <GlobeIcon />
                </Button>
              </div>
            </div>

            <div className="pf-u-w-100 pf-u-pt">
              <div className="pf-l-flex pf-m-justify-content-space-between pf-x-footer">
                <div className="pf-l-flex__item">
                  <a
                    href="https://github.com/pojntfx/chatscape"
                    target="_blank"
                  >
                    © AGPL-3.0 2023 Felicitas Pojtinger
                  </a>
                </div>
                <div className="pf-l-flex__item">
                  <a
                    href="https://felicitas.pojtinger.com/imprint"
                    target="_blank"
                  >
                    Imprint
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageSection>
    </Page>
  );
}
