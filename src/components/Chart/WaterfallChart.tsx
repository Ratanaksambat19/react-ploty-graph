import { Data } from 'plotly.js';
import React from 'react'
import Plot from 'react-plotly.js'

export const WaterfallChart = ({ data }: {data: Data[] }) => {
    return (
        <Plot
            data={data}
            layout={{
              title: 'Waterfall',
              barmode: 'stack',
              paper_bgcolor: 'rgba(245,246,249,1)',
              plot_bgcolor: 'rgba(245,246,249,1)',
              width: 1000,
              height: 800,
              hovermode: 'closest',
              showlegend: false,
              yaxis: {
                rotation: 50
              }
            }}
        />
    )
}
