import React from "react";
import style from "styled-components";
import { menuSettings, disType } from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faUserCircle,
  faInfoCircle,
  faCreditCard,
  faLifeRing,
  faSignOutAlt,
  faQuestionCircle,
  faPhone,
  faPlane
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserCircle,
  faInfoCircle,
  faCreditCard,
  faLifeRing,
  faSignOutAlt,
  faQuestionCircle,
  faPhone,
  faPlane
);

const MenuMainItemsStyle = style.div`
  grid-area: MenuMainItems;
  ul li:first-child {
   border: none;
  }
`;

const FIconStyle = style(FontAwesomeIcon)`
  @media (min-width: ${menuSettings.mobileWidth}px) { 
    display: none;
  }
`;

const LI = ({ className, data }) => (
  <li className={className}>
    <FIconStyle icon={data.icon} />
    <a href={data.link}>{data.text}</a>
  </li>
);

const LIStyle = style(LI)`
  @media (max-width: ${menuSettings.mobileWidth}px) {
    display: ${props =>
      props.data.display & disType.MOBILE ? "block" : "none"};
    border-top: 1px solid ${menuSettings.borderColor2};
    
    font-size: 1rem; 
    padding: 2vh 0 2vh 0;
    a {
      padding-left: 5px;
    }
  }

  @media (min-width: ${menuSettings.mobileWidth}px) { 
    display: ${props => (props.data.display & disType.PC ? "block" : "none")};
    font-size: 2rem;
    padding-bottom: 1vh;
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
