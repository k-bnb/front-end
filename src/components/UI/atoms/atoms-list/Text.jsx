import styled, {css} from "styled-components";

const SpanSt = styled.div`
	${props=> props.size === 'blackSmall' && 
		css`
			color : #222;
			font-size : 0.8rem;
			/* letter-spacing : 3px;
			line-height : 36px; */
		`}
	${props=> props.size === 'blackSmallBold' && 
		css`
			color : #222;
			font-size : 0.8rem;
			/* letter-spacing : 3px;
			line-height : 36px; */
			font-weight : 800;
		`}
	${props=> props.size === 'blackMiddle' && 
		css`
			color : #222;
			font-size : 1.2rem;
			/* letter-spacing : 3px;
			line-height : 36px; */
		`}
	${props=> props.size === 'blackMiddleBold' && 
		css`
			color : #222;
			font-size : 1.2rem;
			/* letter-spacing : 3px;
			line-height : 36px; */
			font-weight : 800;
		`}
	${props=> props.size === 'blackLarge' && 
		css`
			color : #222;
			font-size : 1.5rem;
			/* letter-spacing : 3px;
			line-height : 36px; */
		`}
	${props=> props.size === 'blackLargeBold' && 
		css`
			color : #222;
			font-size : 1.5rem;
			/* letter-spacing : 3px;
			line-height : 36px; */
			font-weight : 800;
		`}
`

const TextStyled = ({children, size, ...rest}) => {
	return <SpanSt size={size} {...rest}>{children}</SpanSt>
};

export default TextStyled;