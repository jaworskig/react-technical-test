import React, { Component } from "react";
import style from "styled-components";
import { menuSettings, footerData, mainMenuData, userInfoData } from "./config";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";
import MenuUserInfo from "./MenuUserInfo";
import MenuMaintems from "./MenuMaintems";
import MenuSideItems from "./MenuSideItems";

const Style = style.div`
  display: grid;

  background-color: ${menuSettings.backgroundColor};
  color: ${menuSettings.color};
  grid-template-columns: 200px auto;
  grid-template-areas:
  'MenuHeader MenuHeader'
  'MenuSideItems MenuUserInfo'
  'MenuSideItems MenuMainItems'
  'MenuFooter MenuFooter';

  @media (max-width: ${menuSettings.mobileWidth}px) {
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
        <MenuUserInfo data={userInfoData} />
        <MenuMaintems data={mainMenuData} />
        <MenuFooter data={footerData} />
      </Style>
    );
  }
}

export default Menu;
