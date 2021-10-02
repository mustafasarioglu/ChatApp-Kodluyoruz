import React from 'react'
import Header from './header'
import MessageForm from './messageForm'
import MessageList from './messageList'
import './messages.css';



function Messages() {
    return (
        <div className="messages">
            <Header />
            <MessageList />
            <MessageForm />
        </div>
    )
}

export default Messages
