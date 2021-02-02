import Button from "../atoms/Button"
import TextStyled from "../atoms/Text"


const SearchData = () => {
  return(
    <div className="SearchData">
      <TextStyled size='blackSmall'>숙박130건. 2월1일~2월3일. 게스트3명</TextStyled>
      <h1>
        <TextStyled size='blackLargeBold'>춘천시의 숙소</TextStyled>
      </h1>
      <Button><TextStyled size='blackSmall'>숙소유형</TextStyled></Button>
      <Button><TextStyled size='blackSmall'>요금</TextStyled></Button>
    </div>
  )
};

export default SearchData;