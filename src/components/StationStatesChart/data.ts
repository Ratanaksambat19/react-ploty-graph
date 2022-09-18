import { Data } from "plotly.js";
import { sec2dt } from "../../util/msToDatetime";

var xValue = ['ST98'];

var yValue = [130000];
var yValue2 = [292000];
var yValue3 = [292000];
var yValue4 = [250000]
var yValue5 = [102000]

export const data: Data[] =
    [
        {
            x: xValue,
            y: yValue,
            name: 'Aborted',
            type: 'bar',
            text: yValue.map(sec2dt),
            textposition: 'outside',
            marker: {
                color: '#CC3333',
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            },
            hovertemplate:
                "<b>Aborted/b><br><br>" +
                "%{x}, %{y}<br><br>" +
                "%{text}" +
                "<extra></extra>"
        },
        {
            x: xValue,
            y: yValue2,
            name: 'Held',
            type: 'bar',
            text: yValue2.map(sec2dt),
            textposition: 'outside',
            marker: {
                color: '#FFBB38',
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            },
            hovertemplate:
                "<b>Held</b><br><br>" +
                "%{x}, %{y}<br><br>" +
                "%{text}" +
                "<extra></extra>"
        },
        {
            x: xValue,
            y: yValue3,
            name: 'Idle',
            type: 'bar',
            text: yValue3.map(sec2dt),
            textposition: 'outside',
            marker: {
                color: '#DEE5E5',
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            },
            hovertemplate:
                "<b>Idle</b><br><br>" +
                "%{x}, %{y}<br><br>" +
                "%{text}" +
                "<extra></extra>"
        },
        {
            x: xValue,
            y: yValue4,
            name: 'Stopped',
            type: 'bar',
            text: yValue4.map(sec2dt),
            textposition: 'outside',
            marker: {
                color: '#FF4040',
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            },
            hovertemplate:
                "<b>Stopped</b><br><br>" +
                "%{x}, %{y}<br><br>" +
                "%{text}" +
                "<extra></extra>"
        },
        {
            x: xValue,
            y: yValue5,
            name: 'Suspensed',
            type: 'bar',
            text: yValue5.map(sec2dt),
            textposition: 'outside',
            marker: {
                color: '#FF8C8C',
                line: {
                    color: 'rgb(8,48,107)',
                    width: 1.5
                }
            },
            hovertemplate:
                "<b>Suspensed</b><br><br>" +
                "%{x}, %{y}<br><br>" +
                "%{text}" +
                "<extra></extra>"
        },

    ]
