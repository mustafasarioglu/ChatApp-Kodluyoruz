import React, { useContext } from 'react'
import UserContext from '../../context/logincontext'


function Friends () {
    const {userList,selectUser,searchTerm} = useContext(UserContext);

    
    return (
        <div className="user-list">
            
            {userList.filter((item)=> {
                if (searchTerm === "") {
                    return item;
                }else if ((item.first_name).toLowerCase().includes(searchTerm.toLowerCase())){
                    return item;
                }
            }).map((item) =>{
                return <div className="friends-name-container"onClick={()=>selectUser(item.id)}>
                    <div className="user">




                    </div>
                    <div className="user-info">
                        {`${item.first_name} ${item.last_name}`}
                        
                    </div>
                    
                    
                    </div>
            })}
            
            
            
        </div>
    )
}

export default Friends


