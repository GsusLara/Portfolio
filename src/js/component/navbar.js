import React from "react";

import logo from "../../img/logo.png";
import "../../styles/navbar.scss";
import { Link } from "react-scroll";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light fixed-top">
			<img className="logo " src={logo} />
			<div className="ml-auto"></div>
			<ul className="nav-menu d-none d-lg-flex">
				<li className="p-3">
					<Link to="cabeza" smooth={true} duration={2000}>
						Home
					</Link>
				</li>
				<li className="p-3">
					<Link to="cuerpo1" smooth={true} duration={2000}>
						Acerca de
					</Link>
				</li>
				<li className="p-3">
					<Link to="cuerpo2" smooth={true} duration={2000}>
						Proyectos
					</Link>
				</li>
				<li className="p-3">
					<Link to="cuerpo3" smooth={true} duration={2000}>
						Contacto
					</Link>
				</li>
			</ul>
			<button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#nav1">
				<span className="navbar-toggler-icon my-toggler"></span>
			</button>
		</nav>
	);
};
