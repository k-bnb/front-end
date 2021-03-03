import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import '../../index.css';
import MapContainer from './MapContainer';
import ReservedInfoContainer from './ReservedInfoContainer';

const MainContainer = styled.main`
  display: flex;
  height: 100vh;
`;

const ReservedDetail = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 701px)',
  });

  const isMobile = useMediaQuery({
    query: `(max-width: 700px)`,
  });
  return (
    <MainContainer>
      <h1 className="readable-hidden">예약 상세 페이지</h1>
      {isPc && (
        <>
          <ReservedInfoContainer pc />
          <MapContainer />
        </>
      )}
      {isMobile && (
        <>
          <ReservedInfoContainer mobile />
        </>
      )}
    </MainContainer>
  );
};

export default ReservedDetail;
