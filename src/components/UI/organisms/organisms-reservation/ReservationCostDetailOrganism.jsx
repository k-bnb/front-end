import React from 'react';
import styled from 'styled-components';
import ReservationTitle from '../../atoms/atoms-reservation/ReservationTitle';
import ReservationCostMoecule from '..//../molecules/molecules-reservation/ReservationCostMoecule';

const ReservationCostDetailOrganism = () => {
  return (
    <section>
      <ReservationTitle sub children="요금 세부정보" />
      <ReservationCostMoecule />
      <ReservationCostMoecule />
      <ReservationCostMoecule />
      <ReservationCostMoecule />
    </section>
  );
};

export default ReservationCostDetailOrganism;
