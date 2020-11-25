import React from 'react';
import "./Cards.css"
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading';
    }
    return (
        <div className="card-container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={"card infected"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h6">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of confirmed cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={"card recovered"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h6">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={"card death"}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h6">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;