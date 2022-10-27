import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ValidationInstance from '../ValidationInstance';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const PipeTable = () => {
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
            .get('/hydraulicValidation')
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setValidationReport(response.data.shaclObject.Pipe);
            })
            .catch((err) => {
                return err.response;
            });
    };

    return (
        <div>
            <div>
                <a href='/validationOverviewTable'>Return Home</a>
            </div>
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
        </div>
    );
};

export default PipeTable;
