import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class displayHandicap extends React.Component {

  handleSubmit(event) {

    event.preventDefault();
    var updatedHandicap = calculateHandicap(this.state.handicap, this.state.score, this.state.rating, this.state.slope);

    this.setState ({
      calculatedHandicap: updatedHandicap
    });
  }


  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
        <div>{this.state.calculatedHandicap}</div>
      </form>
      </div>
    );
  }
}

//------------------------
export default displayHandicap;
//------------------------
function calculateHandicap(hand, scor, rat, slop) {
  return hand - (((scor - rat) * 113)/slop)
}
