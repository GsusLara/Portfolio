import React, { useEffect, useState } from "react";

import logo from "../../img/logo.png";
import "../../styles/navbar.scss";
import { Link } from "react-scroll";

export const Navbar = () => {
	const [activo, setactivo] = useState("h");
	const [visible, setvisible] = useState(false);

	return (
		<nav className="navbar navbar-light fixed-top">
			<img className="logo " src={logo} />
			<div className="ml-auto"></div>
			<ul className="nav-menu d-none d-lg-flex">
				<li className="p-3">
					<Link
						to="principal"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("h")}
						style={{ color: activo == "h" ? "gold" : "black" }}>
						Home
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="info"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("a")}
						style={{ color: activo == "a" ? "gold" : "black" }}>
						Acerca de
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="Proyectos"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("p")}
						style={{ color: activo == "p" ? "gold" : "black" }}>
						Proyectos
					</Link>
				</li>
				<li className="p-3">
					<Link
						to="contacto"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("c")}
						style={{ color: activo == "c" ? "gold" : "black" }}>
						Contacto
					</Link>
				</li>
			</ul>

			<ul
				className="nav-menu flex-column d-lg-none position-fixed Celmenu"
				style={{ right: visible ? "0" : "-30%" }}>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="principal"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("h")}
						style={{ color: activo == "h" ? "gold" : "black" }}>
						Home
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="info"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("a")}
						style={{ color: activo == "a" ? "gold" : "black" }}>
						Acerca de
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="Proyectos"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("p")}
						style={{ color: activo == "p" ? "gold" : "black" }}>
						Proyectos
					</Link>
				</li>
				<li className="pt-3 pb-3 pr-3">
					<Link
						to="contacto"
						smooth={true}
						duration={2000}
						onClick={() => setactivo("c")}
						style={{ color: activo == "c" ? "gold" : "black" }}>
						Contacto
					</Link>
				</li>
			</ul>
			<span className="d-lg-none tongle" onClick={() => setvisible(!visible)}>
				<i className="fas fa-bars"></i>
			</span>
		</nav>
	);
};
