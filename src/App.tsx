import "./App.scss";
import FileExpolorer from "./components/FileExplorer/FileExpolorer";
import { Files } from "./json/files";

function App() {
  return (
    <div className="app">
      <h1 className="app-header"> File Expolorer Task</h1>
      <FileExpolorer files={Files} />
    </div>
  );
}

export default App;
