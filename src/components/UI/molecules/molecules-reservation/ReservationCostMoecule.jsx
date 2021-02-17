import React from 'react';
import styled from 'styled-components';
import TextStyle from '../../atoms/atoms-reservation/TextStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .cost-moecule {
    display: inline-block;
    margin-bottom: 1.8rem;
  }
`;

const ReservationCostDetailMolecule = ({ children }) => {
  const { cost, cleaningFee, serviceFee, lodgmentFee, totalFee } = children;

  return (
    <Container>
      <TextStyle className="cost-moecule" blackMiddleText children={cost} />
      <TextStyle
        className="cost-moecule"
        blackMiddleText
        children={cleaningFee}
      />
      <TextStyle
        className="cost-moecule"
        blackMiddleText
        children={serviceFee}
      />
      <TextStyle
        className="cost-moecule"
        blackMiddleText
        children={lodgmentFee}
      />
      <TextStyle blackMiddleText children={totalFee} />
    </Container>
  );
};

export default ReservationCostDetailMolecule;
