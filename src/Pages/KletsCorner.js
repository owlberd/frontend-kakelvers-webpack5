//import { emit } from 'nodemon';
import React from 'react';
import { io } from 'socket.io-client';
import { useEffect, useState} from 'react';

const socket = io.connect("http://localhost:3001");



export default function KletsCorner() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const SendMessage = () => {
        socket.emit("send_message", {message });
    };

    useEffect(()=> {
      socket.on("receive_message", (data) => {
        //alert(data.message);
        setMessageReceived(data.message);
      })
    }, [socket]);

  return (
    <center>
    <div style={{height: '100vh'}}>
        <br></br>
          <h1 style={{color: 'white'}}>babel met de boer</h1>
        <input placeholder='bericht...' onChange={(event) => {
          setMessage(event.target.value);
        }}
        />
        <button onClick={SendMessage}>verzend</button>
    <h1 style={{color: 'white'}}>bericht:
       {messageReceived}</h1>
    
    </div>
    </center>
  )
}
