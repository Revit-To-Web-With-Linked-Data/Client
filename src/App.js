
//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlowMovingDeviceTable from './components/FlowMovingDeviceTable';
import ValidationTable from './components/ValidationTable';
import ValidationOverviewTable from './components/ValidationOverviewTable';

import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=> {
  

    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/flowMovingDeviceTable' element={<FlowMovingDeviceTable />} />
                    <Route path='/validationTable' element={<ValidationTable />} />
                    <Route path='/validationOverviewTable' element={<ValidationOverviewTable />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
