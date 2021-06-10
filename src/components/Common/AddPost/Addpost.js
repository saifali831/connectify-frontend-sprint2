import React,{useEffect,useState} from 'react';
import {useAlert} from 'react-alert';
import axios from 'axios';
export default function Addpost() {
const alert = useAlert();
const [post,setPost]=useState({
    postTitle:"",
    postText:""
})

const handlePost=(e)=>{
    const value=e.target.value;

    setPost({
        ...post,
        [e.target.name]:value})
}
const addPost=()=>{
    const {postText,postTitle} = post;
    const userId = window.localStorage.getItem('userId')
    const postObject = {userId,postText,postTitle}
    if(!postText||!postTitle){
        alert.show('Post title or text is empty!',{type:"error"})
    }
    else{
        axios.post('https://connectify-backend-sprint2.herokuapp.com/api/post/create',
        postObject)
        .then(result=>{
                alert.show(result.data.message,{type:"success"})
                window.location.replace('/timeline')
        })
        .catch(err=>{
            alert.show(err.response.data.message,{type:"error"})
        })
    }
}
    return (
        <div className="post-form-container">
            <input 
            name="postTitle"
            type="text" 
            placeholder="Title"
            className="post-form-group"
            value={post.postTitle}
            onChange={handlePost}
            />
            <textarea 
            name="postText" 
            rows="5"
            className="post-form-group"
            value={post.text}
            onChange={handlePost}
            placeholder="Share anything about anything.."></textarea>
            <button onClick={addPost}>Post</button>
        </div>
    )
}
