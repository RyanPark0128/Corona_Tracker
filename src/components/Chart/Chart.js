import React from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';

import './Chart.css'

const Chart = ({ data: { confirmed, recovered, deaths, lastUpdate }, dailyData }) => {

    if (!confirmed) {
        return "loading";
    }
    const PieChartConfig = {
        labels: ['Confirmed', 'Recoverd', 'Deaths'],
        datasets: [
            {
                label: 'Covid-19',
                backgroundColor: [
                    'rgba(255,0,0, 0.5)',
                    'rgba(0,255,0, 0.5)',
                    'rgba(0,0,255, 0.5)',
                ],
                hoverBackgroundColor: [
                    'rgba(255,0,0, 0.5)',
                    'rgba(0,255,0, 0.5)',
                    'rgba(0,0,255, 0.5)',
                ],
                data: [confirmed.value, recovered.value, deaths.value]
            }
        ]
    }
    const summaryValue = []
    const multiplier = parseInt((dailyData.length) / 20)
    summaryValue.push(dailyData[0])
    for (let i = 1; i < 20; i++) {
        summaryValue.push(dailyData[i * multiplier])
    }
    summaryValue.push(dailyData[dailyData.length - 1])


    const lineChart = (
        summaryValue[0] ? (
            <Line
                data={{
                    labels: summaryValue.map(({ date }) => date),
                    datasets: [{
                        data: summaryValue.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(255,0,0, 0.5);',
                        borderColor: 'rgba(255,0,0, 0.5)',
                        color: 'rgba(255,0,0, 0.5)',
                        borderWidth: 2,
                    },
                    {
                        data: summaryValue.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        lineTension: 0.5,
                        borderColor: 'rgba(0,0,255, 0.5)',
                        backgroundColor: '',
                        borderWidth: 2,
                        fill: false,
                    }
                    ],
                }}
            />) : null
    );


    return (
        <div className="chart-container">
            <div className="pie">
                <Pie
                    data={PieChartConfig}
                    options={{
                        title: {
                            display: false,
                            text: '',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
            <div className="bar">
                <Bar
                    data={PieChartConfig}
                    options={{
                        title: {
                            display: false,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: false,
                            position: 'right'
                        }
                    }}
                />
            </div>
            <div className="lineChart">
                <p>Global Confirmed and Deaths Cases Vs Dates</p>
                {lineChart}
            </div>
        </div>
    )

}

export default Chart;