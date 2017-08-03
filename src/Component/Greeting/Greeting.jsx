import React from 'react';
import './Greeting.css';
export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       greeting: 'My Movies',
    }
  }

  render() {
    return (
      <div className='greet'>
      	<h1>{this.state.greeting}</h1>
      </div>
    );
  }
}
