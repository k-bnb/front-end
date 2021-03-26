import React from 'react';
import styled from 'styled-components';

const Title = styled.header`
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReservedInfoHeader = () => {
  return (
    <Title>
      <h1>숙소 예약</h1>
    </Title>
  );
};

export default ReservedInfoHeader;
