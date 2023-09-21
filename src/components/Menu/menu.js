import React, { Component } from "react";
import MENU from "./data";
import MenuItem from "./menuItem";
import MenuSort from "./menuSort";
//import PropTypes from "prop-types";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menu: MENU,
      category: null,
      changeDisplay: false
    };

    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory(category) {
    this.setState({
      category: category,
      changeDisplay: true
    });
  }

  render() {
    return (
      <div className='row container mx-auto'>
        <h3 className='text-center  mt-3 fs-1'>OUR MENU</h3>
        <MenuSort
          data={{
            category: this.state.category,
            selectCategory: this.selectCategory
          }}
        />
        {this.state.menu.map(item => (
          <MenuItem
            menu={item}
            key={item.id}
            data={{
              category: this.state.category,
              displayCategory: this.displayCategory,
              changeDisplay: this.state.changeDisplay
            }}
          />
        ))}
      </div>
    );
  }
}

export default Menu;
