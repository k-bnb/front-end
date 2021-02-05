import styled, { css } from 'styled-components';

const BookmarkStyle = styled.div`
  ${(props) =>
    props.heart &&
    css`
      width:48px;
      height:48px;
      border-radius : 50%;
      font-size:1.5rem;
      padding: 0;
      margin:0;
      display : flex;
      align-items : center;
      justify-content : center;
      border: none;
      box-sizing: border-box;
      background : none;
      cursor: pointer;
      position: absolute;
      top:-5px;
      right:-5px;
      &:hover{
        background: #f7f7f7;
      cursor: pointer;
      &:active{
        transform: scale(0.92);
      }
    `}
`;

const Bookmark = ({ children, ...rest }) => {
  return <BookmarkStyle {...rest}>{children}</BookmarkStyle>;
};

export default Bookmark;
