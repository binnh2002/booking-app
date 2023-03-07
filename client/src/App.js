import {BrowserRouter, Switch, Route, Link, Router, Routes} from 'react-router-dom';

import React from 'react';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/hotel" element={<Hotel/>}/>
                <Route path="/list" element={<List/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
