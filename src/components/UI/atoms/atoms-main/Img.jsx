import styled, { css } from 'styled-components';

const StyleImg = styled.img`
	${(props) =>
		props.carouselimg &&
		css`
			width: 100%;
			/* transform: translateX(-150px); */
		`}
	${(props) =>
		props.profile &&
		css`
			width: 50%;
			border-radius: 50%;
		`}

	${(props) =>
		props.smallImg &&
		css`
			width: 70px;
			border-radius: 5px;
		`}
	${(props) =>
		props.bigImg &&
		css`
			min-width: 200px;
			width: 100%;
			border-radius: 5px;
		`}
`;

const Img = ({ img, altmessage, ...rest }) => {
	return <StyleImg src={img} alt={altmessage} {...rest} />;
};

export default Img;
