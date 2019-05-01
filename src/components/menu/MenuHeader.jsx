import React, { Component } from "react";
import style from "styled-components";

const MenuHeaderStyle = style.div`
grid-area: MenuHeader;
text-align: center;
`;

class MenuHeader extends Component {
  render() {
    return (
      <MenuHeaderStyle>
        <div>Header</div>
      </MenuHeaderStyle>
    );
  }
}

export default MenuHeader;
