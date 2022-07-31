import React from "react";
import Styled from "styled-components";
import { FolderOpen } from "@styled-icons/ionicons-solid/FolderOpen"

import FadeInSection from "./FadeInSection";

const Container = Styled.div`
  padding-left: 15%;
  padding-right: 25%;
  padding-top: 5%;
  min-height: 50vh;

  @media (max-width: 992px) {
    height: unset;
    padding-left: unset;
    padding-right: unset;
  }
`;

const ContentWrapper = Styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 992px) {
    display: unset;
  }
`;

const Image = Styled.div`
  padding-left: 40px;

  @media (max-width: 992px) {
    display: none;
  }

  &:hover {
    transform: translateY(-7px);
  }
`;

const StyledImg = Styled.img`
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  margin-left: 30px;
  box-shadow: 6px 13px 23px -5px rgba(0, 0, 0, 0.46);
  border: none;

  @media (max-width: 992px) {
    max-width: 200px;
  }
`;

const Description = Styled.div`
  font-family: "NTR", sans-serif;
  color: var(--white);
  max-width: 600px;
  font-size: 22px;
  text-align: justify;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 18px;
    text-align: justify;
  }

  ul {
    list-style-type: none;
    grid-template-columns: repeat(2, minmax(150px, 10px));
    padding: 0;
  }

  li {
    position: relative;
    padding-left: 20px;
    font-size: 18px;
    color: var(--white);
  }

  li::before {
    content: "▹    ";
    color: var(--eastern-blue);
    position: absolute;
    left: 0;
  }
`;

const SkillsWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const FolderIcon = Styled(FolderOpen)`
  width: 30px;
  margin: 5px;
`

const Download = Styled.a`
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

function ShortDesc() {
  return (
    <p>
      I am currently working as a full-time <b>Software Engineer</b> with
      interests and experiences in front-end web development at
      <a
        href="https://www.justika.com/tentang-kami"
        style={{ fontWeight: "bold" }}
      >
        {" "}
        Justika
      </a>
    </p>
  );
}

function Skills() {
  const tech_stack = ["React.js", "HTML, CSS, JS", "Next.js", "Ghost"];
  const testing = ["React Testing Library", "Cypress (e2e)"];
  const tools = ["Github", "Jira", "Sentry", "Mixpanel", "Notion"];

  return (
    <React.Fragment>
      {"Here are some technologies I have been working with:"}
      <SkillsWrapper>
        <ul className="tech-stack">
          <b>Front-end Web</b>
          {tech_stack.map(function (tech_item, i) {
            return (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li>{tech_item}</li>
              </FadeInSection>
            );
          })}
        </ul>
        <ul className="testing">
          <b>Testing</b>
          {testing.map(function (test_item, i) {
            return (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li>{test_item}</li>
              </FadeInSection>
            );
          })}
        </ul>
        <ul className="tools">
          <b>Tools</b>
          {tools.map(function (tool_item, i) {
            return (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li>{tool_item}</li>
              </FadeInSection>
            );
          })}
        </ul>
      </SkillsWrapper>
    </React.Fragment>
  );
}

function Others() {
  return (
    <p>
      Outside of work, I'm interested in reading autobiographies and am an
      enthusiast of photography.
    </p>
  );
}

function Resume() {
  return(
    <Download
      type="submit"
      onClick={() => window.open("/assets/resume.pdf")}
    >
        <FolderIcon/>
        {"Resume"}
    </Download>
  )
}

class About extends React.Component {
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
    return (
      <Container id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">About me</span>
          </div>
          <ContentWrapper>
            <Description>
              <ShortDesc />
              <Skills />
              <Others />
            </Description>
            <Image>
              <StyledImg
                src={"/assets/vane.jpeg"}
                alt="Picture of Maria Vanessa Salim"
              />
            </Image>
          </ContentWrapper>
          <Resume />
        </FadeInSection>
      </Container>
    );
  }
}

export default About;
