import styled, { css } from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const ScoreStyle = styled.div`
  padding-right:5px;
  ${(props) =>
    props.price &&
    css`
      color: #222;
    `}
`;

const Score = ({ children, ...rest }) => {
  return (
    <ScoreStyle {...rest}>
      <AiFillStar style={{width:'20px', height:'20px', color:'red'}} />
      {children}
    </ScoreStyle>
  );
};

export default Score;
