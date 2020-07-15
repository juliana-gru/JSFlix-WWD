import React from 'react'

import Header from '../components/Header/Header'
import './Home.css'
import './CreateAccount.css'

const CreateAccount = () => {
  return (
    <div className="homepage cta">
      <Header loginBtn={true} />
      <section className="content">
        <form>
          <label> Email </label>
          <input type="text" name="username" required />

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