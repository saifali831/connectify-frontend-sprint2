import React,{useEffect,useState} from 'react'
import {io} from 'socket.io-client'
import Recieve from './MassageRecieve'
import Send from './MessageSend'
import ChatForm from './ChatForm'
export default function ChatRoom(props) {
    const accessToken =  window.localStorage.getItem('accessToken');
    const [chatroom,setChatroom]=useState({
        activeUsers:"",
        message:""
    })
        
    useEffect(()=>{
        const socket = io('https://connectify-backend-sprint2.herokuapp.com');
        socket.emit('setOnlineUser',window.localStorage.getItem('userName'));
       
        socket.on('getActiveUsers',activeUsers=>{
            console.log(activeUsers);
            setChatroom({activeUsers:activeUsers})
        })
    },[])
    const handleChange=(e)=>{
        const value = e.target.value;
        setChatroom({...chatroom,[e.target.name]:value})
    }
    const handleSend=()=>{

    }
    return (
        <div className="container">
            <div className="chatroom-container mx-auto">
                <Recieve/>
                <Send/>
            </div>
            <ChatForm 
            handleChange={handleChange}
            handleSend={handleSend}/>
        </div>
    )
}
