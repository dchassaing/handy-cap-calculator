import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class displayHandicap extends React.Component {

  render() {
    return (
        <div>{this.props.newHandicap}</div>
    );
  }
}

//------------------------
export {displayHandicap};
//------------------------
function calculateHandicap(hand, scor, rat, slop) {
  return hand - (((scor - rat) * 113)/slop)
}
