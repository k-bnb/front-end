import styled, { css } from 'styled-components';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const AuthButton = styled.button`
  width: 100%;
  border: 0;
  height: 100%;
  background-color: rgb(255, 90, 95);
  border-radius: 5px;
  cursor: pointer;
  span {
    color: #eee;
    font-size: 1.4rem;
    letter-spacing: 3px;
    line-height: 36px;
    font-weight: 800;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: lightgray;
    `}
`;
const AuthBtn = ({ name, disabled }) => {
  return (
    <AuthButton disabled={disabled}>
      <TextStyle>{name}</TextStyle>{' '}
    </AuthButton>
  );
};
export default AuthBtn;
