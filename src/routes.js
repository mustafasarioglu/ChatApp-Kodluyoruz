import React from "react"
import {HashRouter as Router,Link,Switch,Route,Redirect} from "react-router-dom"
import useLogin from "./hooks/useLogin";
import Chat from './pages/chat/chat';
import Login from './pages/login/login';
import Userdetails from "./pages/userdetails/userdetails";

function Routes() {
    const {user} = useLogin();
    return (
      <Router>
     
        
       <Switch>
         
         <Route path="/login" exact>
           <Login />
         </Route>
         <Route path="/chat" exact>
           <Chat />
         </Route>
         <Route path="/user/:userid/details" exact>
           <Userdetails />

         </Route>

          
          
          

          
         
       </Switch>
  
      </Router>
    )
  }
  export default Routes;