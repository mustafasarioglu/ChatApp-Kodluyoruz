import React,{useState} from 'react'
import  {FaMoon} from "react-icons/fa"
import {FiLogOut} from 'react-icons/fi'
import useLogin from '../../hooks/useLogin'
import {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';
function Settings() {
    
    const {theme} = useContext(ThemeContext);
    const {themeChanger} = useContext(ThemeContext);
    
    const {logout} = useLogin();
    return (
        <div className={theme == "light" ? "settings-light" : "settings-dark"}>
           <button className={theme== "light" ? "btn-light" :"btn-dark"} onClick={themeChanger}><FaMoon /></button> 
           <button className={theme== "light" ? "btn-light" :"btn-dark"} onClick={logout}><FiLogOut /></button>
        </div>
    )
}

export default Settings
