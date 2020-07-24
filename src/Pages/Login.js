import React from 'react';

import Header from '../components/Header/Header';
import './Login.css';
import './Home.css';
import theMovieDB from '../backend/theMovieDB';
//import { useHistory } from 'react-router-dom';

const Login = () => {
	//const history = useHistory();	
	
	const handleSubmission = e => {
		e.preventDefault();
		//const username = e.target.children[1].value;
		//const password = e.target.children[3].value;

		//Verify if info is correct

		//Direct to dashboard
		//history.push('/dashboard');
		theMovieDB.requestToken();		
	}

	const handleKeyDown = e => {
    if (e.keyCode !== 13) return;    
    handleSubmission(e);
	}

	return (
		<div className='page loginPage'>
			<Header loginBtn={false}>
				<a href='/' className='back-home'>
					<p className='back-home'> Back to Home </p>
				</a>
			</Header>
			<section className='content'>
				<form onSubmit={handleSubmission} className="login-form" onKeyDown={handleKeyDown}>
					
					<label>Email</label>
					<input type='email' name='username' required />

					<label>Password</label>
					<input type='password' name='psw' required />
						
					<button className='btn-login form-btn-login' type='submit'>
						Login
					</button>
											
					<span className='psw'>
						<a href='#'>Forgot password?</a>
					</span>
				</form>
			</section>
		</div>
	);
};

export default Login;
