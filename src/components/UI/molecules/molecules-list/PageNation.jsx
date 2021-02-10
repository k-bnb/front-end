import React from "react";
import styled from "styled-components";
import Button from "../../atoms/atoms-list/Button";

const PageStyle = styled.div`
  min-width:547px;
  text-align:center;
  padding: 40px;
  border-top: 1px solid rgba(170,170,170,0.5);
`

const PageNation = ({totalPage, pageNationClick}) => {
 
  return(
    <PageStyle onClick={pageNationClick} className="PageNation">
      <Button size="number" >&#60;</Button>
{
   Array.from({length: totalPage.totalPages}, (_,i) => {
    return <Button size="number" name={i}>{i}</Button>
   })
}   
      <Button size="number">&#62;</Button>
    </PageStyle>
  )
}

export default PageNation;