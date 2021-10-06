import React, { useContext,useState } from 'react';
import UserContext from '../../context/logincontext';
import ThemeContext from '../../context/ThemeContext';
function MessageList() {
    const {theme} = useContext(ThemeContext);

    
   
    


    const {selectedUser} = useContext(UserContext);
    if (selectedUser ===null ) return <div className={theme == "light" ? "message-list-light" : "message-list-dark"}>
        <div style={{display:"flex",justifyContent:"center"}}>Kullanıcı seçilmedi</div></div>
    return (
        <div className={theme == "light" ? "message-list-light" : "message-list-dark"}>
            {selectedUser.messages.map((message)=>{
                return <div className={theme == "light" ? "user-message-light" : "user-message-dark"}>
                    {message.text}
                </div>
            })}
            
        </div>
        
    )
}

export default MessageList
