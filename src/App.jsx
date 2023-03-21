import './App.css';
import ExtraData from './component/ExtraData';
import Home from './component/Home';
// import ForContext from './Context/forContext';
import ForState from './Context/forState';


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
