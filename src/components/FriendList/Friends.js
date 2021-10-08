import React, { useContext } from 'react'
import UserContext from '../../context/logincontext'
import ThemeContext from '../../context/ThemeContext';
import {CgProfile} from 'react-icons/cg';


function Friends () {
    const {userList,selectUser,searchTerm} = useContext(UserContext);
    const {theme} = useContext(ThemeContext);
    const filteredUserList = userList.filter((u)=>
        `${u.username}${u.first_name}${u.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) );
   
    
    return (
        <div className={theme == "light" ? "user-list-light" : "user-list-dark"}>



            {filteredUserList.map((user) =>{
                return <div className={theme == "light" ? "friends-name-container-light" : "friends-name-container-dark"}onClick={()=>selectUser(user.id)}>
                    
                    <div className={theme == "light" ? "user-info-light" :"user-info-dark"}>
                        <CgProfile />
                        {`                  ${user.first_name} ${user.last_name}`}
                        <p></p>
                        
                    </div>
                    
                    
                    </div>
            })}
            
            
            
        </div>
    )
}

export default Friends


