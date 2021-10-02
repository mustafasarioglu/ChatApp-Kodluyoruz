import React,{useState,useContext} from 'react';
import UserContext from '../../context/logincontext';


function SearchFriend() {
    const {searchTerm,setSearchTerm} = useContext(UserContext)
    return (
        <div className="search-friend">   
            <input type="text" placeholder="Search" size="30"onChange={event => {setSearchTerm(event.target.value)}}/>
        </div>
    )
}

export default SearchFriend