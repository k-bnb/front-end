import HeaderList from '../templates-header/HeaderList';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleStyle from '../../UI/organisms/organisms-list/GoogleMapSt';
import FooterFake from '../../UI/organisms/organisms-list/FooterFake';

const ListTemplate = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        {/* <MainStyle /> */}
        <div style={{ display: 'block' }}>
          <HeadStyle />
          <ListStyle />
        </div>
        <GoogleStyle style={{ flexShrink: '1' }} />
      </div>
      <FooterFake />
    </>
  );
};

export default ListTemplate;
