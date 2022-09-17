import React from 'react'
import Plot from 'react-plotly.js'
import moment from 'moment';

export const StaionStatesChart = () => {
    // data input could raw date object
    // durations in seconds

    //plotly accept date object ex: `2017-01-01 ${h}:${pad(m)}:${pad(s)}`
    var xValue = ['ST98'];

    var yValue = [130000];
    var yValue2 = [292000];
    var yValue3 = [225000];
    console.log(moment(434000002).format('yyyy:mm:dd HH:mm:ss'));
    // function timeStringToFloat(time: string) {
    //     var hoursMinutes = time.split(/[.:]/);
    //     var hours = parseInt(hoursMinutes[0], 10);
    //     var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    //     return hours + minutes / 60;
    // }

    function sec2dt(v: number) {
        var MIN = 60
        var HOUR = 60 * 60

        var h = Math.floor(v / HOUR)
        var m = Math.floor((v - (h * HOUR)) / MIN)
        var s = Math.floor(v - (h * HOUR) - (m * MIN))

        // you have to provide YYYY-MM-DD
        // for plotly to understand it as a date
        return `${h}:${pad(m)}:${pad(s)}`
    }

    function pad(v: number) {
        return v < 10 ? '0' + v : String(v)
    }
    console.log(sec2dt(yValue[0]));
    // console.log(timeStringToFloat(yValue2[0]));

    return (
        <Plot
            data={[
                {
                    x: xValue,
                    y: yValue,
                    type: 'bar',
                    text: yValue.map(sec2dt),
                    textposition: 'outside',
                    hoverinfo: 'none',
                    opacity: 0.5,
                    marker: {
                        color: 'rgb(158,202,225)',
                        line: {
                            color: 'rgb(8,48,107)',
                            width: 1.5
                        }
                    }
                },
                {
                    x: xValue,
                    y: yValue2,
                    type: 'bar',
                    text: yValue2.map(sec2dt),
                    textposition: 'outside',
                    hoverinfo: 'none',
                    marker: {
                        color: 'rgba(58,200,225,.5)',
                        line: {
                            color: 'rgb(8,48,107)',
                            width: 1.5
                        }
                    }
                },
                {
                    x: xValue,
                    y: yValue3,
                    type: 'bar',
                    text: yValue3.map(sec2dt),
                    textposition: 'outside',
                    hoverinfo: 'none',
                    marker: {
                        color: 'rgba(58,100,225,.5)',
                        line: {
                            color: 'rgb(8,48,107)',
                            width: 1.5
                        }
                    }
                }
            ]}
            layout={{
                width: 1000, height: 800, title: 'A Fancy Plot',
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