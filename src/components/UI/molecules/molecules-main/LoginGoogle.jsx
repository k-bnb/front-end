import { FcGoogle } from 'react-icons/fc';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const LoginGoogle = () => {
	return (
		<CircleDiv className="main-login">
			<CircleDiv className="google-login">
				<Button>
					<CircleDiv>
						<FcGoogle />
						<TextStyle blackmiddlebold>구글 로그인</TextStyle>
					</CircleDiv>
				</Button>
			</CircleDiv>
		</CircleDiv>
	);
};

export default LoginGoogle;
