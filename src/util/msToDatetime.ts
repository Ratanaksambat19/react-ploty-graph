export function sec2dt(v: number) {
    var MIN = 60
    var HOUR = 60 * 60

    var h = Math.floor(v / HOUR)
    var m = Math.floor((v - (h * HOUR)) / MIN)
    var s = Math.floor(v - (h * HOUR) - (m * MIN))

    // you have to provide YYYY-MM-DD
    // for plotly to understand it as a date
    return `${h}:${pad(m)}:${pad(s)}`
}

function pad(v: number) {
    return v < 10 ? '0' + v : String(v)
}