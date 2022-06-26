import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ValidationOverviewInstance from './ValidationOverviewInstance';
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
            .get('/validationOverviewGraph')
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setValidationReport(response.data.result);
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
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {validationReport.map((todo, idx) => (
                    <ValidationOverviewInstance key={idx} validationReportItem={todo} />
                ))}
            </tbody>
        </Table>
    );
};

export default ValidationTable;
