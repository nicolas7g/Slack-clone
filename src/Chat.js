import React, { useEffect, useState } from 'react';
import './Chat.css';
import {useParams} from 'react-router-dom'; //hook
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './firebase';
import { doc , onSnapshot, collection, query, orderBy  } from 'firebase/firestore';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const {roomId} = useParams(); //toma automaticamente lo que se definio como parametro de la url, es este caso ':roomId' en el app.js
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
 
    useEffect(()=>{
       if(roomId){
        //metodo doc obtiene un documento en particular
           onSnapshot(doc(db, "rooms", roomId),(document)=>{
            setRoomDetails(document.data())
           });
           //funcion collection obtiene una coleccion, que es un contenedor de documentos
            // la forma de acceder es de acuerdo a la jerarquia que maneja firestore: 
            //coleccion->documento->coleccion->documento...   
        onSnapshot(query(collection(db, "rooms", roomId, "messages"), orderBy('timeStamp')),snapshot=>(
            setRoomMessages(
                snapshot.docs.map(doc=>(
                    doc.data()))
                
            ))
        );         

  
        }
    },[roomId]);
    
    console.log('roomDetails',roomDetails);
    //console.log('roomMessages',roomMessages);

    return (
        <div className='chat'>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon/>
                    </h4>
                </div>

                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>  

            <div className='chat__messages'>
                {roomMessages.map(({message, timeStamp, user, userImage})=> 
                // se hace un destructure de la estructura message desgranandola en sus campos
                <Message 
                    message={message} 
                    timestamp={timeStamp} 
                    user={user} 
                    userImage={userImage} 
                    /> 
                    )
                }
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
  )
}

export default Chat
