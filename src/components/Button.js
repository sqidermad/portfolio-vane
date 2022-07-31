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

function Button({children, onClick}) {
  return(
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
}

export default Button;