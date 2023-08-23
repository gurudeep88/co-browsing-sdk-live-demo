import { Button } from '@mui/material';
import './App.css';
import MuiTable from './components/MuiTable';
import { coBrowsing } from 'sariska-cobrowsing';
//import Sample from './components/Sample';

function App() {
  const startCobrowsing = async()=>{
    await coBrowsing.startCoBrowsing('guru', 'cobrowsing-session');
  }
  const stopCobrowsing = async()=>{
    await coBrowsing.stopCoBrowsing();
  }
  return (
    <div className="App">
      <Button onClick={startCobrowsing}>Start Cobrowsing</Button>
      <Button onClick={stopCobrowsing}>Stop Cobrowsing</Button>
      <MuiTable />
      {/* <Sample /> */}
    </div>
  );
}

export default App;
