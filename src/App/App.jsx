import React, { Component, PropTypes } from 'react';
import Greeting from '../Component/Greeting/Greeting.jsx';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
          <div>
          <Greeting/>
           { this.props.children && React.cloneElement(this.props.children, {
           })}
          </div>
        );
    }
}

export default App;
