import React from 'react'
import './Chat.css'
import {useParams } from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useEffect } from 'react';
import db from '../../firebase'
import { useState } from 'react';
import Message from '../Messages/Message';

const Chat = () => {
    const {roomId} = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState(null)

    useEffect(()=>{
        console.log(roomId,"out")
        if(roomId){
            console.log(roomId)
            db.collection("rooms").doc(roomId)
            .onSnapshot(snapshot => 
                setRoomDetails(snapshot.data())
            )
        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot( snapshot =>
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )
    },[roomId]) 

    console.log(roomDetails)
    console.log(roomMessages," messages")
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <div className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon/>
                    </div>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoIcon/> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {/* messages component  */}
                {roomMessages?.map(({message, timestamp, user, userImage}) => (
                    <Message 
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
