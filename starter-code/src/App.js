import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Title from './Components/Title';
import FoodContainer from './Components/FoodContainer';
import Form from './Components/Form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Title><h1>Iron Nutrition!</h1></Title>
        <FoodContainer />
        <Form />
      </div>
    );
  }
}

export default App;
