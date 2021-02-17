import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import Img from '../../atoms/atoms-main/Img';

const CircleDivStyle = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 5px;
	box-sizing: border-box;
	background: #fff;
	border-radius: 50px;
`;
const CircleProfile = () => {
	return (
		<>
			<CircleDivStyle small>
				<GiHamburgerMenu style={{ color: '#000', fontSize: '1rem' }} />
				<Img src={'./imgs/pori.jpg'} alt={'프로필 사진'} profile />
			</CircleDivStyle>
		</>
	);
};

export default CircleProfile;
