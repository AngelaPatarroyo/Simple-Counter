//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
	ReactDOM.render(
		<Home
			number5={Math.floor((counter / 10000) % 10)}
			number4={Math.floor((counter / 1000) % 10)}
			number3={Math.floor((counter / 100) % 10)}
			number2={Math.floor((counter / 10) % 10)}
			number1={Math.floor((counter / 1) % 10)}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
