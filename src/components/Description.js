import Styled from "styled-components";

export const Description = Styled.div`
  color: var(--white);
  max-width: 45%;
  font-size: 22px;
  text-align: justify;
  margin: 0;
  padding-bottom: 50px;

  @media (max-width: 992px) {
    font-size: 18px;
    text-align: justify;
    max-width: unset;
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
