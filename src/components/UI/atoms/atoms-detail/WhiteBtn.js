import React from 'react';
import styled from 'styled-components';
import Text from './DetailText';

const WhiteButton = styled.button`
  display: inline-block;
  margin: 24px 0 0;
  padding: 13px 13px;
  border-radius: 8px;
  border: 1px solid #222;
  text-align: center;
  color: #222;
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    background: rgb(247, 247, 247);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const WhiteBtn = ({
  text,
  setShowReviewModal,
  isShowReviewButton,
  ...rest
}) => (
  <div>
    <WhiteButton
      {...rest}
      className="white-btn"
      onClick={() => {
        if (isShowReviewButton) setShowReviewModal(true);
      }}
    >
      <Text bold big>
        {text}
      </Text>
    </WhiteButton>
  </div>
);
export default WhiteBtn;
