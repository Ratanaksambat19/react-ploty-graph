
import Plot from 'react-plotly.js'
import { data } from './data'

export const WPHChart = () => {




    return (
        <Plot
            data={data}
            layout={{
                width: 1000, height: 800, title: 'Rejected By WPH Per Nest',
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
                // hovermode: 'x unified',
                // annotations: [
                //     {
                //         x: 13.0,
                //         y: 625,
                //         textangle: '90',
                //         showarrow: false
                //     }
                // ]
            }}
        />)
}