import React from 'react'
import './SidebarOption.css'
import {useNavigate } from 'react-router-dom'; 
import { addDoc, collection } from 'firebase/firestore';
import db from './firebase';


function SidebarOption({Icon, title, id, addChannelOption}) {
  const navigate = useNavigate ();

  const selectChannel = () => {
    if (id){//navigate permite cambiar de canal sin necesidad de hacer un refresh, lo hace de manera transparente y automatica...super rapido
      navigate(`/room/${id}`)
    }else{
      navigate(title)
    }
    
  };
  
  const addChannel = () =>{
    const channelName = prompt('Please enter the channel name');
    addDoc(collection(db, 'rooms'),{'name': channelName});
  }

  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>{/*cuando se clickea sobre el sidebarOption tiene que determinar si fue sobre un canal o sobre el + para agregar un canal*/}
        {Icon && <Icon className='sidebarOption__icon'/>}{/*if an icon was passed as props then render that icon */}
        {Icon ?(   //if an icon was passed, then...
            <h3>{title}</h3>    
        ):(  //then...
            <h3 className='sidebarOption__channel'>
                <span className='sidebarOption__hash'># {title} </span>
            </h3>
        )}
    </div>
  )
}

export default SidebarOption
