import React from "react";
import "../Style/navbar.css";

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="logo">Gareth Beer</div>
			<ul className="navlinks">
				<li>About</li>
				<li>Services</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
			<div class="burger">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</nav>
	);
};

export default NavBar;
