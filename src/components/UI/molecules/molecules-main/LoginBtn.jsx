import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const LoginBtn = ({ name }) => {
	return (
		<Button submitBtn>
			<TextStyle whiteNormalBold>{name}</TextStyle>{' '}
		</Button>
	);
};
export default LoginBtn;
