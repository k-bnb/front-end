import HeaderList from '../templates-header/HeaderList';
import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleStyle from '../../UI/organisms/organisms-list/GoogleMapSt';
import FooterFake from '../../UI/organisms/organisms-list/FooterFake';

const ListTemplate = () => {
  return (
    <>
      <HeaderList />
      <div style={{ display: 'flex' }}>
        <ListStyle />
        <GoogleStyle style={{ flexShrink: '1' }} />
      </div>
      <FooterFake />
    </>
  );
};

export default ListTemplate;
