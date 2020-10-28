/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header/Header';
import './Home.css';
import './CreateAccount.css';

const CreateAccount = () => {
  const history = useHistory();

  const handleSubmission = (e) => {
    e.preventDefault();

    // Direct to dashboard
    history.push('/browse');
  };

  return (
    <div className="page">
      <Header loginBtn />
      <section className="content">
        <form onSubmit={handleSubmission} className="new-user-form">
          <label htmlFor="username">
            Email
            <input type="email" name="username" id="username" required />
          </label>

          <label htmlFor="psw">
            Create password
            <input type="password" name="psw" id="psw" required />
          </label>

          <label htmlFor="confirm-psw">
            Confirm password
            <input type="password" name="confirm-psw" id="confirm-psw" required />
          </label>

          <button type="submit" className="btn-cta" id="btn-cta">
            Create account
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateAccount;
