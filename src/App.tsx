import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WhiskyList from './pages/WhiskyList';
import WhiskyDetail from './pages/WhiskyDetail';

function App(): React.JSX.Element {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WhiskyList />} />
                    <Route path="/whisky/:id" element={<WhiskyDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
