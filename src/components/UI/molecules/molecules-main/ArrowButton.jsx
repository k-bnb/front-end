import Button from '../../atoms/atoms-main/Button';
import { IoIosArrowForward } from 'react-icons/io';
const ArrowButton = (props) => {
	console.log(props);

	return (
		<Button circle {...props}>
			<IoIosArrowForward />
		</Button>
	);
};

export default ArrowButton;
