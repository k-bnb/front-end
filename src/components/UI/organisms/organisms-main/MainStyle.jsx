import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import RoomsLink from '../../molecules/molecules-main/RoomsLink';

const MainComponentPc = styled.main`
	/* width: 100%; */

	padding: 266px 80px 80px;

	background-image: url(./imgs/bg.jpg);
	background-size: cover;
	background-position: bottom 15% left 100%;
	background-repeat: no-repeat;
	.RoomLink {
		width: 400px;
		display: flex;
		flex-direction: row;
		flex-flow: wrap;
		button {
			padding: 5px 10px;
			margin-top: 25px;
		}
		margin-bottom: 7%;
	}
`;

const MainComponentTablet = styled.main`
	/* width: 100%; */

	padding: 200px 20px 80px;

	background-image: url(./imgs/bg.jpg);
	background-size: cover;
	background-position: bottom 15% left 100%;
	background-repeat: no-repeat;
	.RoomLink {
		width: 400px;
		display: flex;
		flex-direction: row;
		flex-flow: wrap;

		span {
			/* font-size: 3rem; */
		}

		button {
			padding: 5px 10px;
			margin-top: 25px;
		}
		margin-bottom: 7%;
	}
`;

const MainComponentMobile = styled.main`
	/* width: 100%; */

	padding: 20px 20px 200px 30px;

	background-image: url(./imgs/bg.jpg);
	background-size: cover;
	background-position: bottom 15% left 100%;
	background-repeat: no-repeat;
	min-height: 500px;
	.RoomLink {
		width: 300px;
		display: flex;
		flex-direction: row;
		flex-flow: wrap;

		span {
			width: 300px;
			font-size: 3rem;
			line-height: 3rem;
			letter-spacing: 1.6px;
			font-weight: 700;
		}

		button {
			span {
				font-size: 1rem;
				line-height: 2;
			}
			width: 200px;
			padding: 0px 0px;
			margin-top: 25px;
		}
		margin-bottom: 7%;
	}
`;

const MainStyle = () => {
	const isPc = useMediaQuery({
		query: '(min-width: 900px)',
	});
	const isTablet = useMediaQuery({
		query: `(min-width: 800px)and (max-width: 900px)`,
	});
	const isMobile = useMediaQuery({
		query: `(max-width: 800px)`,
	});

	return (
		<>
			{isPc && (
				<MainComponentPc className="main">
					<RoomsLink />
				</MainComponentPc>
			)}
			{isTablet && (
				<MainComponentTablet className="main">
					<RoomsLink />
				</MainComponentTablet>
			)}
			{isMobile && (
				<MainComponentMobile className="main">
					<RoomsLink />
				</MainComponentMobile>
			)}
		</>
	);
};

export default MainStyle;
