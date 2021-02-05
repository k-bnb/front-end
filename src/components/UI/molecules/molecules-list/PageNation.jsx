import React from "react";
import styled from "styled-components";
import Button from "../../atoms/atoms-list/Button";

const PageStyle = styled.div`
  min-width:547px;
  text-align:center;
  padding: 40px;
`

const PageNation = () => {
  return(
    <PageStyle className="PageNation">
      <Button size="number">&#60;</Button>
      <Button size="number">1</Button>
      <Button size="number">2</Button>
      <Button size="number">3</Button>
      <Button size="number">4</Button>
      <Button size="number">5</Button>
      <Button size="number">&#62;</Button>
    </PageStyle>
  )
}

export default PageNation;