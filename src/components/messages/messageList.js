import React, { useContext } from 'react';
import UserContext from '../../context/logincontext';

function MessageList() {
    const {selectedUser} = useContext(UserContext);
    if (selectedUser ===null ) return <div className="message-list">
        <div style={{display:"flex",justifyContent:"center"}}>Hiçbir kullanıcı seçilmedi</div></div>
    return (
        <div className="message-list">
            {selectedUser.messages.map((message)=>{
                return <div>
                    {message.text}
                </div>
            })}
            
        </div>
        
    )
}

export default MessageList
