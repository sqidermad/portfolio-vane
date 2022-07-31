import React from "react";
import Styled from "styled-components";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import FadeInSection from "../components/FadeInSection";
import { IntroContainer } from "../components/Container";
import { EmailIcon } from "../components/Icons";
import { Description } from "../components/Description";
import Button from "../components/Button";

const Title = Styled.span`
  font-size: 86px;

  @media (max-width: 992px) {
    font-size: 46px;
  }
`;

const StyledTypist = Styled(Typist)`
  color: var(--white);
  text-align: center;
  font-size: 76px;
  margin-top: -30px;

  cursor: blink;

  @media (max-width: 992px) {
    font-size: 36px;
  }
`;

const Name = Styled.span`
  color: var(--eastern-blue);
  font-weight: bold;
  font-size: 86px;

  @media (max-width: 992px) {
    font-size: 46px;
  }
`;

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <IntroContainer id="intro">
        <StyledTypist avgTypingDelay={120}>
          <Title>
            {"Hi, "}
            <Name>{"Vane"}</Name>
            {" here."}
          </Title>
        </StyledTypist>
        <FadeInSection>
          <Description>
            A passionate software engineer with creative eagerness to learn,
            adapt, and openness to feedback. Find myself content to be able to
            help others to learn about anything I’ve learn. Always excited
            working in a supportive team and doing anything related to
            documentation. Looking for opportunities to gain more experiences
            and grow aside as a full-time coder.
          </Description>
          <Button onClick={() => window.open("mailto:mariavanessasalim@gmail.com")}>
            <EmailIcon />
            {" " + "Say hi!"}
          </Button>
        </FadeInSection>
      </IntroContainer>
    );
  }
}

export default Intro;
