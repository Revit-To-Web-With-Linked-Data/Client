import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlowMovingDevice from './FlowMovingDevice';
import Table from 'react-bootstrap/Table';

const FlowMovingDeviceTable = () => {
    const [flowMovingDevice, setFlowMovingDevice] = useState([]);
    // Force credentials to every Axios request
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3500',
    });

    useEffect(() => {
        getAllFlowMovingDevices();
    }, []);

    const getAllFlowMovingDevices = () => {
        return instance
            .get('/flowHeadTable')
            .then((response) => {
                setFlowMovingDevice(response.data);
            })
            .catch((err) => {
                return err.response;
            });
    };


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>ID</th>
                    <th>Flow rate</th>
                    <th>Head</th>
                </tr>
            </thead>
            <tbody>
                {flowMovingDevice.map((todo, idx) => (
                    <FlowMovingDevice key={idx} flowMovingDevices={todo} />
                ))}
            </tbody>
        </Table>
    );
};

export default FlowMovingDeviceTable;
