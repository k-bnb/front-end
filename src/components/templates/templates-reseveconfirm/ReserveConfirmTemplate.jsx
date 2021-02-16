import React from 'react';
import styled from 'styled-components';
import ReserveConfirmFooter from '../../UI/molecules/molecules-reserveConfirm/ReserveConfirmFooter';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import ReserveConfirmhead from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmhead';
import ReserveConfirmSection from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmSection';
import HeaderList from '../templates-header/HeaderList';
const ReserveConfirmTemplateStyle = styled.div`
  max-width: 980px;
  min-width: 980px;
  margin: 0 auto;
`;
const ReserveConfirmTemplate = ({ active, activClick, list }) => {
  return (
    <ReserveConfirmTemplateStyle>
      <ReserveConfirmhead />
      <ReserveConfirmSection
        list={list}
        active={active}
        activClick={activClick}
      />
      <ReserveConfirmFooter />
    </ReserveConfirmTemplateStyle>
  );
};

export default ReserveConfirmTemplate;
