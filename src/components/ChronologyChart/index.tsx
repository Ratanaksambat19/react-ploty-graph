import Plot from 'react-plotly.js';
import TChronologyChart from '../../types/interface/chronologyChart';

export const ChronologyChart = ({axisData}: {axisData: TChronologyChart[]}) => {


     return (
      <Plot
        data={axisData}
        layout={{
            width: 1000, height: 800,
            title: 'A Fancy Plot',
            yaxis: {  tickprefix: '$' }
        }}
      />
    );

}
