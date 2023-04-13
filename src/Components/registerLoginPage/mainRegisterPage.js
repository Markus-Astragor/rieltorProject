import React from 'react';
import building from '../../images/loginRegisterPage/building 1.png';
import styles from './registerPage.module.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './registerPage';
import LoginPage from './loginPage';


function MainRegisterPage() {
    return (
        <div className={styles.registerPage}>
            <div className={styles.registerPageLeft}>
                <img src={building} width='100%' height='100%' />
            </div>
            <div className={styles.registerPageRight}>
                <Routes>
                    <Route path='/' element={<RegisterPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                </Routes>
            </div>

        </div>
    )
}

export default MainRegisterPage