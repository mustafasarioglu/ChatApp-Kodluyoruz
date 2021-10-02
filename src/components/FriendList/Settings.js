import React from 'react'
import  {FaMoon} from "react-icons/fa"
import {FiLogOut} from 'react-icons/fi'
import useLogin from '../../hooks/useLogin'

function Settings() {
    const {logout} = useLogin();
    return (
        <div className="settings">
           <button><FaMoon /></button> 
           <button onClick={logout}><FiLogOut /></button>
        </div>
    )
}

export default Settings
