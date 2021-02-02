import styled, { css } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const ScoreStyle = styled.div`
  ${(props) =>
    props.price &&
    css`
      color: #222;
    `}
`;

const Score = ({ children, ...rest }) => {
  return (
    <ScoreStyle {...rest}>
      <AiFillStar />
      {children}
    </ScoreStyle>
  );
};

export default Score;
