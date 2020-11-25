import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import './App.css'
import { fetchData } from './api/index';

const App = () => {
    const [data, setData] = useState({})
    const dataHandle = async () => {
        const fetchedData = await fetchData();
        setData(fetchedData);
    }

    useEffect(() => {
        dataHandle()
    },[]);

    return (
        <div className="container">
            <Cards data={data}/>
            <CountryPicker />
            <Chart />
        </div>
    )
}

export default App