import React,{useContext,useState} from 'react'
import UserContext from '../../context/logincontext';
import ThemeContext from '../../context/ThemeContext';


function MessageForm() {
    const {handleSendNewMessage} = useContext(UserContext);
    const [message,setMessage] =useState("");
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme == "light"  ? "message-form-light" : "message-form-dark"}>
            
                <input onChange={(e)=>{
                    setMessage(e.target.value);
                }}type="text" placeholder="Send a new message..."/>
                <button onClick={()=>{
                    handleSendNewMessage(message);
                    setMessage("");
                }}>Send</button>
            
        </div>
    )
}

export default MessageForm
