import logo from './logo.svg';
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header"
import TimeBlocks from "./components/TimeBlocks"

function App() {
  return (
    <div className="App">
       
    <Header></Header>
    <TimeBlocks></TimeBlocks>
    
    </div>
  );
}

export default App;
