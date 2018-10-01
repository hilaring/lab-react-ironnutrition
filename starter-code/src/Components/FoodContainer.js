import React, { Component } from "react";
import FoodBox from "./FoodBox";
import foods from '../foods.json'

class FoodContainer extends Component {
    state = {
        comida: foods,
    };
  render() {
    return (
      <div>
        {this.state.comida.map((item, index) => {
          return (
            <FoodBox
              key={index}
              id={index}
              image={item.image}
              name={item.name}
              calories={item.calories}
            />
          );
        })}
      </div>
    );
  }
}

export default FoodContainer;
