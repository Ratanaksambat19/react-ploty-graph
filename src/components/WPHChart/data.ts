import { Data } from "plotly.js";

var xValue = [13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0];

var yValue = [625, 680, 680, 650, 550, 750, 600, 650];
var yValue2 = [700, 614, 650, 580, 500, 520, 600, 650];
var yValue3 = [400, 500, 600, 700, 740, 600, 500, 400];
var yValue4 = [532, 490, 620, 650, 600, 500, 400, 300];

var trace1: Data = {
    x: xValue,
    y: yValue,
    name: 'Nest 1',
    type: 'bar',
    text: yValue.map(String),
    textposition: 'outside',
    marker: {
        color: '#6E5676',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    },
    hovertemplate:
        "<b>Nest 1</b><br><br>" +
        "%{y}, %{x}" +
        "<extra></extra>"
};

var trace2: Data = {
    x: xValue,
    y: yValue2,
    name: 'Nest 2',
    type: 'bar',
    text: yValue2.map(String),
    textposition: 'outside',
    marker: {
        color: '#FFE2AA',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    },
    hovertemplate:
        "<b>Nest 2</b><br><br>" +
        "%{y}, %{x}" +
        "<extra></extra>"
};

var trace3: Data = {
    x: xValue,
    y: yValue3,
    name: 'Nest 3',
    type: 'bar',
    text: yValue3.map(String),
    textposition: 'outside',
    marker: {
        color: '#657880',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    },
    hovertemplate:
        "<b>Nest 3</b><br><br>" +
        "%{y}, %{x}" +
        "<extra></extra>"
};


var trace4: Data = {
    x: xValue,
    y: yValue4,
    name: 'Nest 4',
    type: 'bar',
    text: yValue4.map(String),
    textposition: 'outside',
    marker: {
        color: '#DEE5E5',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    },
    hovertemplate:
        "<b>Nest 4</b><br><br>" +
        "%{y}, %{x}" +
        "<extra></extra>"
};

export const data = [
    trace1, trace2, trace3, trace4
]