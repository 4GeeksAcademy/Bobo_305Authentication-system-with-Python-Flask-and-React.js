import React, { useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Register = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	const [email,setEmail] = useState("")
	const [password , setPassword] = useState("");

	const registerUser = async () =>{
		const response = await fetch("https://bobo305-opulent-pancake-9vp79x6pg9x3x56r-3001.preview.app.github.dev/register",
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
		if (response.ok){
			navigate("/login");
			//take us to the login page
		}else{
			console.log("Error", data.response)
		}
	};


	return (
		<div className="text-center mt-5">
			<h1>Register Page</h1>

			<form
			onSubmit={(e) => {e.preventDefault();registerUser()}}>
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
				>Submit</button>
			</form>
			
		</div>
	);
};
