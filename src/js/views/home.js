import React, { useEffect } from "react";
import "../../styles/home.scss";
import { Principal } from "../component/principal";

export const Home = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, []);
	return (
		<div className="text-center">
			<div id="principal" className="container-fluid secciones">
				{" "}
				<Principal />
			</div>
			<div id="info" className="container-fluid secciones">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
			<div id="Proyectos" className="container-fluid secciones">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
		</div>
	);
};
