import './App.css';
import TimeIncrementorClass from './Components/ClassComponents/TimeIncrementorClass/TimeIncrementorClass';
import DataFetching from './Components/FunctionalComponenets/DataFetching/DataFetching';
import TimeIncrementer from './Components/FunctionalComponenets/TimeIncrementer/TimeIncrementer';

function App() {
  return (
    <div className="App">
      {/* <TimeIncrementorClass />
      <TimeIncrementer /> */}
      <DataFetching />
    </div>
  );
}

export default App;
