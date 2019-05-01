import React, { Component } from "react";
import style from "styled-components";
import config from "./config";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";
import MenuUserInfo from "./MenuUserInfo";
import MenuMaintems from "./MenuMaintems";
import MenuSideItems from "./MenuSideItems";

const Style = style.div`
  display: grid;

  background-color: ${config.backgroundColor};
  color: ${config.color};
  grid-template-columns: 300px auto;
  grid-template-areas:
  'MenuHeader MenuHeader'
  'MenuSideItems MenuUserInfo'
  'MenuSideItems MenuMainItems'
  'MenuFooter MenuFooter';

  @media (max-width: ${config.mobileWidth}px) {
    grid-template-columns: auto;
    grid-template-areas:
    'MenuHeader '
    'MenuUserInfo'
    'MenuMainItems'
    'MenuFooter';
  }

`;

class Menu extends Component {
  render() {
    return (
      <Style>
        <MenuHeader />
        <MenuSideItems />
        <MenuUserInfo />
        <MenuMaintems />
        <MenuFooter />
      </Style>
    );
  }
}

export default Menu;
