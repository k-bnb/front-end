import styled, { css } from 'styled-components';

const DivStyle = styled.div`
  /* border: 1px solid #ddd; */
  border-radius: 50px;
  color: white;

  ${(props) =>
    props.borderline &&
    css`
      width: 88%;
      height: 1px;
      background: rgb(0, 0, 0, 0.2);
      margin: 20px 0;
    `}

  ${(props) =>
    props.logindiv &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 450px;
      /* min-width: 400px; */
      min-height: 450px;
      background-color: rgb(255, 255, 255);
      border-radius: 3%;
      /* margin: 0 auto; */
      justify-content: center;
      display: flex;
      flex-direction: column;
      min-height: 400px;
    `}
	${(props) =>
    props.carouseldiv &&
    css`
      width: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;

      border-radius: 0;
    `}
	${(props) =>
    props.bigimgSize &&
    css`
      min-width: 200px;
      max-width: 400px;
      width: 100%;
      box-sizing: border-box;
      /* border: 1px solid #000; */
    `}

	${(props) =>
    props.imgSize &&
    css`
      padding-right: 10px;
      border: 0;
    `}
	${(props) =>
    props.large &&
    css`
      max-width: 500px;
      width: 80vw;
      border: 1px solid #000;
    `}
	${(props) =>
    props.small &&
    css`
      width: 70px;
    `}
    ${(props) =>
    props.hoverCheck &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
    `}
		${(props) =>
    props.bigImgthree &&
    css`
      min-width: 200px;
      max-width: 400px;
      width: 100%;

      box-sizing: border-box;
      border: 0;
    `}
		
		${(props) =>
    props.box &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
    `}
`;

const CircleDiv = ({ children, ...rest }) => {
  return <DivStyle {...rest}>{children}</DivStyle>;
};

export default CircleDiv;
