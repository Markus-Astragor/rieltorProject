import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './registerPage.module.css';


function LoginPage() {
  return (
    <div>
      <form>
        <div className={styles.registerPageForm}>
          <h2>Sign in</h2>
          <div className={styles.registerForm}>
            <span className={styles.subTitleForm}>Email</span>
            <input placeholder='Email...' />
            <hr />
          </div>
          <div className={styles.registerForm}>
            <span className={styles.subTitleForm}>Password</span>
            <input placeholder='*******' type='password' />
            <hr />
          </div>
        </div>
        <div className={styles.resgiterButtons}>
          <div> <NavLink to='/' style={{ textDecoration: 'none', textColor: 'black' }}><span>Sign up &#8594;</span></NavLink></div>

          <button className={styles.signUpBtn}>Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage