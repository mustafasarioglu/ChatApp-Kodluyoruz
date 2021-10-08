import React,{useContext} from 'react'
import UserContext from '../../context/logincontext'
import './userdetails.css'
import {BiVideo} from 'react-icons/bi';
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi';
import FriendList from '../../components/FriendList/FriendList';
import {GrClose} from 'react-icons/gr';
import {useHistory} from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';

function Userdetails() {
    const {theme} = useContext(ThemeContext);   
    const history1 = useHistory();
    const {selectedUser} = useContext(UserContext)
    if (selectedUser === null) {
        return <div className="top-side">
            <h1>
            Kullanıcı seçilmedi
        </h1>
            </div>
    }
    return (
        <div className="App">

            <div className="user-detail-left-side"><FriendList /></div>
            <div className={theme == "light" ? "user-detail-right-side-light" : "user-detail-right-side-dark"}>
                <div className="header-close">
                    <button className={theme == "light" ? "close-btn-light":"close-btn-dark"}onClick={() =>{
                        history1.push("/chat")

                    }}><GrClose /></button>
                </div>
                <div className="profile-img">
                    
                </div>
                <div className="top-side">
                    <div className="user-info"><h1 className={theme == "light" ? "last-seen-info-light" : "last-seen-info-dark"}>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                    <p>Last seen 2 hours ago</p></div>
                </div>
                <div className="bottom-side">
                <div className={theme == "light" ? "boxes-light" : "boxes-dark"}>
                    <div><BiMessageRoundedDots />
                    </div>Message</div>
                <div className={theme == "light" ? "boxes-light" : "boxes-dark"}>
                    <div><BiPhoneCall /></div>Call</div>
                <div className={theme == "light" ? "boxes-light" : "boxes-dark"}>
                    <div><BiVideo /></div>
                Video
                    </div>
                </div>


            </div>


            
        </div>
        
    )
}

export default Userdetails
