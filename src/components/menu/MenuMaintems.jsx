import React, { Component } from "react";
import style from "styled-components";

const MenuMainItemsStyle = style.div`
  grid-area: MenuMainItems;
`;

class MenuMainItems extends Component {
  render() {
    return (
      <MenuMainItemsStyle>
        <div>
          <ul>
            <li>Profile</li>
            <li>My Bookings</li>
            <li>....</li>
          </ul>
        </div>
      </MenuMainItemsStyle>
    );
  }
}

export default MenuMainItems;
