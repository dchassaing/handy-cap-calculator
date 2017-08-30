import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Handicap extends React.Component {
  constructor(props) {
    super(props);
    //next step: turn the below elements into an array to use in calculating handicap function ~ squares
    this.state = {
      handicap:0,
      score:0,
      rating:0,
      slope:0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Your score is: ' + this.state.value);
    event.preventDefault();

    // if calculateHandicap() {
    //   return;
    // }
    // this.setState ({
    //
    // });
  }


  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
        My current handicap:
        <input
        name = "handicap"
        type="text"
        value={this.state.handicap}
        onChange={this.handleInputChange} />
        </label>
        <label>
          My Score:
          <input
          name = "score"
          type="text"
          value={this.state.score}
          onChange={this.handleInputChange}/ >
        </label>
        <label>
          Course Rating:
          <input
          name = "rating"
          type="text"
          value={this.state.rating}
          onChange={this.handleInputChange} />
        </label>
        <label>
          Course Slope:
          <input
          name = "slope"
          type="text"
          value={this.state.slope}
          onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//------------------------
export default Handicap;
//------------------------
function calculateHandicap() {
  return this.state.handicap - (((this.state.score - this.state.rating) * 113)/this.state.slope)
}
