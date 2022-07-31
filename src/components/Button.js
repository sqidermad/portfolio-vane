import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Wrapper = Styled.a`
  font-size: 22px;
  font-weight: bolder;
  padding: 8px 20px;
  cursor: pointer;
  border: 1px solid var(--eastern-blue);
  border-radius: 4px;

  &:hover {
    background-color: var(--astronaut-blue);
  }

  @media (max-width: 992px) {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3rem;
  }
`;

function Button({links, children}) {
  return(
    <Wrapper href={links} onClick={onclick}>
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  links: PropTypes.string,
  children: PropTypes.any,
  onclick: PropTypes.func,
}

export default Button;