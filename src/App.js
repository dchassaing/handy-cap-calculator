import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import react-scripts from 'react-scripts';

class FormStructure extends React.Component {
  renderButton(i) {
    return <Button value={i}/> (

    <div className="form-structure">
    <h1>Score for {this.props.name}</h1>
    <ul>
      <li><form>My current handicap</form></li>
      <li><form>My Score</form></li>
      <li><form>Course Rating</form></li>
      <li><form>Course Slope</form></li>
    </ul>
    </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className ="submit"> onCLick={() => alert('click')}</button>
        {this.props.value}
        // onClick = {this.handleClick}>Calculate my Score
      </div>
    );
  }
}

class FormInput extends React.Component {
  render() {
    return (
      <div className = "form-input">

      </div>
    );
  }
}
