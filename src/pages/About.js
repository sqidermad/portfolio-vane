import React from "react";
import Styled from "styled-components";

import { AboutContainer } from "../components/Container";
import { FolderIcon } from "../components/Icons";
import { Description } from "../components/Description";
import Button from "../components/Button";

const ContentWrapper = Styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 992px) {
    display: unset;
  }
`;

const SectionHeader = Styled.div`
  display: flex;
  padding-bottom: 42px;
  width: 100vw;

  ::after {
    content: "";
    display: block;
    width: 300px;
    margin-top: 39px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--astronaut-blue);
  }

  @media( max-width: 992px) {
    padding-bottom: unset;
    width: unset;

    ::after {
      display: none;
    }
  }
`;

const ImageWrapper = Styled.div`
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

const SkillsWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Title = Styled.h1`
  color: var(--white);
  font-weight: bold;

  @media (max-width: 992px) {
    font-size: 32px;
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

function Skill(props) {
  return (
    <ul>
      <b>{props.title}</b>
      {props.skill.map(function (skill_item, i) {
        return <li>{skill_item}</li>;
      })}
    </ul>
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
        <Skill title="Front-end Web" skill={tech_stack} />
        <Skill title="Testing" skill={testing} />
        <Skill title="Tools" skill={tools} />
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
      <AboutContainer id="about">
        <SectionHeader>
          <Title>{"About me"}</Title>
        </SectionHeader>
        <ContentWrapper>
          <Description>
            <ShortDesc />
            <Skills />
            <Others />
          </Description>
          <ImageWrapper>
            <StyledImg
              src={"/assets/vane.jpeg"}
              alt="Picture of Maria Vanessa Salim"
            />
          </ImageWrapper>
        </ContentWrapper>
        <Button onClick={() => window.open("/assets/resume.pdf")}>
          <FolderIcon />
          {"Resume"}
        </Button>
      </AboutContainer>
    );
  }
}

export default About;
