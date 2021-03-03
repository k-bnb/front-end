import React from 'react';

import styled, { css } from 'styled-components';
import ReservedInfoHeader from './molecules/ReservedInfoHeader';

const ReservedInfoContainerStyle = styled.section`
  ${(props) =>
    props.pc &&
    css`
      width: 40%;
      min-width: 500px;
      background-color: #f4f4f4;
      position: relative;
    `}

  ${(props) =>
    props.mobile &&
    css`
      width: 100%;
      background-color: black;
    `}
`;

const ReservedInfoContainer = ({ ...rest }) => {
  return (
    <ReservedInfoContainerStyle {...rest}>
      <ReservedInfoHeader />
    </ReservedInfoContainerStyle>
  );
};

export default ReservedInfoContainer;
