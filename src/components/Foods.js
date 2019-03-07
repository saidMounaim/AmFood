import React, { Component } from 'react';
import CardFood from './CardFood';
import {Consumer} from './context';

class Foods extends Component {
  render() {
    return (
        <Consumer>
            {value => (
                <div className="container">
                    <h2>Foods</h2>
                    <div className="row">
                        {value.foods.map((food) => (
                            <CardFood data={food} />
                        ))}
                    </div>
                </div>    
            )}
        </Consumer>
    )
  }
}

export default Foods;