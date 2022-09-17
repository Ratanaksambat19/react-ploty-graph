import { Data } from 'plotly.js';
import React from 'react'
import Plot from 'react-plotly.js'

export const WPHChart = () => {

    var xValue = [13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0];

    var yValue = [625, 680, 680, 650, 550, 750, 600, 650];
    var yValue2 = [700, 614, 650, 580, 500, 520, 600, 650];
    var yValue3 = [400, 500, 600, 700, 740, 600, 500, 400];
    var yValue4 = [532, 490, 620, 650, 600, 500, 400, 300];

    var trace1: Data = {
        x: xValue,
        y: yValue,
        type: 'bar',
        text: yValue.map(String),
        textposition: 'outside',
        hoverinfo: 'none',
        opacity: 0.5,
        marker: {
            color: '#6E5676',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    var trace2: Data = {
        x: xValue,
        y: yValue2,
        type: 'bar',
        text: yValue2.map(String),
        textposition: 'outside',
        hoverinfo: 'none',
        marker: {
            color: '#FFE2AA',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    var trace3: Data = {
        x: xValue,
        y: yValue3,
        type: 'bar',
        text: yValue3.map(String),
        textposition: 'outside',
        hoverinfo: 'none',
        marker: {
            color: '#657880',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };


    var trace4: Data = {
        x: xValue,
        y: yValue4,
        type: 'bar',
        text: yValue4.map(String),
        textposition: 'outside',
        hoverinfo: 'none',
        marker: {
            color: '#DEE5E5',
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };


    return (
        <Plot
            data={[
                trace1, trace2, trace3, trace4
            ]}
            layout={{
                width: 1000, height: 800, title: 'Rejected By WPH Per Nest',
                xaxis: {
                    tickformat: '.1f',
                },
                yaxis: {

                },
                // annotations: [
                //     {
                //         x: 13.0,
                //         y: 625,
                //         textangle: '90',
                //         showarrow: false
                //     }
                // ]
            }}
        />)
}