import styled from 'styled-components';
import TextStyle from '../../atoms/atoms-main/TextStyle';
const AuthButton = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  /* height: 40px; */
  background-color: rgb(255, 90, 95);
  border-radius: 5px;
  span {
    color: #eee;
    font-size: 1.4rem;
    letter-spacing: 3px;
    line-height: 36px;
    font-weight: 800;
  }
`;
const AuthBtn = ({ name }) => {
  return (
    <AuthButton>
      <TextStyle>{name}</TextStyle>{' '}
    </AuthButton>
  );
};
export default AuthBtn;
