

import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'


class Header extends React.Component {
    render(){
        return(

<Jumbotron className="jumbotron">
<h1 className="display-3">Work Day Scheduler</h1>

      <p className="lead">A simple calendar app for scheduling your work day</p>
      <p id="currentDay" className="lead"></p>
      <div class="key">
        <p>KEY:<span id="red">Red=</span> The current hour/ 
          <span id="blue">Blue=</span> The hour is still to come/ 
          <span id="grey">Grey=</span> The hour has past
          
          
        </p>

      </div>
  
</Jumbotron>
        )
    }


}

export default Header;