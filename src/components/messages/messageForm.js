import React,{useContext} from 'react'
import ThemeContext from '../../context/ThemeContext';


function MessageForm() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme == "light" ? "message-form-light" : "message-form-dark"}>
            
                <input type="text" placeholder="Send a new message..."/>
                <button>Send</button>
            
        </div>
    )
}

export default MessageForm
