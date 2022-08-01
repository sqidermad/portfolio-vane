import React from "react";
import Styled from "styled-components";
import { Sidenav } from "rsuite";
import "react-typist/dist/Typist.css";

import { EmailIcon, LinkedInIcon, GithubIcon } from "./Icons";

const StyledSidebarNav = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  right: 0;
  padding-right: 5%;
  bottom: 10%;
  background-color: transparent;

  .rs-sidenav-subtle {
  background-color: transparent !important;

  @media (max-width: 992px) {
    width: 100%;
    height: 50px;
    position: unset;
    align-items: center;
  }
}
`;

const SidebarLinks = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  letter-spacing: 0em;
  line-height: 1.6em;
  font-size: 16px;
  padding: 0.2em;
  font-weight: bold;

  @media (max-width: 992px) {
    padding-left: 20px;
    flex-direction: row;
    text-align: right;
    font-size: 9px;
  }
`;

const SidebarLogos = Styled.div`
  padding-top: 42px;
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;

  @media (max-width: 992px) {
    padding-top: 0px;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

function SidebarLogo() {
  return (
    <SidebarLogos href="/">
      <a href="mailto:mariavanessasalim@gmail.com">
        <EmailIcon style={{ fontSize: 20 }} />
      </a>
      <a href="https://github.com/sqidermad">
        <GithubIcon style={{ fontSize: 19 }} />
      </a>
      <a href="https://www.linkedin.com/in/sqidermad/">
        <LinkedInIcon style={{ fontSize: 21 }} />
      </a>
    </SidebarLogos>
  );
}

const isMobile = window.screen.width < 992;
console.log("isMobile >> " + isMobile);
console.log("window.screen.width >> " + window.screen.width);

class SidebarNav extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const { expanded } = this.state;

    const links = [<a href="#intro">Home</a>, <a href="#about">About</a>];

    return (
      !isMobile && (
        <StyledSidebarNav>
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <SidebarLinks>
                {links.map((link, i) => (
                  <div>{link}</div>
                ))}
              </SidebarLinks>
            </Sidenav.Body>
          </Sidenav>
          <SidebarLogo />
        </StyledSidebarNav>
      )
    );
  }
}

export default SidebarNav;
