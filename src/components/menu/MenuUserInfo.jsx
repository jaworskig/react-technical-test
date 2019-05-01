import React, { Component } from "react";
import style from "styled-components";

const MenuUserInfoStyle = style.div`
  grid-area: MenuUserInfo;
`;

class MenuUserInfo extends Component {
  render() {
    return (
      <MenuUserInfoStyle>
        <div>UserInfo</div>
      </MenuUserInfoStyle>
    );
  }
}

export default MenuUserInfo;
