import React from 'react'
import Plot from 'react-plotly.js'

export const MachineStateChart = () => {

    return (
        <Plot
            data={[
                {
                    x: ['2013-10-04 10:50:00', '2013-10-04 11:00:00', '2013-10-04 11:10:00', '2013-10-04 11:20:00', '2013-10-04 11:30:00', '2013-10-24 11:40:00', '2013-10-04 12:23:00'],
                    y: [1, 1, 1, 1],
                    name: 'No alarm',
                    fill: 'tonexty',
                    type: 'scatter'
                },
                {
                    x: ['2013-10-04 10:50:00', '2013-10-04 11:00:00', '2013-10-04 11:10:00', '2013-10-04 11:20:00', '2013-10-04 11:30:00', '2013-10-24 11:40:00', '2013-10-04 12:23:00'],
                    y: [0.60, 0.60, 0.40, 0.30],
                    name: 'Wait',
                    fill: 'tonexty',
                    type: 'scatter'
                },
                {
                    x: ['2013-10-04 10:50:00', '2013-10-04 11:00:00', '2013-10-04 11:10:00', '2013-10-04 11:20:00', '2013-10-04 11:30:00', '2013-10-24 11:40:00', '2013-10-04 12:23:00'],
                    y: [0, 0, 0.30, 0],
                    name: 'Stopped',
                    fill: 'tozeroy',
                    type: 'scatter'
                },

            ]}
            layout={{ width: 1000, height: 800, title: 'Machine State - Chronology', yaxis: { tickformat: '.0%' }, hovermode: 'x unified', }}
        />
    )
}
