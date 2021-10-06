import React from 'react'
import "./login.css"
import { useState,useContext } from 'react';
import useLogin from '../../hooks/useLogin';
import {useLocation,Redirect} from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';


function Login() {
    const {user,login} = useLogin()
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { pathname } = useLocation();
    const {theme} = useContext(ThemeContext);



    if (user && pathname === "/login") return <Redirect to="/chat" />;
    return (
        <div className={theme == "light" ? "container-light" : "container-dark"}>
        
                <h3 className={theme == "light" ? "login-text-light" : "login-text-dark"}>Log in to your account</h3>
                <p>
                    <input type="text" placeholder="User Name" size="40" onChange={e=>{
                        setUsername(e.target.value)
                    }}/>
                </p>
                <p>
                    <input type="text" placeholder="First Name" size="40"onChange={e=>{
                        setFirstName(e.target.value)
                    }}/>
                </p>
                <p>
                    <input type="text" placeholder="Last Name" size="40" onChange={e=>{
                        setLastName(e.target.value)}}/>
                </p>
                <p>
                    <button className="btn-login" onClick={()=>{
                        login(username)
                    }}>LOGIN</button>
                </p>
            
            
 
        </div>
    )
}

export default Login
