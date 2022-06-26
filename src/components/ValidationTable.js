import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ValidationInstance from './ValidationInstance';
import Table from 'react-bootstrap/Table';

const ValidationTable = () => {
    const [validationReport, setValidationReport] = useState([]);
    // Force credentials to every Axios request
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3500',
    });

    useEffect(() => {
        getValidationReport();
    }, []);

    const getValidationReport = () => {
        return instance
            .get('/validationGraph')
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setValidationReport(response.data.shaclObject)
                
            })
            .catch((err) => {
                return err.response;
            });
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Constrain type violation</th>
                    <th>Violation description</th>
                </tr>
            </thead>
            <tbody>
                {validationReport.map((todo, idx) => (
                    <ValidationInstance key={idx} validationReportItem={todo} />
                ))}
            </tbody>
        </Table>
    );
};

export default ValidationTable;
