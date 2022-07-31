import React from "react";

import Styled from "styled-components";
import { Mail } from "@styled-icons/ionicons-solid/Mail";
import { LogoLinkedin } from "@styled-icons/ionicons-solid/LogoLinkedin";
import { LogoGithub } from "@styled-icons/ionicons-solid/LogoGithub"

import { Sidenav } from "rsuite";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

const EmailIcon = Styled(Mail)`
  width: 35px;
`;

const LinkedInIcon = Styled(LogoLinkedin)`
  width: 30px;
`;

const GithubSquareIcon = Styled(LogoGithub)`
  width: 30px;
`;

const isMobile = window.innerWidth < 600;

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
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <div>{link}</div>
                  </FadeInSection>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="sidebar-logos" href="/">
          <a href="mailto:mariavanessasalim@gmail.com">
            <EmailIcon style={{ fontSize: 20 }} />
          </a>
          <a href="https://github.com/sqidermad">
            <GithubSquareIcon style={{ fontSize: 19 }} />
          </a>
          <a href="https://www.linkedin.com/in/sqidermad/">
            <LinkedInIcon style={{ fontSize: 21 }} />
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
