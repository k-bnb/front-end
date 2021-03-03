import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import '../../index.css';
import MapContainer from './Map';
import ReservedInfo from './ReservedInfo';

const MainContainer = styled.main`
  display: flex;
  height: 90vh;
`;

const HeaderContainer = styled.header`
  height: 10vh;
  background-color: black;
`;

const ReservedDetail = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 701px)',
  });

  const isMobile = useMediaQuery({
    query: `(max-width: 700px)`,
  });
  return (
    <>
      <HeaderContainer>하이</HeaderContainer>
      <MainContainer>
        <h1 className="readable-hidden">예약 상세 페이지</h1>
        {isPc && (
          <>
            <ReservedInfo pc />
            <MapContainer />
          </>
        )}
        {isMobile && (
          <>
            <ReservedInfo mobile />
          </>
        )}
      </MainContainer>
    </>
  );
};

export default ReservedDetail;
