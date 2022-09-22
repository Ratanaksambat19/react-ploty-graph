import { Data } from 'plotly.js'
import React from 'react'
import Plot from 'react-plotly.js'


export const MachineStatisticTable = ({ data }: { data: Data[] } ) => {

  return (
        <Plot
            data={data}
            layout={{ title: 'Machine Statistics' }}
            config={{
                    responsive: true,
                  }}
    />
    )
}
