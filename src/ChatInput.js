import React, { useState } from 'react';
import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { addDoc, collection, serverTimestamp  } from 'firebase/firestore';

function ChatInput({channelName, channelId}) {
    const [input, setInput] =  useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();//prevent page from refreshing
        console.log('channelId',channelId);
        if(channelId){
           
            addDoc(collection(db, "rooms", channelId, "messages"), {
                message: input,
                timeStamp:  serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            
            })
        }
    }

  return (
    <div className='chatInput'>
        <form>
            <input 
            value={input}
            onChange={e=>setInput(e.target.value)}
            placeholder={`Message #${channelName?.toLowerCase()}`}/>
            <button type='submit' onClick={sendMessage}>SEND</button>
        </form>
    </div>
  )
}

export default ChatInput