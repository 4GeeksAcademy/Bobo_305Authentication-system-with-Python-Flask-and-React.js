import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>JWT Auth Project</h1>
			<div>
				<Link to={"/Register"}><button>Register Page</button></Link>
				<Link to={"/Login"}><button>Login Page</button></Link>
				<Link to={"/Private"}><button>Private Page</button></Link>
			</div>
			
		</div>
	);
};
