import React, { Component } from "react";
import style from "styled-components";

const MenuFooterStyle = style.div`
  grid-area: MenuFooter;
  text-align: center;
`;


class MenuFooter extends Component {
  render() { 
    return (
      <MenuFooterStyle>
        <div>
          Footer
        </div>
      </MenuFooterStyle>
    );
  }
}

export default MenuFooter;
