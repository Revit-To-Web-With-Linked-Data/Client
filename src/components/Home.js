import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from './Room';

const Home = () => {
    const [name, setName] = useState('Peter');
    const [room, setRoom] = useState([]);

    // Force credentials to every Axios request
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3500',
    });

    useEffect(() => {
        getAllRooms();
        // setName(newName)
    }, []);

    const getAllRooms = () => {
        return instance
            .get('/')
            .then((response) => {
                console.log(JSON.stringify(response.data));
                const rooms = [];
                for (let room in response.data['@graph']) {
                    rooms.push(response.data['@graph'][room]['@id']);
                }
                setRoom(rooms);

                // setName("Mamooooo")
            })
            .catch((err) => {
                return err.response.data;
            });
    };
    // const naming = () => {

    // };
    return (
        <div>
            <thead>
                <tr>
                    <th>List of rooms</th>
                </tr>
            </thead>
            <tbody>
                {room.map((todo, idx) => (
                    <Room key={idx} rooms={todo} />
                ))}
            </tbody>
        </div>
    );
};

export default Home;
