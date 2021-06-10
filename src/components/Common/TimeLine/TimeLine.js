import React,{useEffect,useState} from 'react'
import {Postform,PostInfo} from '../index'
import axios from 'axios'
export default function TimeLine() {

    const [post,setPost]=useState({
        data:[]
    })

    useEffect(()=>{
        const userId = window.localStorage.getItem('userId');
        axios
        .get(`https://connectify-backend-sprint2.herokuapp.com/api/post/get/${userId}`)
        .then(result=>{
            setPost({data:result.data})
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
   
    const postComment=(text,postId)=>{
        const userName = window.localStorage.getItem("userName");
        axios
        .post("https://connectify-backend-sprint2.herokuapp.com/api/post/comment/create",{postId,text,userName})
        .then((result)=>{
            alert.show(result.data.message,{type:"success"})
            window.location.replace('/timeline')
        })
        .catch((err)=>{
            alert.show(err.response.data.message,{type:"error"})
        })
    }

    return (
        <div className="container">
        <Postform/>
        <h1 className="main-heading">Previous Posts</h1> 
        {
            post.data.map((post)=><PostInfo 
            key={post._id} 
            post={post}
            postComment={postComment}/>)
        }    
        </div>
    )
}
