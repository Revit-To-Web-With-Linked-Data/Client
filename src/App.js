//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlowMovingDeviceTable from './components/FlowMovingDeviceTable';

import HeatExchangerTable1 from './components/firstValidation/HeatExchangerTable';
import HeatExchangerTable2 from './components/secondValidation/HeatExchangerTable';

import TransitionTable1 from './components/firstValidation/TransitionTable';
import TransitionTable2 from './components/secondValidation/TransitionTable';

import ElbowTable1 from './components/firstValidation/ElbowTable';
import ElbowTable2 from './components/secondValidation/ElbowTable';

import PipeTable1 from './components/firstValidation/PipeTable';
import PipeTable2 from './components/secondValidation/PipeTable';

import DuctTable1 from './components/firstValidation/DuctTable';
import DuctTable2 from './components/secondValidation/DuctTable';

import PumpTable1 from './components/firstValidation/PumpTable';
import PumpTable2 from './components/secondValidation/PumpTable';

import FanTable1 from './components/firstValidation/FanTable';
import FanTable2 from './components/secondValidation/FanTable';

import SpaceHeaterTable1 from './components/firstValidation/SpaceHeaterTable';
import SpaceHeaterTable2 from './components/secondValidation/SpaceHeaterTable';

import AirTerminalTable1 from './components/firstValidation/AirTerminalTable';
import AirTerminalTable2 from './components/secondValidation/AirTerminalTable';

import ValveTable1 from './components/firstValidation/ValveTable';
import ValveTable2 from './components/secondValidation/ValveTable';

import DamperTable1 from './components/firstValidation/DamperTable';
import DamperTable2 from './components/secondValidation/DamperTable';

import PortTable1 from './components/firstValidation/PortTable';
import PortTable2 from './components/secondValidation/PortTable';

import FlowTable1 from './components/firstValidation/FlowTable';
import FlowTable2 from './components/secondValidation/FlowTable';

import PropertyTable1 from './components/firstValidation/PropertyTable';
import PropertyTable2 from './components/secondValidation/PropertyTable';

import SystemTable1 from './components/firstValidation/SystemTable';
import SystemTable2 from './components/secondValidation/SystemTable';

import TotalTable1 from './components/firstValidation/TotalTable';
import TotalTable2 from './components/secondValidation/TotalTable';

import ValidationOverviewTable from './components/ValidationOverviewTable';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/HeatExchanger1' element={<HeatExchangerTable1 />} />
                    <Route path='/HeatExchanger2' element={<HeatExchangerTable2 />} />

                    <Route path='/Transition1' element={<TransitionTable1 />} />
                    <Route path='/Transition2' element={<TransitionTable2 />} />

                    <Route path='/Elbow1' element={<ElbowTable1 />} />
                    <Route path='/Elbow2' element={<ElbowTable2 />} />

                    <Route path='/Pipe1' element={<PipeTable1 />} />
                    <Route path='/Pipe2' element={<PipeTable2 />} />

                    <Route path='/Duct1' element={<DuctTable1 />} />
                    <Route path='/Duct2' element={<DuctTable2 />} />

                    <Route path='/Pump1' element={<PumpTable1 />} />
                    <Route path='/Pump2' element={<PumpTable2 />} />

                    <Route path='/Fan1' element={<FanTable1 />} />
                    <Route path='/Fan2' element={<FanTable2 />} />

                    <Route path='/SpaceHeater1' element={<SpaceHeaterTable1 />} />
                    <Route path='/SpaceHeater2' element={<SpaceHeaterTable2 />} />

                    <Route path='/AirTerminal1' element={<AirTerminalTable1 />} />
                    <Route path='/AirTerminal2' element={<AirTerminalTable2 />} />

                    <Route path='/Valve1' element={<ValveTable1 />} />
                    <Route path='/Valve2' element={<ValveTable2 />} />

                    <Route path='/Damper1' element={<DamperTable1 />} />
                    <Route path='/Damper2' element={<DamperTable2 />} />

                    <Route path='/Port1' element={<PortTable1 />} />
                    <Route path='/Port2' element={<PortTable2 />} />

                    <Route path='/Flow1' element={<FlowTable1 />} />
                    <Route path='/Flow2' element={<FlowTable2 />} />

                    <Route path='/Property1' element={<PropertyTable1 />} />
                    <Route path='/Property2' element={<PropertyTable2 />} />

                    <Route path='/System1' element={<SystemTable1 />} />
                    <Route path='/System2' element={<SystemTable2 />} />

                    <Route path='/Total1' element={<TotalTable1 />} />
                    <Route path='/Total2' element={<TotalTable2 />} />

                    <Route path='/validationOverviewTable' element={<ValidationOverviewTable />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
