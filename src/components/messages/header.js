import React, { useContext } from 'react'
import {BsThreeDots} from 'react-icons/bs';
import { Redirect } from 'react-router';
import UserContext from '../../context/logincontext';
import ThemeContext from '../../context/ThemeContext';
import {CgProfile} from 'react-icons/cg';
import {useHistory} from "react-router-dom";



function Header() {
    const history = useHistory();
    const {theme} = useContext(ThemeContext);
    const {selectedUser} = useContext(UserContext);
    if (selectedUser === null) return <div className={theme == "light" ? "message-header-light" : "message-header-dark"}>
        <p className={theme == "light" ? "user-header-light" : "user-header-dark"}> Kullanıcı seçilmedi.</p>
        <button className={theme == "light" ? "details-btn-light":"details-btn-dark"}><BsThreeDots/></button>
        </div>
    return (
        <div className={theme == "light" ?  "message-header-light" : "message-header-dark"}>
            
            <p className={theme == "light" ? "user-header-light" : "user-header-dark"}><CgProfile />{`     ${selectedUser.first_name} ${selectedUser.last_name}`}</p>
            <button className={theme == "light" ? "details-btn-light":"details-btn-dark"} onClick={()=>{
                history.push("/user/:userid/details")
            }}><BsThreeDots/></button>
        
        </div>
    )
}

export default Header