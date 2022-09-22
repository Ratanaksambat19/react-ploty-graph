
import { Data } from 'plotly.js'
import React from 'react'
import Plot from 'react-plotly.js'

export const WPHChart = ({ data }: {data: Data[] }) => {
    return (
        <Plot
          data={data}
          layout={{
            title: 'Rejected By WPH Per Nest',
            xaxis: {
              tickformat: '.1f',
            },
            yaxis: {

            },
            hovermode: 'closest',
            hoverlabel: {
              bgcolor: 'white',
              font: {
                color: 'black'
              }
            },
          }}
          config={{
            responsive: true,
          }}
      />
    )
}
