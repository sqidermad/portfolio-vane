import React from "react";
import Styled from "styled-components";
import {Mail} from "@styled-icons/ionicons-solid/Mail";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import FadeInSection from "./FadeInSection";

const EmailIcon = Styled(Mail)`
  width: 30px;
`

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15%;
  padding-top: 18%;
  min-height: 100vh;

  @media (max-width: 992px) {
    min-height: unset;
    padding-left: unset;
    margin: 0;
    align-items: center;
  }
`;

const Title = Styled.span`
  font-family: "NTR", sans-serif;
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
  font-family: "NTR", sans-serif;
  color: var(--eastern-blue);
  font-weight: bold;
  font-size: 86px;

  @media (max-width: 992px) {
    font-size: 46px;
  }
`;

const Desc = Styled.div`
  color: var(--white);
  font-family: "NTR", sans-serif;
  font-size: 22px;
  max-width: 40%;
  text-align: justify;
  padding-bottom: 50px;

  @media (max-width: 992px) {
    font-size: 18px;
    text-align: center;
    max-width: unset;
    padding-bottom: 40px;
  }
`;

const Contact = Styled.a`
  font-size: 22px;
  font-weight: bolder;
  font-family: "NTR", sans-serif;
  padding: 10px 30px;
  cursor: pointer;
  border: 1px solid var(--eastern-blue);
  border-radius: 4px;

  &:hover {
    background-color: var(--astronaut-blue);
  }

  @media (max-width: 992px) {
    font-size: 16px;
    align-self: center;
    margin-left: 30%;
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
      <Container id="intro">
        <StyledTypist avgTypingDelay={120}>
          <Title>
            {"Hi, "}
            <Name>{"Vane"}</Name>
            {" here."}
          </Title>
        </StyledTypist>
        <FadeInSection>
          <Desc>
            A passionate software engineer with creative eagerness to learn,
            adapt, and openness to feedback. Find myself content to be able to
            help others to learn about anything I’ve learn. Always excited
            working in a supportive team and doing anything related to
            documentation. Looking for opportunities to gain more experiences
            and grow aside as a full-time coder.
          </Desc>
          <Contact href="mailto:mariavanessasalim@gmail.com">
            <EmailIcon />
            {"  " + "Say hi!"}
          </Contact>
        </FadeInSection>
      </Container>
    );
  }
}

export default Intro;
