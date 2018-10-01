import React, { Component } from "react";

class Form extends Component {
  state = {
    inputName: "",
    inputCalories: "",
    inputUrl: "",
    inputQty: ""
  };

  handleCreate = e => {
    this.setState({
      inputName: e.target.value,
      inputCalories: e.target.value,
      inputUrl: e.target.value,
      inputQty: e.target.value
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: 0
    };
  }

  render() {
    const { inputName } = this.state;
    const { inputCalories } = this.state;
    const { inputUrl } = this.state;
    const { inputQty } = this.state;

    return (
      <form onSubmit={this.handleNewFood}>
        <label>Name:</label>
        <input type="text" name="name" value={inputName} />

        <label>Calories:</label>
        <input type="number" name="calories" value={inputCalories} />

        <label>Image:</label>
        <input type="url" name="image" checked={inputUrl} />

        <label>Quantity:</label>
        <input type="number" name="quantity" value={inputQty} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
