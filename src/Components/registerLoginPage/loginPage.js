import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './registerPage.module.css';


function LoginPage() {
  return (
    <div>
      <form>
        <div className={styles.registerPageForm}>
          <h2>Sign in</h2>
          <div className={styles.registerFormTest}>
                    {/* <span className={styles.subTitleForm}>Full Name</span> */}
                    <input required/>
                    <span className={styles.span}>Email adress...</span>
                    <i></i>
                </div>
                <div className={styles.registerFormTest}>
                    {/* <span className={styles.subTitleForm}>Full Name</span> */}
                    <input required/>
                    <span className={styles.span}>Password</span>
                    <i></i>
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