import React from 'react'
import Plot from 'react-plotly.js';
import { Data } from 'plotly.js';

export const PartsOutTotal = ({ data }: {data: Data[]}) => {
    return (
        <Plot
            data={data}
            layout={{
              title: 'Part Out - Total',
              xaxis: {
                    rangemode: 'nonnegative',
                }
            }}
          config={{
            responsive: true,
          }}
        />
    )
}
