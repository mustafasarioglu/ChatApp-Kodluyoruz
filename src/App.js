import './App.css';
import {useState,useEffect, useContext} from "react";
import Routes from './routes';
import UserContext from './context/logincontext';
import mockUsers from "./mock-users.json";
import ThemeContext,{themes} from './context/ThemeContext';

function App() {

  const [user, setUser] = useState(null);
  const [selectedUser, setselectedUser] = useState(null);
  const [searchTerm,setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");
  const themeChanger = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
    };
   
 
  
  
  
  const selectUser = (userId) => {
    const user = mockUsers.users.find((user) => user.id === userId);
    setselectedUser(user);
    // listeden userId'li kullanıcıyı bul
    // kullanıcıyı selectedUser state'ine ata
  };


  const handleSendNewMessage = (messageText) => {
    setselectedUser({
      ...selectedUser,
      messages : [
        ...selectedUser.messages,
        {
          id : Math.random(),
          text : messageText,
          sender : "1995"
        },
      ]
    })
  }
  

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
    

    <ThemeContext.Provider value={{

      theme,
      setTheme,
      themeChanger,
    }
      
    }>
        <UserContext.Provider value={{
                  user,
                  userList: mockUsers.users,
                  selectedUser,
                  login,
                  logout,
                  selectUser,
                  searchTerm,
                  setSearchTerm,
                  handleSendNewMessage
                }}>

                  <Routes />
          </UserContext.Provider>
            


    </ThemeContext.Provider>
        
  
  )
}

export default App;