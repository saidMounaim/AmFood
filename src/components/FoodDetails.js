import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FoodDetails extends Component {

    state = {
        food: []
    }

    componentDidMount() {
        axios.get(`https://www.food2fork.com/api/get?key=API_KEY&rId=${this.props.match.params.id}`)
            .then(res => {
                const food = res.data.recipe;
                this.setState({ food });
            })
    }

  render() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3 className="float-left" >{this.state.food.title}</h3>
                    <Link className="float-right link-back" to="/" >Back To List</Link>
                </div>
                <div className="card-body">
                    <div className="food-img float-left">
                        <img src={this.state.food.image_url} alt="" srcset=""/>
                    </div>
                    <div className="food-detail">
                        <h4 className="float-left ml-4"><strong>Publisher:</strong> {this.state.food.publisher}</h4>
                        <h4 className="float-left ml-4"><strong>Website: </strong> 
                        <Link to="/" >{this.state.food.publisher_url}</Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default FoodDetails;