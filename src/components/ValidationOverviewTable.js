import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ValidationOverviewInstance1 from './firstValidation/ValidationOverviewInstance';
import ValidationOverviewInstance2 from './secondValidation/ValidationOverviewInstance';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FlowMovingDeviceTable from './FlowMovingDeviceTable';
const ValidationTable = () => {
    const [validationReport, setValidationReport] = useState([]);
    const [hydraulicReport, setHydraulicReport] = useState([]);
    const [buttonClickable, setbuttonClickable] = useState(true);
    const [hydraulicClickable, sethydraulicClickable] = useState(true);
    const [flowMovingDevice, setFlowMovingDevice] = useState([]);

    // Force credentials to every Axios request
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3500',
    });

    useEffect(() => {
        // getValidationReport();
    }, []);

    const getValidationReport = () => {
        return instance
            .get('/validationOverviewGraph')
            .then((response) => {
                console.log(JSON.stringify(response.data.result), 'YYYYYYYYYYYY');
                setValidationReport(response.data.result);
                console.log(response.data.result[response.data.result.length - 1].amount);
                if (response.data.result[response.data.result.length - 1].amount == 0) {
                    sethydraulicClickable(false);
                }
                if (response.data.result[response.data.result.length - 1].amount > 0) {
                    sethydraulicClickable(true);
                }
            })
            .catch((err) => {   
                return err.response;
            });
    };

    const hydraulicCalculation = () => {
        return instance
            .get('/hydraulicCalculation')
            .then((response) => {
                console.log(JSON.stringify(response.data.result), 'YYYYYYYYYYY');
                setHydraulicReport(response.data.result);
                console.log(response.data.result[response.data.result.length - 1].amount);
                if (response.data.result[response.data.result.length - 1].amount == 0) {
                    setbuttonClickable(false);
                }
                if (response.data.result[response.data.result.length - 1].amount > 0) {
                    setbuttonClickable(true);
                }
            })
            .catch((err) => {
                return err.response;
            });
    };

    const refreshPage = (e) => {
        getValidationReport();
    };

    const onRowClick = (row) => {
        console.log(`clicked on row with index: ${Object.values(row.currentTarget)}`);
    };

    const clearModel = () => {
        return instance
            .post('/clearGraph')
            .then((response) => {
                getValidationReport();
            })
            .catch((err) => {
                return err.response;
            });
    };

    const getAllFlowMovingDevices = () => {
        console.log('Hi');
        return instance
            .get('/flowHeadTable')
            .then((response) => {
                setFlowMovingDevice(response.data);
            })
            .catch((err) => {
                return err.response;
            });
    };

    const clearViolations = () => {
        return instance
            .post('/solveFirstValidation')
            .then((response) => {})
            .catch((err) => {
                return err.response;
            });
    };
    const clearViolationsSecondIteration = () => {
        return instance
            .post('/solveSecondValidation')
            .then((response) => {

            })
            .catch((err) => {
                return err.response;
            });
    };
    return (
        <div>
            <div
                style={{
                    paddingTop: '20px',
                    paddingLeft: '10px',
                    paddingBottom: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button variant='secondary' onClick={refreshPage}>
                    Validate
                </Button>
            </div>
            <div>
                <Table
                    striped
                    bordered
                    hover
                    width='200'
                    tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
                    size='sm'
                    onClick={onRowClick}
                >
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount [-]</th>
                        </tr>
                    </thead>
                    <tbody>
                        {validationReport.map((todo, idx) => (
                            <ValidationOverviewInstance1 key={idx} validationReportItem={todo} />
                        ))}
                    </tbody>
                </Table>
                <div onClick={clearModel}>Clear model</div>
                <div onClick={clearViolations}>Solve all violations</div>

                <div
                    style={{
                        paddingTop: '20px',
                        paddingLeft: '10px',
                        paddingBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button variant='secondary' onClick={hydraulicCalculation} disabled={hydraulicClickable}>
                        Hydraulic Calc
                    </Button>
                </div>

                <Table
                    striped
                    bordered
                    hover
                    width='200'
                    tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
                    size='sm'
                    onClick={onRowClick}
                >
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount [-]</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hydraulicReport.map((todo, idx) => (
                            <ValidationOverviewInstance2 key={idx} validationReportItem={todo} />
                        ))}
                    </tbody>
                </Table>
                <div onClick={clearViolationsSecondIteration}>Solve all violations</div>
            </div>

            <div>
                <div
                    style={{
                        paddingTop: '20px',
                        paddingLeft: '10px',
                        paddingBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button variant='secondary' onClick={getAllFlowMovingDevices} disabled={buttonClickable}>
                        Design
                    </Button>
                </div>

                <div>
                    <FlowMovingDeviceTable flowMovingDevice={flowMovingDevice} />
                </div>
            </div>
        </div>
    );
};

export default ValidationTable;
