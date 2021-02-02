import React from './react';
import styled from './styled-components';
import { GrFormClose } from './react-icons/gr';
import { AiOutlinePlus } from './react-icons/ai';

const Modalcontainer = styled.div`
  display: flex;
  inset: 0px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  z-index: 100;
  position: fixed;
  background: rgb(34, 34, 34, 0.5);
`;

const SavedLists = styled.div`
  width: 568px;
  min-height: 200px;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1em;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);

  .saved-item-container {
    padding: 20px 16px;
    text-align: right;
  }
`;

const CancelBtn = styled.button`
  position: absolute;
  text-align: center;
  top: 20px;
  left: 24px;
  display: inline-block;
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: black;
  width: 32px;
  height: 32px;
  cursor: pointer;
  line-height: 20px;
  z-index: 10;
  background: transparent;
  line-height: 16px;
  svg {
    font-size: 24px;
    font-weight: 400;
  }
  &:hover {
    background: rgb(247, 247, 247);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 0 24px;
  border-bottom: 1px solid rgb(235, 235, 235);
  line-height: 20px;
  font-weight: 800;
  font-size: 16px;
  color: rgb(34, 34, 34);
`;

const SavedItem = styled.button`
  border: none;
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  outline: none;

  &:hover {
    background: rgb(247, 247, 247);
  }
`;

const ItemImage = styled.div`
  margin-right: 16px;
  width: 64px;
  height: 64px;
  border-radius: 4px;
  background-color: rgb(34, 34, 34);

  .plus-icon {
    color: #fff;
    font-size: 30px;
    text-align: center;
    padding-top: 25%;
  }
`;

const ItemData = styled.div`
  flex: 1 1 0%;
  text-align: left;

  .reservation-date {
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgb(113, 113, 113);
  }
  .location {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: rgb(34, 34, 34);
    margin-bottom: 4px;
  }
  .accommodation-number {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    margin-top: 4px;
    color: rgb(34, 34, 34);
  }
`;

const DetailData = ({ date, location, number }) => (
  <>
    <div className="reservation-date">{date}</div>
    <div className="location">{location}</div>
    <div className="accommodation-number">{number}</div>
  </>
);

const SavedListsModal = () => (
  <Modalcontainer>
    <SavedLists>
      <CancelBtn>
        <GrFormClose />
      </CancelBtn>
      <ModalHeader>목록에 저장하기</ModalHeader>
      <div className="saved-item-container">
        <SavedItem>
          <ItemImage>
            <AiOutlinePlus className="plus-icon" />
          </ItemImage>
          <ItemData>
            <DetailData location={'새로운 목록 만들기'}></DetailData>
          </ItemData>
        </SavedItem>
      </div>
    </SavedLists>
  </Modalcontainer>
);

export default SavedListsModal;
