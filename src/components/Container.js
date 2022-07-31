import Styled from "styled-components";

export const IntroContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15%;
  padding-top: 18%;
  min-height: 100vh;

  @media (max-width: 992px) {
    padding-left: unset;
    margin: 0;
    align-items: center;
  }
`;

export const AboutContainer = Styled.div`
  padding-left: 15%;
  padding-right: 25%;
  padding-top: 5%;
  min-height: 100vh;

  @media (max-width: 992px) {
    height: unset;
    padding-left: unset;
    padding-right: unset;
  }
`

export const CreditContainer = Styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
`