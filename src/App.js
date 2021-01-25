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
    {/* <div className="container">
      
      <div id="hour-9" className="row time-block">
        <div id="timeblock1" className="col-md-1 9hour hour">09:00</div>
        <textarea id="09:00" className="col-md-10 description"></textarea>
        <button  className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>  */}
      {/* <div id="hour-9" className="row time-block">
        <div id="timeblock2" className="col-md-1 10hour hour">10:00</div>
        <textarea id="10:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div id="hour-9" className="row time-block">
        <div id="timeblock3" className="col-md-1 11hour hour">11:00</div>
        <textarea id="11:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div id="hour-9" className="row time-block">
        <div id="timeblock4" className="col-md-1 12hour hour">12:00</div>
        <textarea id="12:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div id="hour-9" className="row time-block">
        <div id="timeblock5" className="col-md-1 13hour hour">13:00</div>
        <textarea id="13:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div id="hour-9" className="row time-block">
        <div id="timeblock6" className="col-md-1 14hour hour">14:00</div>
        <textarea id="14:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div id="hour-9" className="row time-block">
        <div id="timeblock7" className="col-md-1 15hour hour">15:00</div>
        <textarea id="15:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div id="hour-9" className="row time-block">
        <div id="timeblock8"className="col-md-1 16hour hour">16:00</div>
        <textarea id="16:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div id="hour-9" className="row time-block">
        <div id="timeblock9"className="col-md-1 17hour hour">17:00</div>
        <textarea id="17:00" className="col-md-10 description"></textarea>
        <button className="btn saveBtn col-md-1">
          <i className="fas fa-save"></i>
        </button>
      </div>  */}
    </div>
  );
}

export default App;
