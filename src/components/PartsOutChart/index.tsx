import React from 'react'
import Plot from 'react-plotly.js';

export const PartsOutChart = () => {

    const yvalue = ['Bad', 'Good']
    const xvalue = [1000000000, 2000000000]
    return (
        <Plot
            data={[

                {
                    type: 'bar',
                    x: xvalue,
                    y: yvalue,
                    text: xvalue.map(String),
                    textposition: 'outside',
                    orientation: 'h',
                    marker: {
                        color: ['red', 'green'],
                    },
                },
            ]}
            layout={{ width: 1000, height: 300, title: 'A Fancy Plot' }}
        />
    )
}
