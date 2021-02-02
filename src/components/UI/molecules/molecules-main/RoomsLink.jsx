import { useState } from 'react';
import LoginPotal from '../../../../potals/modals/LoginModal';
import Modal from '../../../../potals/modals/Modal';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const RoomsLink = () => {
	const [modal, setModal] = useState(false);

	const click = () => {
		setModal(true);
	};

	return (
		<>
			<div className="RoomLink">
				<TextStyle whiteMainBold>이제, 여행은</TextStyle>
				<TextStyle whiteMainBold>가까운 곳에서</TextStyle>
				<Button normal onClick={click}>
					<TextStyle blacknormal> 근처의 숙소 둘러보기</TextStyle>
				</Button>
			</div>
			{modal && (
				<Modal>
					<LoginPotal modal={modal} setModal={setModal} />
				</Modal>
			)}
		</>
	);
};

export default RoomsLink;
