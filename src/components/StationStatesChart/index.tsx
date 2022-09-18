import { Data } from 'plotly.js'
import React from 'react'
import Plot from 'react-plotly.js'
import { data } from './data'

export const StaionStatesChart = () => {
    // data input could raw date object
    // durations in seconds

    //plotly accept date object ex: `2017-01-01 ${h}:${pad(m)}:${pad(s)}`

    // console.log(moment(434000002).format('yyyy:mm:dd HH:mm:ss'));
    // function timeStringToFloat(time: string) {
    //     var hoursMinutes = time.split(/[.:]/);
    //     var hours = parseInt(hoursMinutes[0], 10);
    //     var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    //     return hours + minutes / 60;
    // }


    // console.log(sec2dt(yValue[0]));
    // console.log(timeStringToFloat(yValue2[0]));

    return (
        <Plot
            data={data}
            layout={{
                width: 1000, height: 800, title: 'Station States',
                hoverlabel: {
                    align: 'auto',
                },
                yaxis: {
                    // tickmode: "linear",
                    tickformat: '%H:%M:%S',
                    // tick0: 0,
                    // dtick: 8640000, // milliseconds
                    // fixedrange: true,
                    // zeroline: false,
                    // showgrid: false,
                    // automargin: true,
                    // title: 'Time hi (hh:mm)'
                },
            }}
        />)
}

// convert ms to hh:mm:ss plotly js
// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss