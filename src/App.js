import './App.css';
import {useState,useEffect, useContext} from "react";
import Routes from './routes';
import UserContext from './context/logincontext';
import mockUsers from "./mock-users.json";
import ThemeContext,{themes} from './context/ThemeContext';

function App() {

  const [user, setUser] = useState(null);
  const [selectedUser, setselectedUser] = useState(null)
  const [searchTerm,setSearchTerm] = useState("")
  
  
  const selectUser = (userId) => {
    const user = mockUsers.users.find((user) => user.id === userId);
    setselectedUser(user);
    // listeden userId'li kullanıcıyı bul
    // kullanıcıyı selectedUser state'ine ata
  };

  

  const login = (username) => {
    const user = {username};

    setUser(user);
    localStorage.setItem("username",JSON.stringify(user));
  }
  const logout = () => {
    setUser(null)
    localStorage.removeItem("username");
  }
  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("username");

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      console.log(userObject);
      setUser(userObject);
    }
  }, []);

  return (
    <UserContext.Provider value={{
      user,
      userList: mockUsers.users,
      selectedUser,
      login,
      logout,
      selectUser,
      searchTerm,
      setSearchTerm,
    }}>

      <Routes />
    </UserContext.Provider>
    
    
  )
}

export default App;