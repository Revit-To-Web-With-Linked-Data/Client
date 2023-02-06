import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlowMovingDevice from './FlowMovingDevice';
import Table from 'react-bootstrap/Table';

const FlowMovingDeviceTable = (props) => {
    // Force credentials to every Axios request
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3500',
    });

    console.log(props);
    useEffect(() => {}, []);

    return (
        <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>ID</th>
                    <th>Flow rate</th>
                    <th>Head</th>
                </tr>
            </thead>
            <tbody>
                {props.flowMovingDevice.map((todo, idx) => (
                    <FlowMovingDevice key={idx} flowMovingDevices={todo} />
                ))}
            </tbody>
        </Table>
    );
};

export default FlowMovingDeviceTable;
