import React from 'react'
import Plot from 'react-plotly.js';

export const PartsOutChart = () => {

    return (
        <Plot
            data={[

                {
                    type: 'bar',
                    x: [1000000000, 2000000000],
                    y: ['Bad', 'Good'],
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
