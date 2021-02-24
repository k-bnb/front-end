import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { costInput, searching } from '../../../../modules/search';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const FooterBtnStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  padding: 15px 15px 15px 0;
  button {
    /* width: 50px; */
    color: rgb(255, 255, 255);
    font-weight: 800;
    font-size: 1.7rem;
    border-radius: 10px;
    background-color: #000;
    padding: 10px 20px;
  }
`;

const FooterBtn = ({
  localMinCost,
  localMaxCost,
  dispatch,
  setSearchModalState,
  modalType,
}) => {
  const {
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  } = useSelector((state) => state.search.searchReq);

  const searchBtn = () => {
    const id = 0;
    console.log(localMinCost);
    console.log(localMaxCost);
    console.log(costSearch);
    dispatch(
      searching({
        id,
        locationSearch,
        checkDateSearch,
        guestSearch,
        costSearch: {
          minCost: localMinCost,
          maxCost: localMaxCost,
        },
        roomType,
        bedNum,
        bedRoomNum,
        bathRoomNum,
      }),
    );
    if (modalType === 'cash') {
      dispatch(costInput('minCost', localMinCost));
      dispatch(costInput('maxCost', localMaxCost));
    }
    setSearchModalState(null);
  };

  return (
    <FooterBtnStyle>
      <Button onClick={searchBtn}>
        <TextStyle>저장</TextStyle>
      </Button>
    </FooterBtnStyle>
  );
};

export default FooterBtn;
