import React,{useContext} from 'react'
import SearchFriend from './SearchFriend'
import Friends from "./Friends"
import Settings from './Settings'
import './friendListStyle.css'
import ThemeContext from '../../context/ThemeContext'

function FriendList() {
    const {theme} = useContext(ThemeContext)
    
    return (
        <div className={theme == "light" ? "friend-list-light" : "friend-list-dark"}>
            <SearchFriend />
            <Friends />
            <Settings />
        </div>
    )
}

export default FriendList
