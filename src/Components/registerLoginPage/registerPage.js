import React from 'react';
import styles from './registerPage.module.css';
import { NavLink } from 'react-router-dom';


function RegisterPage() {
    return (
        <div>
            <form>
            <div className={styles.registerPageForm}>
                <h2>Sign up</h2>
                <div className={styles.registerForm}>
                    <span className={styles.subTitleForm}>Full Name</span>
                    <input required placeholder='Name...' />
                    <hr />
                </div>
                <div className={styles.registerForm}>
                    <span className={styles.subTitleForm}>Email</span>
                    <input required placeholder='Email...' />
                    <hr />
                </div>
                <div className={styles.registerForm}>
                    <span className={styles.subTitleForm}>Password</span>
                    <input required placeholder='*******' type='password' />
                    <hr />
                </div>
                <div className={styles.registerForm}>
                    <span className={styles.subTitleForm}>Repeat password</span>
                    <input required placeholder='*******' type='password' />
                    <hr />
                </div>
                <div className={styles.registerForm}>

                    <span className={styles.subTitleForm}>Rieltor or Client</span>
                    <div className={styles.roleChoice}>
                        <div className={styles.Proffesion}>
                            <input required type='radio' value='Client' name='user' checked className={styles.radioBtn} />
                            <label htmlFor='Client'>Client</label>
                        </div>
                        <div className={styles.Proffesion}>
                            <input required type='radio' value='Rieltor' name='user' className={styles.radioBtn} />
                            <label htmlFor='Rieltor'>Rieltor</label>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className={styles.checkBoxWrapper}>
                    <input required type='checkbox' value='checkbox' name='checkbox for accepting rules' className={styles.checkBox} />
                    <div className={styles.labelWrapper}>
                        <label htmlFor='checkbox' className={styles.label}>I agree to the Terms of user</label>
                    </div>
                </div>
            </div>
            <div className={styles.resgiterButtons}>
                <button className={styles.signUpBtn}>Sign up</button>
                <div> <NavLink to='/login' style={{ textDecoration: 'none', textColor: 'black' }}><span>Sign in &#8594;</span></NavLink></div>
            </div>
            </form>
        </div>
    )
}

export default RegisterPage