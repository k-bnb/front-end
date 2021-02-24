import React from 'react';
import styled from 'styled-components';
import TextStyled from '../../atoms/atoms-list/Text';

const EmptyStyle = styled.div`
  border-top: 1px solid #ddd;
  width:777px;
  padding-top: 20px;
  line-height: 50px;
`

const EmptyList = () => {
  return (
    <EmptyStyle>
      <TextStyled size='blackLargeBold'>결과 없음</TextStyled>
      <TextStyled size='blackMiddle'>날짜 변경, 필터 삭제, 지도의 확대/축소 기능을 통해 검색 결과를 조정해보세요.</TextStyled>
    </EmptyStyle>
  );
}

export default EmptyList;