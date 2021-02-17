import { useState } from 'react';
import Modal from '../../../../portal/Modal';
// import LoginPotal from '../../../../potals/modals/LoginModal';
// import Modal from '../../../../potals/modals/Modal';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import AuthModalContainer from '../../../../containers/AuthModalContainer';

const RoomsLink = (props) => {
  // console.log('dd', props);
  // const [modal, setModal] = useState(false);

  // const click = (e) => {
  //   e.preventDefault();
  //   setModal(true);
  // };

  return (
    <>
      <div className="RoomLink">
        <TextStyle whiteMainBold>이제, 여행은</TextStyle>
        <TextStyle whiteMainBold>가까운 곳에서</TextStyle>
        <Button normal>
          <TextStyle blacknormal> 근처의 숙소 둘러보기</TextStyle>
        </Button>
      </div>
      {/* {modal && (
        <Modal>
          <AuthModalContainer modal={modal} setModal={setModal} />
        </Modal>
      )} */}
    </>
  );
};

export default RoomsLink;
