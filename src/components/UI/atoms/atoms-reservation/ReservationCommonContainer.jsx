import styled, { css } from 'styled-components';

const Container = styled.div`
  ${props =>
    props.hostImg &&
    css`
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
      overflow: hidden;
    `}

  ${props =>
    props.clientText &&
    css`
      width: 100%;
      padding: 0.4rem;
      border-radius: 0.8rem;
      box-shadow: inset 0 0 0 1px #b0b0b0;
    `}
`;

export default Container;
