import React, { Component } from 'react';
import Greeting from '../Greeting/Greeting.jsx';
import './App.css';

export default class App extends Component {

    constructor() {
        super();
    }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }


    render() {
        return (
          <div>
            <Greeting />
             { this.props.children && React.cloneElement(this.props.children, {
                   updateOverallState: (k, v) => this.updateState(k, v),
             })}

          </div>
        );
    }
}
