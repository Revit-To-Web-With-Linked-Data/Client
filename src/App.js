//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlowMovingDeviceTable from './components/FlowMovingDeviceTable';
import HeatExchangerTable from './components/HeatExchangerTable';
import TransitionTable from './components/TransitionTable';
import ElbowTable from './components/ElbowTable';
import PipeTable from './components/PipeTable';
import DuctTable from './components/DuctTable';
import PumpTable from './components/PumpTable';
import FanTable from './components/FanTable';
import SpaceHeaterTable from './components/SpaceHeaterTable';
import AirTerminalTable from './components/AirTerminalTable';
import ValveTable from './components/ValveTable';
import DamperTable from './components/DamperTable';
import PortTable from './components/PortTable';
import FlowTable from './components/FlowTable';
import PropertyTable from './components/PropertyTable';
import SystemTable from './components/SystemTable';
import TotalTable from './components/TotalTable';
import ValidationOverviewTable from './components/ValidationOverviewTable';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/HeatExchanger' element={<HeatExchangerTable />} />
                    <Route path='/Transition' element={<TransitionTable />} />
                    <Route path='/Elbow' element={<ElbowTable />} />
                    <Route path='/Pipe' element={<PipeTable />} />
                    <Route path='/Duct' element={<DuctTable />} />
                    <Route path='/Pump' element={<PumpTable />} />
                    <Route path='/Fan' element={<FanTable />} />
                    <Route path='/SpaceHeater' element={<SpaceHeaterTable />} />
                    <Route path='/AirTerminal' element={<AirTerminalTable />} />
                    <Route path='/Valve' element={<ValveTable />} />
                    <Route path='/Damper' element={<DamperTable />} />
                    <Route path='/Port' element={<PortTable />} />
                    <Route path='/Flow' element={<FlowTable />} />
                    <Route path='/Property' element={<PropertyTable />} />
                    <Route path='/System' element={<SystemTable />} />
                    <Route path='/Total' element={<TotalTable />} />

                    <Route path='/validationOverviewTable' element={<ValidationOverviewTable />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
