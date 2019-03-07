import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();


export class Provider extends Component {

    state = {
        foods: []
    }

    componentDidMount() {
        axios.get(`https://www.food2fork.com/api/search?key=API_KEY`)
            .then(res => {
                const foods = res.data.recipes;
                this.setState({ foods });
                console.log(foods);
            })
    }

  render() {
    return (
        <Context.Provider value={this.state} >
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;