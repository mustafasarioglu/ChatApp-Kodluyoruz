import userEvent from '@testing-library/user-event';
import React, { useContext,useState } from 'react';
import UserContext from '../../context/logincontext';
import ThemeContext from '../../context/ThemeContext';
function MessageList() {
    const {theme} = useContext(ThemeContext);
    const {user,selectedUser} = useContext(UserContext);

    
    

    
    
    if (selectedUser ===null ) return <div className={theme == "light" ? "message-list-light" : "message-list-dark"}>
        <div style={{display:"flex",justifyContent:"center"}}>Kullanıcı seçilmedi</div></div>
    return (
        <div className={theme == "light" ? "message-list-light" : "message-list-dark"}>
            {selectedUser.messages.map((message)=>{
                return <div className={`${theme === "light" ? "user-message-light" : "user-message-dark"} ${message.sender === "1995" ? "from-me" :""}`}>
                    
                    <div className="message">{message.text}</div>
                </div>
            })}
            
        </div>
        
    )
}

export default MessageList


//{theme == "light" ? "user-message-light" : "user-message-dark"}

//`user-message-light ${message.sender === "1995" ? "from-me":""}`