import React from 'react';
import { Link } from 'react-router';
export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
     <div className="navbar-fixed">
        <nav className="nav-wrapper brown darken-4">
        	    <li className="item1 brand-logo"><Link to="/">Movies Collection</Link></li>
        	<ul className="itemNav right">
        		<li className="item1"><Link to="lastest">Lastest Movies</Link></li>
        		<li className="item2"><Link to="#">Old School Movies</Link></li>
        		<li className="item3"><Link to="#">Kids Movies</Link></li>
        		<li className="item4"><Link to="#">Documentary Movies</Link></li>
        		<li className="item5"><Link to="#">Action Movies</Link></li>
        	</ul>
        </nav>
     </div>
    );
  }
}
