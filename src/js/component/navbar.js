import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img className="logo navbar-brand" src={logo} />
			<div className="ml-auto"></div>
			<ul className="nav-menu d-none d-lg-flex">
				<li className="p-3">Home</li>
				<li className="p-3">Experiencia</li>
				<li className="p-3">Acerca de</li>
				<li className="p-3">Contacto</li>
			</ul>
			<button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#nav1">
				<span className="navbar-toggler-icon my-toggler"></span>
			</button>
		</nav>
	);
};
