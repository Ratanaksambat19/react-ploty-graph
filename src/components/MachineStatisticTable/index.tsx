import { Data } from 'plotly.js'
import React from 'react'
import Plot from 'react-plotly.js'


export const MachineStatisticTable = () => {
    var values = [
        ['Salaries', 'Office', 'Merchandise', 'Legal', '<b>TOTAL</b>'],
        [1200000, 20000, 80000, 2000, 12120000],
        [1300000, 20000, 70000, 2000, 130902000],
        [1300000, 20000, 120000, 2000, 131222000],
        [1400000, 20000, 90000, 2000, 14102000]]

    var headerColor = "grey";
    var rowEvenColor = "lightgrey";
    var rowOddColor = "white";

    var data = [{
        type: 'table',
        header: {
            values: [["<b>EXPENSES</b>"], ["<b>Q1</b>"],
            ["<b>Q2</b>"], ["<b>Q3</b>"], ["<b>Q4</b>"]],
            align: "center",
            line: { width: 1, color: 'black' },
            fill: { color: headerColor },
            font: { family: "Arial", size: 12, color: "white" }
        },
        cells: {
            values: values,
            align: "center",
            line: { color: "black", width: 1 },
            fill: {
                color: [[rowOddColor, rowEvenColor, rowOddColor,
                    rowEvenColor, rowOddColor]]
            },
            font: { family: "Arial", size: 11, color: ["black"] }
        }
    }]

    return (
        <Plot
            data={data as Data[]}
            layout={{ width: 1000, height: 800, title: 'Table' }} />
    )
}
