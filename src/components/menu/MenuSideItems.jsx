import React from "react";
import style from "styled-components";
import { menuSettings } from "./config";

const MenuSideItemsStyle = style.div`
  grid-area: MenuSideItems;
  display: block;
  @media (max-width: ${menuSettings.mobileWidth}px) {
    display: none;
  }
`;
 
const MenuSideItems = props => {
  return (
    <MenuSideItemsStyle>
      <ul>
        {props.data.map((x, index) => (
          <li key={index}>{x.text}</li>
        ))}
      </ul>
    </MenuSideItemsStyle>
  );
};

export default MenuSideItems;
