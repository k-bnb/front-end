import React from 'react';
import styled from 'styled-components';
import ReserveConfirmFooter from '../../UI/molecules/molecules-reserveConfirm/ReserveConfirmFooter';
// import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import ReserveConfirmhead from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmhead';
import ReserveConfirmheader from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmheader';
import ReserveConfirmSection from '../../UI/organisms/organisms-reserveconfirm/ReserveConfirmSection';
// import HeaderList from '../templates-header/HeaderList';
const ReserveConfirmTemplateStyle = styled.div`
  max-width: 1180px;
  min-width: 1180px;
  min-height: 900px;
  margin: 0 auto;
  padding-top: 100px;
`;
const ReserveConfirmTemplate = ({
  active,
  activClick,
  list,
  modalState,
  cancel,
  cancelBtn,
  cancelModal,
}) => {
  return (
    <ReserveConfirmTemplateStyle>
      <ReserveConfirmheader />
      <ReserveConfirmhead />
      <ReserveConfirmSection
        list={list}
        active={active}
        activClick={activClick}
        modalState={modalState}
        cancel={cancel}
        cancelBtn={cancelBtn}
        cancelModal={cancelModal}
      />
      <ReserveConfirmFooter />
    </ReserveConfirmTemplateStyle>
  );
};

export default ReserveConfirmTemplate;
