import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Consumer} from './context';

class CardFood extends Component {
  render() {
      const { recipe_id, title, image_url } = this.props.data;
      return (
          <Consumer>
              {value => (
                  //const {dispatch} = value;
                  <div className="col-md-4 mb-3">
                      <div class="card" >
                          <img class="card-img-top" src={image_url} alt="Card image cap" />
                          <div class="card-body">
                              <h5 class="card-title">
                                { title.length < 20 ? `${title}` : `${title.substring(0, 20)}` }
                              </h5>
                              <Link to={`/food/${recipe_id}`} className="btn btn-primary">Details</Link>
                          </div>
                      </div>
                  </div>
              )}
          </Consumer>
      )
  }
}

export default CardFood;

