import React, { useState, useEffect } from 'react';
import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';

import './Chart.css'

const Chart = ({ data: { confirmed, recovered, deaths, lastUpdate }, dailyData }) => {

    if (!confirmed) {
        return "loading";
    }
    const PieChartConfig = {
        labels: ['Confirmed', 'Recoverd', 'Deaths'],
        datasets: [
            {
                label: 'Rainfall',
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
    const multiplier = parseInt((dailyData.length) / 20 )
    console.log(multiplier)
    console.log(dailyData.length)
    summaryValue.push(dailyData[0])
    for (let i = 1; i < 20; i++) {
        summaryValue.push(dailyData[i*multiplier])
    }
    summaryValue.push(dailyData[dailyData.length-1])
    console.log(summaryValue)



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
                    borderColor: 'black',
                    backgroundColor: '',
                    borderWidth: 2,
                    fill: false,
                }
                ],
            }}
        />) : null
    );


    return (
        <div className="container">
            <div>
                <Pie
                    data={PieChartConfig}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />

                <Doughnut
                    data={PieChartConfig}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
            {lineChart}
        </div>
    )

}

export default Chart;