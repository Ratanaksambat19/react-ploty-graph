import { Data } from 'plotly.js'
import React from 'react'
import Plot from 'react-plotly.js'

export const StaionStatesChart = ({ data }: {data: Data[] }) => {
    return (
        <Plot
            data={data}
            layout={{
                title: 'Station States',
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
        config = {{
          responsive: true,
        }}
      />
    )
}
