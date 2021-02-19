import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import CommonBg from '../../../atoms/atoms-reservation/atoms-modal/CommonBg';
import CommonButton from '../../../atoms/atoms-reservation/atoms-modal/CommonButton';
import CommonTemp from '../../../atoms/atoms-reservation/atoms-modal/CommonTemp';
import CommonText from '../../../atoms/atoms-reservation/atoms-modal/CommonText';
import GuestNumberModalUnit from '../../../molecules/molecules-header/GuestNumberModalUnit';

const HeaderContainer = styled.div`
  padding: 64px 24px 16px;
  position: relative;
`;

const MainContainer = styled.div`
  padding: 8px 24px 16px;
`;

const FooterContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(235, 235, 235);
`;

function EditGuestModalOrganism({
  manageGuestModal,
  clearGuest,
  saveGuest,
  peopleLimit,
}) {
  return (
    <CommonBg modalBg>
      <CommonTemp guestModal>
        <HeaderContainer>
          <CommonButton guestCancelModal manageGuestModal={manageGuestModal}>
            <AiOutlineClose />
          </CommonButton>
          <CommonText guestTitle>게스트</CommonText>
        </HeaderContainer>
        <MainContainer>
          <GuestNumberModalUnit reservePage type={'성인'} name="numOfAdult" />

          <GuestNumberModalUnit reservePage type={'어린이'} name="numOfKid" />

          <GuestNumberModalUnit reservePage type={'유아'} name="numOfInfant" />

          <CommonText guestLimitInfo>
            {`최대 ${peopleLimit}명. 유아는 숙박인원에 포함되지 않습니다.`}
          </CommonText>
        </MainContainer>
        <FooterContainer>
          <CommonButton guestDelete clearGuest={clearGuest}>
            지우기
          </CommonButton>
          <CommonButton guestSave saveGuest={saveGuest}>
            저장하기
          </CommonButton>
        </FooterContainer>
      </CommonTemp>
    </CommonBg>
  );
}

export default EditGuestModalOrganism;
