import React from 'react';

export default class KidsMoviesContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1>KidsMoviesContainer</h1>
      </div>
    );
  }
}
