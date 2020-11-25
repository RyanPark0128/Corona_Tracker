import React from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import './App.css'


const App = () => {

    return (
        <div className="container">
            <Cards />
            <CountryPicker />
            <Chart />
        </div>
    )
}

export default App