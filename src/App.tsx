import React from 'react';
import './App.css';
import { ChronologyChart } from './components/ChronologyChart';
import { MachineStateChart } from './components/MachineStateChart';
import { MachineStatisticTable } from './components/MachineStatisticTable';
import { PartsOutChart } from './components/PartsOutChart';
import { StaionStatesChart } from './components/StationStatesChart';
import { WaterfallChart } from './components/WaterfallChart';
import { WPHChart } from './components/WPHChart';

function App() {
  const [activeTab, setActiveTab] = React.useState('chronology');

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(event.target.value);
  }

  return (
    <div className="App">

      <div onChange={onRadioChange}>
        <input type="radio" id="chronology" name="fav_language" value="chronology" defaultChecked />
        <label htmlFor="chronology">
          Chronology
        </label>
        <input type="radio" id="partsout" name="fav_language" value="partsout" />
        <label htmlFor="partsout" >Partouts</label >
        <input type="radio" id="machineState" name="fav_language" value="machineState" />
        <label htmlFor="machineState" > Machine state</label >
        <input type="radio" id="stationState" name="fav_language" value="stationState" />
        <label htmlFor="stationState" >StaionStatesChart</label >
        <input type="radio" id="wph" name="fav_language" value="wph" />
        <label htmlFor="wph" >WPHChart</label >
        <input type="radio" id="waterfall" name="fav_language" value="waterfall" />
        <label htmlFor="waterfall" >WaterfallChart</label >
        <input type="radio" id="machineStateTable" name="fav_language" value="machineStateTable" />
        <label htmlFor="machineStateTable" >MachineStateChart</label >
      </div>
      <div id='chronology'>
        {
          activeTab === 'chronology' && <ChronologyChart />
        }
      </div>
      <div id='partsout'>
        {
          activeTab === 'partsout' && <PartsOutChart />
        }
      </div>
      <div id='machineState'>
        {
          activeTab === 'machineState' && <MachineStateChart />
        }
      </div>
      <div id='stationState'>
        {
          activeTab === 'stationState' && <StaionStatesChart />
        }
      </div>
      <div id='wph'>
        {
          activeTab === 'wph' && <WPHChart />
        }
      </div>
      <div id='waterfall'>
        {
          activeTab === 'waterfall' && <WaterfallChart />
        }
      </div>
      <div id='machineStateTable'>
        {
          activeTab === 'machineStateTable' && <MachineStatisticTable />
        }
      </div>
    </div >
  );
}

export default App;
