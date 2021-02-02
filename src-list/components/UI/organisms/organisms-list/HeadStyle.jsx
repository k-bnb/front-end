import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import SearchData from "../molecules/SearchData";

const PcSize = styled.main`
	width: 100%;
	padding: 20px;
	display:flex;
`

const TabletSize = styled.main`
	
`

const MobileSize = styled.main`
  
`

const HeadStyle = () => {
	const isPc = useMediaQuery({
		query: '(min-width: 1128px)', //1128px 이상인 경우에만 적용
	});
	const isTablet = useMediaQuery({
		query: `(min-width: 745px)and (max-width: 1127px)`,
	});
	const isMobile = useMediaQuery({
		query: `(max-width: 744px)`, //744px 이하인 경우에만 적용
	});

	return (
		<>
			{isPc && (
				<PcSize className="Listheader">
					<SearchData />
				</PcSize>
			)}
			{isTablet && (
				<TabletSize className="Listheader">
					<SearchData />
				</TabletSize>
			)}
			{isMobile && (
				<MobileSize className="Listheader">
					<SearchData />
				</MobileSize>
			)}
		</>
	);
};
export default HeadStyle;