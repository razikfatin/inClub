import React from 'react';
import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function Landing() {
    const [room,setRoom] = React.useState('')
    return (
        <>
            <h2>Choose a Chat Room</h2>
            <div className="chat-room-list">
                <form>
                <label>Enter room name:
                <input type='text'value={room}
          onChange={(e) => {
            console.log(e.target.value)
            setRoom(e.target.value)
            console.log(room);}} 
          ></input>
                </label>
                </form>
            <Link to={`/room/${room}`}>Submit</Link>
            </div>
        </>
    );
}

export { Landing };