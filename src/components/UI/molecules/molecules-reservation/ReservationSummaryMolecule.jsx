import React from 'react';
import styled from 'styled-components';
import { GoStar } from 'react-icons/go';
import CommonImg from '../../atoms/atoms-reservation/CommonImg';
import CommonSpan from '../../atoms/atoms-reservation/CommonSpan';
import CommonParagraph from '../../atoms/atoms-reservation/CommonParagraph';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 0.5rem;
  height: 100%;
`;

const ImgContainer = styled.div`
  width: 12.8rem;
  height: 10.6rem;
`;

const ContentContainer = styled.div`
  margin-left: 1.6rem;
  height: 10.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReservationSummaryMolecule = ({ children }) => {
  const { title, content, roomInfo, rate } = children;

  return (
    <Container>
      <ImgContainer>
        <CommonImg />
      </ImgContainer>
      <ContentContainer>
        <CommonSpan blackSmall children={title} />
        <div>
          <CommonParagraph children={content} />
          <CommonSpan graySmall children={roomInfo} />
        </div>
        <div>
          <CommonSpan className="star" star children={<GoStar />} />
          <CommonSpan blackMiddleBold children={rate} />
        </div>
      </ContentContainer>
    </Container>
  );
};

export default ReservationSummaryMolecule;
