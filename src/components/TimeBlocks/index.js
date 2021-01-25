import React from "react";
import $ from "jquery";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Moment from "moment-timezone"
import "moment-timezone";
import moment from "moment";

const { DateTime } = require("luxon");


//Loads the date on top of page at page load
$(window).on("load", function () {
  var currentDay = moment().format("MMMM dddd Do YYYY");
  $("#currentDay").append(currentDay);
  // global variables
  var tb = [
    document.querySelector("#timeblock1"),
    document.querySelector("#timeblock2"),
    document.querySelector("#timeblock3"),
    document.querySelector("#timeblock4"),
    document.querySelector("#timeblock5"),
    document.querySelector("#timeblock6"),
    document.querySelector("#timeblock7"),
    document.querySelector("#timeblock8"),
    document.querySelector("#timeblock9"),
  ];

  var callHour = document.querySelectorAll(".hour");
  var hour = DateTime.local().toFormat("HH");
  var currentSchedule = JSON.parse(localStorage.getItem("userEvents")) || {};

  function displayCurrentSchedule() {
    for (var key in currentSchedule) {
      document.getElementById(key).value = currentSchedule[key];
    }
  }
  displayCurrentSchedule();

  //for loop to check the time and reference it to the divs with color
  // indianred===current hour
  //lightgrey===hours past
  //lightblue===hours still to come
  for (let i = 0; i < callHour.length; i++) {
    var checker = callHour[i].innerHTML.slice(0, 2);

    if (checker === hour && hour === tb[i].innerHTML.slice(0, 2)) {
      tb[i].nextElementSibling.style.background = "indianred";
    } else if (checker < hour && hour > tb[i].innerHTML.slice(0, 2)) {
      tb[i].nextElementSibling.style.background = "lightgrey";
    } else {
      tb[i].nextElementSibling.style.background = "lightblue";
    }
  }

  var saveButton = document.querySelectorAll(".saveBtn");
  //alerts the user they clicked on the save button

  $(".saveBtn").on("click", function () {
    var textArea = $(this).prev();
    var timeId = textArea.attr("id");
    var event = textArea.val();
    currentSchedule[timeId] = event;

    localStorage.setItem("userEvents", JSON.stringify(currentSchedule));

    alert("You saved me!");
  });
});
class TimeBlocks extends React.Component {



  render() {
    return (
      <Container>
        <div id="hour-9" className="row time-block">
          <div id="timeblock1" className="col-md-1 9hour hour">
            09:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock2" className="col-md-1 9hour hour">
            10:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock3" className="col-md-1 9hour hour">
            11:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock4" className="col-md-1 9hour hour">
            12:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock5" className="col-md-1 9hour hour">
            13:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock6" className="col-md-1 9hour hour">
            14:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock7" className="col-md-1 9hour hour">
            15:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock8" className="col-md-1 9hour hour">
            16:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
        <div id="hour-9" className="row time-block">
          <div id="timeblock9" className="col-md-1 9hour hour">
            17:00
          </div>
          <textarea className="col-md-10 description"></textarea>
          <Button className="btn saveBtn col-md-1">
            <i className="fa fa-save"></i>
          </Button>
        </div>
      </Container>
    );
  }
}

export default TimeBlocks;
