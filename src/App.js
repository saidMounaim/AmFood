import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Foods from './components/Foods';
import './App.css';
import { Provider } from './components/context';
import FoodDetails from './components/FoodDetails';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
        <div className="App">
          <Navbar />
          <br/>
          <Switch>
            <Route exact path="/" component={Foods} />
            <Route exact path="/food/:id" component={FoodDetails} />
          </Switch>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
