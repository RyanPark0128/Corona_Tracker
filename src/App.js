import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import './App.css'
import { fetchData } from './api/index';
import { fetchDailyData } from './api/index';

const App = () => {
    const [data, setData] = useState({});
    const [currentCountry, setCurrentCountry] = useState('');
    const [dailyData, setDailyData] = useState([])

    const handleCountry = async (selectedCountry) => {
        setCurrentCountry(currentCountry)
        const fetchedData = await fetchData(selectedCountry);
        setData(fetchedData)
    }

    useEffect(() => {
        handleCountry();
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    return (
        <div className="container">
            <p>Coronavirus (COVID-19) Dashboard</p>
            <CountryPicker handleCountry={handleCountry} />
            <Cards data={data} />
            <Chart data={data} country={currentCountry} dailyData={dailyData} />
        </div>
    )
}

export default App