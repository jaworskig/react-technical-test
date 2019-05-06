import React from "react";
import style from "styled-components";
import logo from "../../../resources/img/awaymoFullWhite.svg"
import { menuSettings } from "../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MenuHeaderStyle = style.div`
  grid-area: MenuHeader;
  display: flex; 
  align-items: center;  
  border-bottom: 2px solid ${menuSettings.borderColor1};
  @media (max-width: ${menuSettings.mobileWidth}px) {
    border-bottom: 1px solid ${menuSettings.borderColor2};
  }

  img {
    display: flex;
    flex: 1;
  }
`;

 
const FAIconStyle = style(FontAwesomeIcon)`
  display: flex; 
`;

const MenuHeader = ({ className, onClick }) => {  
  return (
    <MenuHeaderStyle>
      <img src={logo} alt="Logo" />   
      <FAIconStyle icon={faTimes} onClick={onClick} />
    </MenuHeaderStyle>  
  );
};

export default MenuHeader;
