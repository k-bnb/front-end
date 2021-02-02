// import { GoogleApiWrapper } from "google-maps-react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import App from "../molecules/GoogleMap";
import FakeBox from "../molecules/GoogleMap";
// import GoogleMap from "../molecules/GoogleMap";
// import SearchData from "../molecules/SearchData";


const PcSize = styled.main`
	/* display : inline-block; */
	/* width: 80px; */
	min-width : calc(100vw - 840px);
  /* min-height : calc(100vh - 80px); */
  /* left : auto; */
	background-color: lightcoral;
`

const TabletSize = styled.main`
	display:none;
`

const MobileSize = styled.main`
	/* width : calc(100%-100%); */
	background-color: yellow;
	display:none;
`

const GoogleStyle = () => {
	const isPc = useMediaQuery({
		query: '(min-width: 1025px)', //1128px 이상인 경우에만 적용
	});
	const isTablet = useMediaQuery({
		query: `(min-width: 745px)and (max-width: 1025px)`,
	});
	const isMobile = useMediaQuery({
		query: `(max-width: 745px)`, //744px 이하인 경우에만 적용
	});

	return (
		<>
			{isPc && (
				<PcSize className="Asidemap">
					{/* <GoogleApiWrapper />
					<FakeBox /> */}
					<App />
				</PcSize>
			)}
			{isTablet && (
				<TabletSize className="Asidemap">
					{/* <GoogleApiWrapper /> */}
					<FakeBox />
				</TabletSize>
			)}
			{isMobile && (
				<MobileSize className="Asidemap">
					{/* <GoogleApiWrapper /> */}
					<FakeBox />
				</MobileSize>
			)}
		</>
	);
};
export default GoogleStyle;