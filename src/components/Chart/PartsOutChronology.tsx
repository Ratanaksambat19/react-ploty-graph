import { Data } from 'plotly.js';
import React from 'react';
import Plot from 'react-plotly.js';

export const PartsOutChronology = ({ data }: {data:Data[]}) => {
     return (
      <Plot
        data={data}
        layout={{
          title: 'Parts Out - Chronology',
          yaxis: { tickprefix: '$' },
          hovermode: 'x unified',
        }}
        config={{
          responsive: true,
        }}
      />
  );
 

}
