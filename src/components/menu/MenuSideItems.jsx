import React, { Component } from "react";
import style from "styled-components";
import config from "./config";

const MenuSideItemsStyle = style.div`
  grid-area: MenuSideItems;
  display: block;
  @media (max-width: ${config.mobileWidth}px) {
    display: none;
  }
`;

class MenuSideItems extends Component {
  render() {
    return (
      <MenuSideItemsStyle>
        <div> 
          <ul>
            <li>Home</li>
            <li>Flights</li>
            <li>....</li>
          </ul>
        </div>
      </MenuSideItemsStyle>
    );
  }
}

export default MenuSideItems;
