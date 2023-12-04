import axios from "axios";
import "./App.css";

const apiCall = async () => {
  const data = await axios.get("http://localhost:8080");
  console.log(data);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Call Server</button>
      </header>
    </div>
  );
}

export default App;
