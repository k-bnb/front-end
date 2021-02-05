// import Button from "../atoms/Button"
import styled from 'styled-components';
import Button from '../../atoms/atoms-list/Button';
import TextStyled from '../../atoms/atoms-list/Text';
// import TextStyled from '../atoms/Text';

const SearchPlace = styled.div`
  margin-top:100px;
  /* /* width: 100%; */
  padding: 20px;
  /* display: flex; */
`

const SearchData = () => {
  return (
    <SearchPlace className="SearchData">
      <TextStyled size="blackSmall">
        숙박130건. 2월1일~2월3일. 게스트3명
      </TextStyled>
      <h1>
        <TextStyled size="blackLargeBold">춘천시의 숙소</TextStyled>
      </h1>
      <Button size="large">
        <TextStyled size="blackSmall">숙소유형</TextStyled>
      </Button>
      <Button size="large">
        <TextStyled size="blackSmall">요금</TextStyled>
      </Button>
    </SearchPlace>
  );
};

export default SearchData;
