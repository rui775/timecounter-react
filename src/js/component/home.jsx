import React from "react";

import NAvbar from "./navbar.jsx";

import TimeCounter from "./timecounter.jsx";

//create your first component
const Home = () => {

	const menu = [
		{label: 'Home'},
		{label: 'Contact us'},
		{label: 'Support'}
	]

	const logo = "https://storage.googleapis.com/replit/images/1511936948186_53605a1f8e2f117b874504a42b735a7f.png";

	return (
		<div>
			<NAvbar navItems={menu} navLogo={logo} />
			<TimeCounter />
			{/* {footer component} */}
		</div>
	);
};

export default Home;
