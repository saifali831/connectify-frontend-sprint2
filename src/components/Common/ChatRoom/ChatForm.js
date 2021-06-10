import React from 'react'

export default function ChatForm(props) {
    return (
        <div className="chat-form-container">
            <input 
            type="text" 
            placeholder="type message.."
            onChange={()=>(props.handleChange)}
            />
            <button onClick={()=>(props.handleSend)}>send</button>
        </div>
    )
}
