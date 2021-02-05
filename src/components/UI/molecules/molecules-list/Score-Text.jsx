import styled from 'styled-components';
import Text from '../../atoms/atoms-header/Text';
import Score from '../../atoms/atoms-list/Score';
import TextStyled from '../../atoms/atoms-list/Text';

const ScoreTextStyle = styled.div`
  display:flex;
  flex-flow:row nowrap;
  /* align-items:flex-start; */
`

const ScoreText = () => {
  return (
    <ScoreTextStyle>
      <Score /><TextStyled size='blackMiddle'>3.45(462)</TextStyled>
    </ScoreTextStyle>
  );
};

export default ScoreText;