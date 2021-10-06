import React,{useState,useContext} from 'react';
import UserContext from '../../context/logincontext';
import ThemeContext from '../../context/ThemeContext';

function SearchFriend() {
    const {theme} = useContext(ThemeContext);

    const {searchTerm,setSearchTerm} = useContext(UserContext)
    return (
        <div className={theme == "light" ? "search-friend-light" : "search-friend-dark"}>   
            <input type="text" placeholder="Search"className={theme == "light" ? "search-btn-light" : "search-btn-dark"} size="30"onChange={event => {setSearchTerm(event.target.value)}}/>
        </div>
    )
}

export default SearchFriend