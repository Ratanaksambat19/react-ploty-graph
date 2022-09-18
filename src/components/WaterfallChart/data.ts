import { Data } from "plotly.js";

export const xData = ['Total time', 'Scheduled<br>Unmanned time', 'Duration', 'Manned time',
    'Test<br>validation', 'Maintainance<br>clearing', 'Production time', 'Input delay',
    'Line restrainsts', 'Changeover incl<br>setup', 'Operation time', '0.Availability loss',
    'Performance loss', 'Quality loss', 'Value<br>operating time']
export const yData = [160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, 90000, 40000, 85000, 80000];

export const textList = ['100%', '100%', '100%', '0%', '0%', '0%', '100%', '0%', '0%', '0%', '100%', '29.3%', '12.6%', '0.2%', '57.8%'];


export const data: Data[] = [
    {
        x: xData,
        y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160000, 90000, 40000, 0],
        textposition: 'outside',
        marker: {
            color: 'rgba(1,1,1,0.0)'
        },
        type: 'bar'
    },
    {
        x: xData,
        y: [160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, 160000, -30000, -10000, -1000, 80000],
        textposition: 'outside',
        type: 'bar',
        marker: {
            color: 'rgba(55,128,191,0.7)',
            line: {
                color: 'rgba(55,128,191,1.0)',
                width: 2
            }
        }
    },
    // {
    //     x: xData,
    //     y: [0, 0, 0, 120, 200, 320, 0],
    //     textposition: 'outside',
    //     type: 'bar',
    //     marker: {
    //         color: 'rgba(219, 64, 82, 0.7)',
    //         line: {
    //             color: 'rgba(219, 64, 82, 1.0)',
    //             width: 2
    //         }
    //     }
    // },
    // {
    //     x: xData,
    //     y: [0, 0, 0, 0, 0, 0, 370],
    //     textposition: 'outside',
    //     type: 'bar',
    //     marker: {
    //         color: 'rgba(50,171, 96, 0.7)',
    //         line: {
    //             color: 'rgba(50,171,96,1.0)',
    //             width: 2
    //         }
    //     }
    // },
    // {
    //     x: xData,
    //     y: [0, 0, 333, 0, 322, 0, 370],
    //     textposition: 'outside',
    //     type: 'bar',
    //     marker: {
    //         color: 'rgba(50,171, 96, 0.7)',
    //         line: {
    //             color: 'rgba(50,171,96,1.0)',
    //             width: 2
    //         }
    //     }
    // }
]