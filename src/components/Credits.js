import React from "react";
import Styled from "styled-components";
import FadeInSection from "./FadeInSection";

const Container = Styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
`

const EndingCredits = Styled.div`
  font-family: "NTR", sans-serif;
  color: var(--slate);
  text-align: center;
  width: 100%;
  font-size: 16px;
  padding-bottom: 40px;
`

class Credits extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <FadeInSection>
        <Container id="credits">
          <EndingCredits>
            <div>Built and designed by <a href="https://github.com/gazijarin/Gazi">Gazi Jarin</a>. Improved by Vane</div>
            <div>All rights reserved. ©</div>
          </EndingCredits>
        </Container>
      </FadeInSection>
    );
  }
}

export default Credits;
