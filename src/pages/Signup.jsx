import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import InputControl from '../components/InputControl/InputControl';
import { useFoodCartContext } from '../context/RedOnionContext';
import '../styles/signup.css';

const Signup = () => {
	const { contextValue } = useFoodCartContext();
	const { handleSubmission, setValues, errorMassage, submitBtnDisable } =
		contextValue;

	return (
		<section className="login">
			<Header/>
			<div className="login-container">
				<h2>Sign Up</h2>
				<InputControl
					label="Enter Your Name"
					placeholder="Enter your name..."
					type="text"
					onChange={(e) =>
						setValues((prev) => ({ ...prev, name: e.target.value }))
					}
				/>
				<InputControl
					label="Enter Email"
					placeholder="Enter email..."
					type="email"
					onChange={(e) =>
						setValues((prev) => ({ ...prev, email: e.target.value }))
					}
				/>
				<InputControl
					label="Enter Password"
					placeholder="Enter Password..."
					type="password"
					onChange={(e) =>
						setValues((prev) => ({ ...prev, password: e.target.value }))
					}
				/>
				<p className="error-massage">{errorMassage}</p>
				<button
					className="login-btn"
					disabled={submitBtnDisable}
					onClick={handleSubmission}>
					Sign Up
				</button>
				<p className="login-text">
					Already have an account?{' '}
					<Link className="login-link" to="/login">
						Login
					</Link>
				</p>
			</div>
		</section>
	);
};

export default Signup;
