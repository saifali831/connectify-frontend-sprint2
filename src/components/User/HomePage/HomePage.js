import React,{useState,useEffect} from 'react'
import {SearchForm,PostInfo} from '../../Common';
import {Route} from 'react-router-dom';
import {Login,Signup} from '../../Registration'
import { useAlert } from 'react-alert'
import axios from 'axios'
export default function HomePage() {
    const alert = useAlert()

    const [post,setPost]=useState({
        data:[]
    })
    const [search,setSearch]=useState({
        query:""
    })
    const handleSearch=(e)=>{
        const value=e.target.value;
        setSearch({...search,[e.target.name]:value})
    }
    const loadData=()=>{
        const userId = window.localStorage.getItem('userId');
        axios
        .get(`https://connectify-backend-sprint2.herokuapp.com/api/post/get`)
        .then(result=>{
            setPost({data:result.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
       loadData();
    },[])

    const getSearch=()=>{
        axios
        .get(`https://connectify-backend-sprint2.herokuapp.com/api/post/search/${search.query}`)
        .then(result=>{
            setPost({data:result.data})
        })
        .catch(error =>{
            console.log(error);
        })   
    }
    
    const postComment=(text,postId)=>{
        const userName = window.localStorage.getItem("userName");
        axios
        .post("https://connectify-backend-sprint2.herokuapp.com/api/post/comment/create",{postId,text,userName})
        .then((result)=>{
            alert.show(result.data.message,{type:"success"})
            loadData()
        })
        .catch((err)=>{
            alert.show(err.response.data.message,{type:"error"})
        })
    }

    return (
        <div className="container">
            <SearchForm 
            search={search} 
            handleSearch={handleSearch}
            getSearch={getSearch}/>
        <h1 className="main-heading">All Posts</h1> 
        {
            post.data.map((post)=><PostInfo 
            key={post._id} 
            post={post}
            postComment={postComment}/>)
        }
        
        </div>
    )
}
