import React from 'react';
import styled from 'styled-components';
import { IoIosMedkit } from 'react-icons/io';
import { AiOutlineWifi } from 'react-icons/ai';
import { RiComputerLine, RiParkingBoxLine } from 'react-icons/ri';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { TypeTitle } from '../../molecules/molecules-detail/TypeInfo';
import WhiteBtn from '../../atoms/atoms-detail/WhiteBtn';
import '../../atoms/atoms-detail/DetailBasicStyle.css';

const EmoticonNoticeBox = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  min-width: 225px;
  width: 50%;
  align-items: center;
  padding: 0 8px 16px;
`;

const EmoticonBox = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  font-size: 24px;
`;

const Parking = () => (
  <EmoticonNoticeBox>
    <EmoticonBox>
      <RiParkingBoxLine />
    </EmoticonBox>
    건물 내 무료 주차
  </EmoticonNoticeBox>
);
const Wifi = () => (
  <EmoticonNoticeBox>
    <EmoticonBox>
      <AiOutlineWifi />
    </EmoticonBox>
    무선 인터넷
  </EmoticonNoticeBox>
);
const Medkit = () => (
  <EmoticonNoticeBox>
    <EmoticonBox>
      <IoIosMedkit />
    </EmoticonBox>
    구급약품
  </EmoticonNoticeBox>
);
const Television = () => (
  <EmoticonNoticeBox>
    <EmoticonBox>
      <RiComputerLine />
    </EmoticonBox>
    TV
  </EmoticonNoticeBox>
);
const Refrigerator = () => (
  <EmoticonNoticeBox>
    <EmoticonBox>
      <CgSmartHomeRefrigerator />
    </EmoticonBox>
    냉장고
  </EmoticonNoticeBox>
);

const EmoticonNotice = ({ facilityRef }) => (
  <div className="basic-section-padding" ref={facilityRef}>
    <TypeTitle>편의시설</TypeTitle>
    <Parking />
    <Wifi />
    <Medkit />
    <Television />
    <Refrigerator />
    <WhiteBtn text="편의시설 모두 보기" />
  </div>
);

export default EmoticonNotice;
