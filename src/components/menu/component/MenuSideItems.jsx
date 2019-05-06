import React from "react";
import style from "styled-components";
import { menuSettings } from "../config";

const MenuSideItemsStyle = style.div`
  grid-area: MenuSideItems;
  display: block;
  font-size: 2rem;

  @media (max-width: ${menuSettings.mobileWidth}px) {
    display: none;
  }

  li {
    display: block; 
    padding-bottom: 1vh;
  }
`;

function LIConditional(data,index) {
  if (data.text) {
    return (
      <li key={index}>
        <a href={data.link}>{data.text}</a>
      </li>
    );
  } else {
    return <li key={index}>&nbsp;</li>;
  }
}

const MenuSideItems = props => {
  return (
    <MenuSideItemsStyle>
      <ul>
        {props.data.map((x, index) => ( 
          LIConditional(x,index)
        ))}
      </ul>
    </MenuSideItemsStyle>
  );
};

export default MenuSideItems;
