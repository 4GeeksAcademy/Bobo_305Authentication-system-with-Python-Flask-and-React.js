import React, { useContext, useState ,useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	const [email,setEmail] = useState("")
	const [password , setPassword] = useState("");
	// const [token , setToken] = useState("")

	const loginUser = async () =>{
		const response = await fetch("https://bobo305-opulent-pancake-9vp79x6pg9x3x56r-3001.preview.app.github.dev/login",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email:email,
				password: password
			}),
		}
		)
		const data = await response.json();
		// setToken(data.token)
		localStorage.setItem("token" , data.token)


		if (response.ok){
			navigate("/private");
			//take us to the login page
		}else{
			console.log("Error", data.response)
		}
	};


	return (
		<div className="text-center mt-5">
			<h1>Login Page</h1>
			<form
			onSubmit={(e) => {e.preventDefault(); loginUser()}}>
				<input
				type="text"
				placeholder="Email"
				value={email}
				onChange={(e) => {setEmail(e.target.value)}} >	
				</input>

				<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => {setPassword(e.target.value)}}>
				</input>

				<button
				type="submit"
				>Login</button>
			</form>	
		
		</div>
	);
};
