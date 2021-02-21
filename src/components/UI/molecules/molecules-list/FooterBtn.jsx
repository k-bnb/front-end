import React from 'react';
import styled from 'styled-components';
import { costInput } from '../../../../modules/search';
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
    background-color: rgb(0, 0, 0);
    padding: 10px 20px;
  }
`;

const FooterBtn = ({
  localMinCost,
  localMaxCost,
  dispatch
  }) => {

  //   const searchBtn = ()=> {
  //   if (localMinCost) {
  //     setCostState((state) => ({
  //       ...state,
  //       minCostState: true,
  //       minCostPay: costSearch.minCost,
  //     }));
  //   }   
  //   if (localMaxCost) {
  //     setCostState((state) => ({
  //       ...state,
  //       maxCostState: true,
  //       maxCostPay: costSearch.maxCost,
  //     }));
  //   }
  //   else{setCostState((state) => ({
  //       minCostState: false,
  //       minCostPay: '',
  //       maxCostState: false,
  //       maxCostPay: '',
  //     }))
  //   };
  // }

  const changeCostRange = () => {
    // if (co)
    dispatch(costInput('minCost', localMinCost));
    dispatch(costInput('maxCost', localMaxCost));
  };

  return (
    <FooterBtnStyle>
      <Button onClick={changeCostRange}>
        <TextStyle>저장</TextStyle>
      </Button>
    </FooterBtnStyle>
  );
};

export default FooterBtn;
