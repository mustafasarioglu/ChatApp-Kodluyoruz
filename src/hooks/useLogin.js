import { useContext } from "react";
import UserContext from "../context/logincontext";


function useLogin(){
    const {user,login,logout} = useContext(UserContext);
    
    return {user,login,logout}
}
export default useLogin;