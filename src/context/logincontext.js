import React from "react";
const UserContext = React.createContext({
    user:null,
    userList:[],
    login: () => {},
    logout:() => {},
    searchTerm:"",
    handleSendNewMessage: ()=>{},
    

})
export default UserContext