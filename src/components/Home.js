import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [name, setName] = useState('Peter');

    // Force credentials to every Axios request
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3500',
    });

    useEffect(() => {
        getAllProjectsByUser();
        // setName(newName)
    }, []);

    const getAllProjectsByUser = () => {
        return instance
            .get('/')
            .then((response) => {
            console.log(JSON.stringify(response.data));

                setName("Balo");
                // setName("Mamooooo")
            })
            .catch((err) => {
                return err.response.data;
            });
    };
    // const naming = () => {

    // };
    return <div className='Home-div'>{name} </div>;
};

export default Home;
