import React from 'react';
import './MoviesItem.css';
const MoviesItem = (props) => {
  return (
	    <div className="container">

             <table className="highlight bordered responsive-table">
             	<tbody>
                  <tr>
                  	<td>{props.title}</td>
                  	<td>{props.actor}</td>
                  	<td>{props.genre}</td>
                  	<td>{props.release}</td>
                  	<td>${props.price}.00</td>
                  	<td><img className=" responsive-img" src={props.picture} alt="picture"/></td>
                    <td className="col s12 m4 l2 ">{props.description}</td>
                  </tr>
             	</tbody>
             </table>
	    </div>
    );
};



export default MoviesItem;
