import React from 'react';
import LoginComp from './Login';
import { BrowserRouter, Route, Link } from "react-router-dom";



class LandingComp extends React.Component {
  render() {
    return (
      <div className="first first-page">
      <div className="first-backgroundimg"></div>
      <div className="blackbackground"></div>
      <div className="container">
        <div className="appname">
          <h1>D A P</h1>
          <p>-Let your imagination go wild-</p>
        </div>
        <ul>
                    <li><Link to="/login">React</Link></li>
                </ul>

      </div>
    </div>
    )
  }
}

export default LandingComp;