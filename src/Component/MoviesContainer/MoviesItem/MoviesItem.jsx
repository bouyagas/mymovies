import React from 'react';
import './MoviesItem.css';
const MoviesItem = (props) => {
  return (
	    <div className="row hoverable">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img className="" src={props.picture} alt="picture"/>
            </div>
            <div className="card-content">
              <p>{props.title}</p>
              <p>{props.description}</p>
            </div>
            <div className="card-action">
               <p>{props.genre}</p>
               <p>{props.actor}</p>
               <p>{props.release}</p>
               <p>${props.price}.00</p>
            </div>
          </div>
        </div>
      </div>

    );
};

export default MoviesItem;
