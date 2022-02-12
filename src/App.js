
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
const App=()=> {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    // setName({firstName: "John", lastName: "Peterson"});

    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
