import React,{useContext} from 'react'
import UserContext from '../../context/logincontext'
import './userdetails.css'
import {BiVideo} from 'react-icons/bi';
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi';
function Userdetails() {
    const {selectedUser} = useContext(UserContext)
    if (selectedUser === null) {
        return <div className="top-side">
            <h1>
            Kullanıcı seçilmedi
        </h1>
            </div>
    }
    return (
        <div className="user-detail-container">

            <div className="top-side">
                <div><h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1></div>
            </div>
            <div className="bottom-side">
            <div className="boxes">
                <div><BiMessageRoundedDots /></div>Message</div>
            <div className="boxes">
                <div><BiPhoneCall /></div>Call</div>
            <div className="boxes">
                <div><BiVideo /></div>
            Video
                </div>
            </div>


        </div>
    )
}

export default Userdetails
