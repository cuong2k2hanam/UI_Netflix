import "./App.css";
import { Sidebar, Topbar } from "./components";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="otherpage">other pages</div>
      </div>
    </div>
  );
}

export default App;
