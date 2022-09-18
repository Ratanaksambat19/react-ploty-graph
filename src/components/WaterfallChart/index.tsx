import { Annotations, Data, Layout } from 'plotly.js';
import React from 'react'
import Plot from 'react-plotly.js'
import { data, xData, yData, textList } from './data';

export const WaterfallChart = () => {


    var layout = {
        title: 'Waterfall',
        barmode: 'stack',
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        width: 1000,
        height: 800,
        hovermode: 'closest',
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
