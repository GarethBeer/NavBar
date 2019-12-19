import React, { Component } from "react";
import "../Style/navbar.css";

class NavBar extends Component {
	state = {
		sideBar: false
	};

	handleBurgerClick = () => {
		if (!this.state.sideBar) {
			this.setState({
				sideBar: true
			});
		} else {
			this.setState({ sideBar: false });
		}
	};

	render() {
		const { sideBar } = this.state;

		return (
			<nav className="navbar">
				<div className="logo">Gareth Beer</div>
				<ul className={`navlinks ${sideBar ? "active" : ""}`}>
					<li>About</li>
					<li>Services</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
				<div className="burger" onClick={this.handleBurgerClick}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className={`line3 ${sideBar ? "active" : ""}`}></div>
				</div>
			</nav>
		);
	}
}
export default NavBar;
