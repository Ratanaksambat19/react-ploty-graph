import { Data, Gauge } from 'plotly.js'
import Plot from 'react-plotly.js'

export const GaugeChart = ({ data }: {data: Data[]}) => {

   return (
        <Plot
            data={data}
            layout={{
            }}
            config={{
              responsive: true,
            }}
        />
    )   

}
