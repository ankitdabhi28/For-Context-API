import './App.css';
import ExtraData from './component/ExtraData';
import TableApi from './component/TableApi';
import ForState from './Context/ForState';




function App() {
  return (
    <div>   
      <ForState>
        <TableApi />
        <ExtraData />
      </ForState>
    </div>
  );
}

export default App;
