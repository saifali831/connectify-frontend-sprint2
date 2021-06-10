import React,{useState,useEffect} from 'react'

export default function SearchForm(props) {
   const {search} = props
    return (
        <div className="post-form-container">
        <input 
        name="query"
        type="text" 
        placeholder="Search keywords..."
        className="post-form-group"
        value={search.query}
        onChange={props.handleSearch}
        />
        <button onClick={()=>{props.getSearch()}}>Search</button>
    </div>
    )
}
