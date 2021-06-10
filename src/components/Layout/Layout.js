import React,{useEffect,useState} from 'react'
import {HomePage} from '../User'
import {AdminHomePage} from '../Admin'
import {Login,Signup} from '../Registration'
import {Navbar,Footer,Timeline,ChatRoom} from '../Common'
import {Route} from 'react-router-dom';
export default function Layout() {

    const [user,setUser]=useState({
        userName:"",
        role:"",
        isLoggedIn:false
    })
    useEffect(()=>{
        if(window.localStorage.getItem('userId')){

          setUser({
            userName:window.localStorage.getItem('userName'),
            role:window.localStorage.getItem('userId'),
            isLoggedIn:true
          })
        }
        
      },[])
    
    return (
        <React.Fragment>
        <Navbar loginInfo={user}/>
        <Route path="/" exact render={()=>(<Login setUser={setUser}/>)}/>
        <Route path="/admin" exact render={()=>(<AdminHomePage/>)}/>
        <Route path="/timeline" exact render={()=>(<Timeline/>)}/>
        <Route path="/home" exact render={()=>(<HomePage/>)}/>
        <Route path="/signup" exact render={()=>(<Signup/>)}/>
        <Route path="/chatroom" exact component={ChatRoom}/>
        <Footer/>
        </React.Fragment>
    )
}
