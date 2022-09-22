import { Data } from 'plotly.js'
import Plot from 'react-plotly.js'

export const MachineStateChart = ({ data }: {data: Data[]}) => {

   return (
        <Plot
            data={data}
            layout={{ title: 'Machine State - Chronology', yaxis: { tickformat: '.0%' }, hovermode: 'x unified', }}
            config={{
              responsive: true,
            }}
        />
    )   

}
