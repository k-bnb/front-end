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
  /* margin-bottom: 16px; */
`;

const FooterContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(235, 235, 235);
`;

function EditGuestModalOrganism({ manageGuestModal }) {
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
          <GuestNumberModalUnit
            type={'성인'}
            detail={'만 13세 이상'}
            name="numOfAdult"
          />

          <GuestNumberModalUnit
            type={'어린이'}
            detail={'2~12세'}
            name="numOfKid"
          />

          <GuestNumberModalUnit
            type={'유아'}
            detail={'2세 미만'}
            name="numOfInfant"
          />

          <CommonText guestLimitInfo>
            최대 8명. 유아는 숙박인원에 포함되지 않습니다.
          </CommonText>
        </MainContainer>
        <FooterContainer>
          <CommonButton guestDelete>지우기</CommonButton>
          <CommonButton guestSave>저장하기</CommonButton>
        </FooterContainer>
      </CommonTemp>
    </CommonBg>
  );
}

export default EditGuestModalOrganism;
