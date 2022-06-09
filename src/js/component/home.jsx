import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (value) => {
	return (
		<div id="wrappingBox">
			<div className="box">
				<i className="fas fa-clock"></i>
			</div>
			<div className="box">{value.number5}</div>
			<div className="box">{value.number4}</div>
			<div className="box">{value.number3}</div>
			<div className="box">{value.number2}</div>
			<div className="box">{value.number1}</div>
		</div>
	);
};

export default Home;
