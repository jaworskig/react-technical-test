import React  from "react";
import style from "styled-components";
import { menuSettings, disType } from "./config";

const MenuMainItemsStyle = style.ul`
  grid-area: MenuMainItems;
`;

const LI = ({ className, data }) => (
  <li className={className}>
    <i className={data.icon} />
    <a href={data.link}>{data.text}</a>
  </li>
);

const LIStyle = style(LI)`

  @media (max-width: ${menuSettings.mobileWidth}px) {
  display: ${props => (props.data.display & disType.MOBILE ? "block" : "none")};
  }

  @media (min-width: ${menuSettings.mobileWidth}px) {
  display: ${props => (props.data.display & disType.PC ? "block" : "none")};
  i { display: none; }
  }
`;

const MenuMainItems = props => {
  return (
    <MenuMainItemsStyle>
      <ul>
        {props.data.map((x, index) => (
          <LIStyle key={index} data={x} />
        ))}
      </ul>
    </MenuMainItemsStyle>
  );
};

export default MenuMainItems;
