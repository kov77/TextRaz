import React from 'react';
import './App.css';
import {FileInput} from '../components/FileInput/FileInput';
import {Charts} from "../components/Сharts/Charts";

function App() {
    return (
        <div className="App">
            <FileInput/>
            <Charts/>
        </div>
    );
}

export default App;
