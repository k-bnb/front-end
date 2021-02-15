import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import GoogleMapUse from '../../molecules/molecules-list/GoogleMap';

const PcSize = styled.main`
  display: block;
  margin-top: -177px;
  /* padding-top: 80px; */
  position: sticky;
  right: 0;
  /* top: 0; */
  width : 100%;
  min-width: calc(100vw - 840px);
  /* height: 100vh; */
  /* z-index: -1; */
  /* cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'), default; */
  /* background-color: lightcoral; */
`;

const TabletSize = styled.main`
  display: none;
`;

const MobileSize = styled.main`
  /* width : calc(100%-100%); */
  /* background-color: yellow; */
  display: none;
`;

const GoogleStyle = () => {
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
        <PcSize className="Asidemap">
          <GoogleMapUse />
        </PcSize>
      )}
      {isTablet && (
        <TabletSize className="Asidemap">
          {/* <GoogleMapUse /> */}
        </TabletSize>
      )}
      {isMobile && (
        <MobileSize className="Asidemap">
          {/* <GoogleMapUse /> */}
        </MobileSize>
      )}
    </>
  );
};
export default GoogleStyle;
