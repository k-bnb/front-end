import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
// import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';
// import { Link } from 'react-router-dom';

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  a {
    width: 400px;
    height: 40px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(0, 0, 0, 0.5);

    svg {
      vertical-align: sub;
      font-size: 20px;
      margin-right: 14px;
    }
  }
`;

const AuthGoogle = () => {
  return (
    <Container className="google-login">
      <a href="https://kbnb-backend.herokuapp.com/oauth2/authorize/google?redirect_uri=https://kbnb.herokuapp.com/redirect">
        <CircleDiv>
          <FcGoogle />
          <TextStyle blackmiddlebold>구글 로그인</TextStyle>
        </CircleDiv>
      </a>
    </Container>
  );
};

export default AuthGoogle;
