import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
// import SearchData from '../molecules/SearchData';

const PcSize = styled.main`
  height: 530px;
  background-color: burlywood;
`;

const TabletSize = styled.main``;

const MobileSize = styled.main``;

const FooterFake = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 1025px)', //1128px 이상인 경우에만 적용
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 677px)and (max-width: 1025px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 677px)`, //744px 이하인 경우에만 적용
  });

  return (
    <>
      {isPc && (
        <PcSize className="Listheader">
          
        </PcSize>
      )}
      {isTablet && (
        <TabletSize className="Listheader">
          
        </TabletSize>
      )}
      {isMobile && (
        <MobileSize className="Listheader">
          
        </MobileSize>
      )}
    </>
  );
};
export default FooterFake;
