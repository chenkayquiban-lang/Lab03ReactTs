import CounterPanel from "./CounterPanel";
import FilterList from "./FilterList";
import ClockLabel from "./ClockLabel";

function App() {
  return (
    <div>
      <h1>Laboratory Activity 4</h1>

      <p>
        Implement useState, useReducer, and useEffect flows
      </p>

      <hr />

      <CounterPanel />

      <hr />

      <FilterList />

      <hr />

      <ClockLabel />
    </div>
  );
}

export default App;