import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const Container = styled.div`
  /* display: flex;

  justify-content: center;
  align-items: flex-start;
  align-items: center;
  border-radius: 0; */
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  button {
    width: 400px;
    height: 40px;
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
      <Button>
        <CircleDiv>
          <FcGoogle />
          <TextStyle blackmiddlebold>구글 로그인</TextStyle>
        </CircleDiv>
      </Button>
    </Container>
  );
};

export default AuthGoogle;
