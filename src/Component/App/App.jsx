import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
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
          <div >
            <NavBar />

             { this.props.children && React.cloneElement(this.props.children, {
                   updateOverallState: (k, v) => this.updateState(k, v),
             })}
          </div>
        );
    }
}
