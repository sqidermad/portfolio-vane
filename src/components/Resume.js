import React from "react";
import Styled from "styled-components";

const Contact = Styled.a`
  font-size: 22px;
  font-weight: bolder;
  font-family: "NTR", sans-serif;
  padding: 10px 30px;
  cursor: pointer;
  border: 1px solid var(--green-bright);
  border-radius: 4px;

  &:hover {
    background-color: var(--lightest-navy);
  }

  @media (max-width: 992px) {
    font-size: 16px;
    align-self: center;
    margin-left: 30%;
  }
`;

export default function Resume() {
  return (
    <Contact type="submit" onClick={() => window.open("resume.pdf")}>
      {"Open Resume"}
    </Contact>
  );
}
