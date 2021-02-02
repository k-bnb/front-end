import MainStyle from "../UI/organisms/ListMainSt";
import ListStyle from "../UI/organisms/ListsSt";
import GoogleStyle from "../UI/organisms/GoogleMapSt";
import HeadStyle from "../UI/organisms/HeadStyle";

const ListTemplate = () => {
	return(
		<div style={{display:'flex'}}>
			{/* <MainStyle /> */}
			<div style={{display:'block'}}>
				<HeadStyle />
				<ListStyle />
			</div>
			<GoogleStyle style={{flexShrink:'1'}}/>
		</div>
	)
};

export default ListTemplate;