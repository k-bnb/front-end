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
