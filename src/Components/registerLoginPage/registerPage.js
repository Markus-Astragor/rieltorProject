import React from 'react';
import styles from './registerPage.module.css';
import { NavLink } from 'react-router-dom';


function RegisterPage() {
    return (
        <div>
            <div className={styles.registerPageForm}>
                <h2>Sign up</h2>
                <div className={styles.registerForm}>
                    <span className={styles.subTitleForm}>Full Name</span>
                    <input placeholder='Name...' />
                </div>
            </div>
            <div className={styles.resgiterButtons}>
                <button>Sign up</button>
                <NavLink to='/login'><button>Sign in</button></NavLink>
            </div>
        </div>
    )
}

export default RegisterPage