import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Footer from '../../molecules/molecules-list/Footer'
// import SearchData from '../molecules/SearchData';

const PcSize = styled.main`
  height: 525px;
  width: 100%;
`;

const TabletSize = styled.main`
  /* height: 705px; */
`;

const MobileSize = styled.main`
  /* height: 1234px; */
`;

const FooterStr = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 1127px)', //1025 px 이상인 경우에만 적용(1127이상.)
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 744px)and (max-width: 1126px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 743px)`, //744px 이하인 경우에만 적용(744이하.)
  });

  return (
    <>
      {isPc && <PcSize className="Listheader">
          <Footer />
        </PcSize>}
      {isTablet && <TabletSize className="Listheader"></TabletSize>}
      {isMobile && <MobileSize className="Listheader"></MobileSize>}
    </>
  );
};
export default FooterStr;
