import React from 'react';

import Header from '../components/Header/Header';
import './Login.css';
import './Home.css';

const Login = () => {
	return (
		<div className='page loginPage'>
			<Header loginBtn={false}>
				<a href='/' class='back-home'>
					<p class='back-home'> Back to Home </p>
				</a>
			</Header>
			<section className='content'>
				<form className="login-form" id="login-form">
					
						<label>Email</label>
						<input type='text' name='username' required />

						<label>Password</label>
						<input type='password' name='psw' required />

						<a href='/dashboard'>
							<button className='btn-login btn-log-page' id="btn-login-form" type='submit'>
								Login
							</button>
						</a>
					
					<span className='psw'>
						<a href='#'>Forgot password?</a>
					</span>
				</form>
			</section>
		</div>
	);
};

export default Login;
