import React from 'react';

export default class ActionMoviesContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1>ActionMoviesContainer</h1>
      </div>
    );
  }
}
