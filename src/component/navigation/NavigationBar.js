import React from "react";
import LogoImage from "../../assets/lws.svg";
import Search from "./Search";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return (
		<nav className="bg-slate-100 shadow-md">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
				<Link to="/">
					<img className="h-10" src={LogoImage} alt="Learn with Sumit" />
				</Link>
				<Search />
			</div>
		</nav>
	);
};

export default NavigationBar;
