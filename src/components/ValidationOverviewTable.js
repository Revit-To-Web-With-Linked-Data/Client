import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ValidationOverviewInstance from './ValidationOverviewInstance';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FlowMovingDeviceTable from './FlowMovingDeviceTable';
const ValidationTable = () => {
    const [validationReport, setValidationReport] = useState([]);
    const [buttonClickable, setbuttonClickable] = useState(true);
    const [flowMovingDevice, setFlowMovingDevice] = useState([]);

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
                console.log(JSON.stringify(response.data.result), "XXXXXXXX");
                setValidationReport(response.data.result);
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

    const hydraulicCalculation = () => {
        return instance
            .get('/hydraulicCalculation')
            .then((response) => {
                console.log(JSON.stringify(response.data),"YYYYYYYYYYY");
                setValidationReport(response.data.result);
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
        setValidationReport([
            { type: 'HeatExchanger', amount: 0 },
            { type: 'Transition', amount: 0 },
            { type: 'Tee', amount: 0 },
            { type: 'Elbow', amount: 0 },
            { type: 'Pipe', amount: 0 },
            { type: 'Duct', amount: 0 },
            { type: 'Pump', amount: 0 },
            { type: 'Fan', amount: 0 },
            { type: 'SpaceHeater', amount: 0 },
            { type: 'AirTerminal', amount: 0 },
            { type: 'Valve', amount: 0 },
            { type: 'Damper', amount: 0 },
            { type: 'Port', amount: 0 },
            { type: 'Flow', amount: 0 },
            { type: 'Property', amount: 0 },
            { type: 'System', amount: 0 },
            { type: 'Total', amount: 0 },
        ]);

        setbuttonClickable(false);
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
                            <ValidationOverviewInstance key={idx} validationReportItem={todo} />
                        ))}
                    </tbody>
                </Table>
                <div onClick={clearModel}>Clear model</div>
                <div onClick={clearViolations}>Solve all violations</div>
                <div onClick={hydraulicCalculation}>Perform hydraulicCalculation</div>
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
