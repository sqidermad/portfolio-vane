import React from "react";
import Styled from "styled-components";

import { CreditContainer } from "../components/Container";

const EndingCredits = Styled.div`
  color: var(--white);
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
        <CreditContainer id="credits">
          <EndingCredits>
            <div>Designed by <a href="https://github.com/gazijarin/Gazi">Gazi Jarin</a>. Build by Vane</div>
            <div>All rights reserved. ©</div>
          </EndingCredits>
        </CreditContainer>
    );
  }
}

export default Credits;
