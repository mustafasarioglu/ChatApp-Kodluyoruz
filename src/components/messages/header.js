import React, { useContext } from 'react'
import {BsThreeDots} from 'react-icons/bs';
import { Redirect } from 'react-router';
import UserContext from '../../context/logincontext';
function Header() {
    const {selectedUser} = useContext(UserContext);
    if (selectedUser === null) return <div className="message-header">
        <p>hiçbir kullanıcı seçilmedi.</p>
        <button className="details-btn"><BsThreeDots/></button>
        </div>
    return (
        <div className="message-header">
            
            <p>{`${selectedUser.first_name} ${selectedUser.last_name}`}</p>
            <button className="details-btn" onClick={()=>{
                <Redirect to="/userdetails" />
            }}><BsThreeDots/></button>
        
        </div>
    )
}

export default Header