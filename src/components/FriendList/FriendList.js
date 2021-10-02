import React from 'react'
import SearchFriend from './SearchFriend'
import Friends from "./Friends"
import Settings from './Settings'
import './friendListStyle.css'

function FriendList() {
    
    return (
        <div className="friend-list">
            <SearchFriend />
            <Friends />
            <Settings />
        </div>
    )
}

export default FriendList
