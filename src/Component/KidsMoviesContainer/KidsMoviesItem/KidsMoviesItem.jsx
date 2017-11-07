import React, { PropTypes } from 'react';
import './KidsMoviesItem.css';
const KidsMoviesItem = (props) => {
    return (
      <div className="col s12 m4 l8">
      <div className="card hoverable red lighten-1">
        <div className="card-image">
          <img className="" src={props.picture} alt="picture"/>
        </div>
        <div className="card-content">
          <h5>{props.title}</h5>
          <h6>{props.description}</h6>
        </div>
        <div className="card-action action1">
           <p>{props.genre}</p>
           <p>{props.actor}</p>
           <p>{props.release}</p>
           <p>${props.price}.00</p>
       </div>
      </div>
   </div>
    );
};


export default KidsMoviesItem;
