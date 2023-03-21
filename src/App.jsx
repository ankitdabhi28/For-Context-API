import './App.css';
import ExtraData from './component/ExtraData';
import Home from './component/Home';
import ForState from './Context/ForState';




function App() {
  return (
    <div>
      <ForState>
        <Home />
        <ExtraData />
      </ForState>
    </div>
  );
}

export default App;
