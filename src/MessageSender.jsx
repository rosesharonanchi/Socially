import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import VideoCamIcon from "@mui/icons-material/Videocam";
import ImageIcon from '@mui/icons-material/Image';

function MessageSender() {

   const [input, setInput] = useState('')
   const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) =>{
     e.preventDefault();
    }
  return (
    <div className='messageSender'> 
    <div className='messageSender__top'> 
    <Avatar /> 
    <form>
        <input className='messageSender__input'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's on your mind ?"
        />
        <input
        type='text'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="image url (optional)"
        />
        <button type='submit' onClick={handleSubmit}>Hidden Submit</button>
    </form>
    </div>
    <div className='messageSender__bottom'> 
    <div className='messageSender__option'> 
    <VideoCamIcon style={{color: 'grey'}} />
  
    </div>
    <div className='messageSender__option'> 
    <ImageIcon style={{color: 'grey'}} />
    
    </div>
    <div className='messageSender__option'> 
    <button type='submit' >Create Post</button>
    
    </div>
    </div>
    </div>
  )
}

export default MessageSender

