import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  height: 100%;
  padding : 50px 80px 0px 80px;
  font-size: 15px;
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  background-color: #F7F7F7;
  border-top: 1px solid #DDDDDD;
`

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <h3>소개</h3>
        <p>에어비앤비 이용 방법</p>
        <p>뉴스룸</p>      
        <p>투자자 정보</p>      
        <p>에어비앤비 플러스</p>      
        <p>에어비앤비 Luxe</p>      
        <p>호텔투나잇</p>      
        <p>에어비앤비 비즈니스 프로그램</p>      
        <p>1조 K-BnB 분들이 있기에 가능합니다</p>      
        <p>올림픽</p>      
        <p>채용정보</p>    
      </div>
      <div>
        <h3>커뮤니티</h3>
        <p>다양성 및 소속감</p>
        <p>접근성</p>
        <p>에어비앤비 어소시에이트</p>
        <p>구호 인력을 위한 숙소</p>
        <p>친구 초대하기</p>
        <p>Airbnb.org</p>
      </div>
      <div>
        <h3>호스팅하기</h3>
        <p>숙소 호스팅</p>
        <p>온라인 체험 호스팅하기</p>
        <p>체험 호스팅하기</p>
        <p>책임감 있는 호스팅</p>
        <p>자료 센터</p>
        <p>커뮤니티 센터</p>
      </div>
      <div>
        <h3>에어비앤비 지원</h3>
        <p>에어이앤비의 코로나19 대응 방안</p>
        <p>도움말 센터</p>
        <p>예약 취소 옵션</p>
        <p>에어비앤비 이웃 민원 지원</p>
        <p>신뢰와 안전</p>
      </div>
      <div>
        <h3>기여한 고마운 분들</h3>
        <p>김예찬</p>
        <p>정한솔</p>
        <p>김용민</p>
        <p>원진솔</p>
        <p>조윤아</p>
        <p>정지훈</p>
        <p>박명재</p>
      </div>
    
    </FooterStyle>
  );
}

export default Footer;