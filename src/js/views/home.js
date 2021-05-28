import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="text-center">
			<div id="cabeza" className="container-fluid presentacion">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
			<div id="cuerpo1" className="container-fluid presentacion">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
			<div id="cuerpo2" className="container-fluid presentacion">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
			<div id="cuerpo3" className="container-fluid ">
				{" "}
				<div className="container contenido">hola</div>{" "}
			</div>
			<h1>Hello!</h1>
			<p>wellcome!!</p>
			<a href="#" className="btn btn-success">
				Utilizando bootstrap
			</a>
		</div>
	);
};
