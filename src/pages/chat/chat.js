import React from 'react'
import {Redirect, useLocation } from 'react-router';
import FriendList from '../../components/FriendList/FriendList'
import Messages from '../../components/messages/messages'
import useLogin from '../../hooks/useLogin'

function Chat() {
    const {user} = useLogin();
    const {pathname} = useLocation();

    if (!user && pathname ==="/chat") return <Redirect to="/login"/>
    return (
        <div className="App">
            <FriendList />
            <Messages />
        </div>
    )
}

export default Chat
