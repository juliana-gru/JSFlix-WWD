import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header/Header';
import './Home.css';
import './CreateAccount.css';

const CreateAccount = () => {
  const [isUser, setIsUser] = useState(false);
  const [areDifferent, setAreDifferent] = useState(false);
  const history = useHistory();
  
  const handleSubmission = (e) => {
    e.preventDefault();

    //Verify if passwords match
    if (e.target.children[3] != e.target.children[5]) setAreDifferent(true);
    
    //Verify if is a new user
    const username = e.target.children[1];
    // if (api.get('/users).then(response => response.some(username))) {
    //   setIsUser(true);
    // }
    
    //Send user info to api    
    const password = e.target.children[3];
    //api.post(username, password)

    //Direct to dashboard
    history.push('/dashboard');
  }
  
  return (
    <div className="page">
      <Header loginBtn={true} />
      <section className="content">
        {isUser && <p>You're already an user. Please login or create a different account.</p> }
        {areDifferent && <p>Passwords don't match. Please try again.</p>}
        <form onSubmit={handleSubmission} className="new-user-form">
          <label> Email </label>
          <input type="email" name="username" required />

          <label> Create password </label>
          <input type="password" name="psw" required />

          <label> Confirm password </label>
          <input type="password" name="psw" required />
        
          <button type="submit" className="btn-cta" id="btn-cta"> Create account </button>
        </form>        
      </section>      
    </div>

  )
}

export default CreateAccount;