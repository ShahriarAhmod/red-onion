import React from 'react';
import InputControl from '../components/InputControl/InputControl';
import { Link, useLocation } from 'react-router-dom';
import { useFoodCartContext } from '../context/RedOnionContext';
import Header from '../components/Header/Header';
import { toast } from 'react-toastify';
const Login = () => {
	const { contextValue } = useFoodCartContext();
	const {
		handleSubmissionLogin,
		setLogValues,
		errorMassage,
		submitBtnDisable,
	} = contextValue;

	const location = useLocation()
	const path=(location.pathname);
	return (
    <section className="login">
      <Header path={path}/>
			<div className="login-container">
				<h2>Login</h2>
				<InputControl
					label="Enter Email"
					placeholder="Enter email..."
					type="email"
					onChange={(e) =>
						setLogValues((prev) => ({ ...prev, email: e.target.value }))
					}
				/>

				<InputControl
					label="Enter Password"
					placeholder="Enter Password..."
					type="password"
				
					onChange={(e) =>
						setLogValues((prev) => ({ ...prev, password: e.target.value }))
					}
				/>
				<p>{errorMassage}</p>
				
				<button
					className="login-btn"
					disabled={submitBtnDisable}
					onClick={handleSubmissionLogin}>
					Login
				</button>
				<p className="login-text">
					Create a new account?{' '}
					<Link className="login-link" to="/signup">
						Sign up
					</Link>
				</p>
			</div>
		</section>
	);
};

export default Login;
