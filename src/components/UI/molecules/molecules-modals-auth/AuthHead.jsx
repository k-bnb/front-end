import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
  color: #000;

  button {
    // Button
    position: absolute;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    align-items: center;

    svg {
      font-size: 15px;
    }
  }

  span {
    // TextStyle
    margin: 0 auto;
  }
`;

const AuthHead = ({ name, setModal }) => {
  const hide = (e) => {
    e.preventDefault();
    // props.setModal(false);
    setModal(false);
  };
  return (
    <Container>
      <Button onClick={hide} circlehover>
        <AiOutlineClose />
      </Button>
      <TextStyle blackmiddlebold>{name}</TextStyle>
    </Container>
  );
};

export default AuthHead;
