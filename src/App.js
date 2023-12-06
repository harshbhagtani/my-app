import Batching from "./components/Batching";
import ConcurrentMode from "./components/ConcurrentMode";

//what is new in React 18

function App() {
  return (
    <div className="App">
      <ConcurrentMode />

      {/* <Batching /> */}
    </div>
  );
}

export default App;
