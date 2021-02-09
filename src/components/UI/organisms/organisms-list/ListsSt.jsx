import LodgingLists from '../../molecules/molecules-list/List20';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Imgs from '../../atoms/atoms-list/Imgs';
import Border from '../../atoms/atoms-list/Border';
import PageNation from '../../molecules/molecules-list/PageNation';
import SearchData from '../../molecules/molecules-list/SearchData';
// import LodgingLists from "../molecules/List20";

const PcSize = styled.main`
  min-height: calc(100vh - 80px);
  background-color: #eee;
  padding: 0 24px;
  
`;
const TabletSize = styled.main`
  width:100%;
  min-height: calc(100vh - 80px);
  background-color: skyblue;
  padding: 0 24px;
`;

const MobileSize = styled.main`
  min-height: calc(100vh - 0px);
  background-color: purple;
`;

const ListStyle = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 1025px)', //1025 px 이상인 경우에만 적용(1127이상.)
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 677px)and (max-width: 1025px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 677px)`, //744px 이하인 경우에만 적용(744이하.)
  });

  return (
    <>
      {isPc && (
        <PcSize className="Listmain">
          <LodgingLists />
          <PageNation />
        </PcSize>
      )}
      {isTablet && (
        <TabletSize className="Listmain">
          <LodgingLists />
          <PageNation />
        </TabletSize>
      )}
      {isMobile && (
        <MobileSize className="Listmain">
          <Border bigCarouselImg >
            <Imgs carousalBigImg src="https://a0.muscache.com/im/pictures/02a7fd89-b923-4541-aff6-a6eeff4d4445.jpg?im_w=1200"/>
          </Border>
          <PageNation />
        </MobileSize>
      )}
    </>
  );
};
export default ListStyle;
