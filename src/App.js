import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {Handicap} from './Form.js';
import {displayHandicap} from './Display.js';


class App extends React.Component {
constructor(props){
super(props);

}

 calculateHandicap(hand, scor, rat, slop) {
    const newHandicap =  hand - (((scor - rat) * 113)/slop)

    this.setState({
      updatedHandicap : newHandicap
    });

  }




  render() {
    return (
      <div>
        < Handicap formSubmitted = {this.calculateHandicap}/>
        < displayHandicap newHandicap = {this.state.updatedHandicap}/>
      </div>
    );
  }
}

//------------------------
export default App;
//------------------------
