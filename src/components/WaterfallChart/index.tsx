import { Annotations, Data, Layout } from 'plotly.js';
import React from 'react'
import Plot from 'react-plotly.js'

export const WaterfallChart = () => {
    var xData = ['Total time', 'Scheduled<br>Unmanned time', 'Duration', 'Manned time',
        'Test<br>validation', 'Maintainance<br>clearing', 'Production time', 'Input delay',
        'Line restrainsts', 'Changeover incl<br>setup', 'Operation time', '0.Availability loss',
        'Performance loss', 'Quality loss', 'Value<br>operating time']
    var yData = [400, 660, 660, 590, 400, 400, 340];

    var textList = ['$430K', '$260K', '$690K', '$-120K', '$-200K', '$-320K', '$370K'];

    //Base

    var trace1: Data = {
        x: xData,
        y: [0, 430, 0, 570, 370, 370, 0],
        textposition: 'outside',
        marker: {
            color: 'rgba(1,1,1,0.0)'
        },
        type: 'bar'
    };

    //Revenue

    var trace2: Data = {
        x: xData,
        y: [430, 260, 690, 0, 0, 0, 0],
        textposition: 'outside',
        type: 'bar',
        marker: {
            color: 'rgba(55,128,191,0.7)',
            line: {
                color: 'rgba(55,128,191,1.0)',
                width: 2
            }
        }
    };

    //Cost

    var trace3: Data = {
        x: xData,
        y: [0, 0, 0, 120, 200, 320, 0],
        textposition: 'outside',
        type: 'bar',
        marker: {
            color: 'rgba(219, 64, 82, 0.7)',
            line: {
                color: 'rgba(219, 64, 82, 1.0)',
                width: 2
            }
        }
    };

    //Profit

    var trace4: Data = {
        x: xData,
        y: [0, 0, 0, 0, 0, 0, 370],
        textposition: 'outside',
        type: 'bar',
        marker: {
            color: 'rgba(50,171, 96, 0.7)',
            line: {
                color: 'rgba(50,171,96,1.0)',
                width: 2
            }
        }
    };

    var trace5: Data = {
        x: xData,
        y: [0, 0, 333, 0, 322, 0, 370],
        textposition: 'outside',
        type: 'bar',
        marker: {
            color: 'rgba(50,171, 96, 0.7)',
            line: {
                color: 'rgba(50,171,96,1.0)',
                width: 2
            }
        }
    };

    var data = [trace1, trace2, trace3, trace4];

    var layout = {
        title: 'Waterfall',
        barmode: 'stack',
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        width: 1000,
        height: 800,
        showlegend: false,
        annotations: [] as Object[],
        yaxis: {
            rotation: 50
        }
    };

    for (var i = 0; i < 7; i++) {
        var result = {
            x: xData[i],
            y: yData[i],
            text: textList[i],
            textposition: 'outside',
            font: {
                family: 'Arial',
                size: 14,
                color: 'rgba(245,246,249,1)'
            },
            showarrow: false
        };
        layout.annotations.push(result);
    };

    return (
        <Plot
            data={data}
            layout={layout as Layout}
        />
    )
}
