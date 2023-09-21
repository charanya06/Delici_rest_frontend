import React, { Component } from "react";
//import Menu from "./menu";

class MenuSort extends Component {
  render() {
    return (
      <div className='button-wrapper w-100 text-center my-4'>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Soups")}
        >
          Soups
        </button>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Pastas")}
        >
          Pastas
        </button>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Pizzas")}
        >
          Pizzas
        </button>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Desserts")}
        >
          Desserts
        </button>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Drinks")}
        >
          Drinks
        </button>
      </div>
    );
  }
}

export default MenuSort;
