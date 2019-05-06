import React from "react";
import style from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuOpenButton = ({ className, onClick }) => {
  return <div className={className}><FontAwesomeIcon onClick={onClick} icon={faBars} /></div>;
};

const MenuOpenButtonStyle = style(MenuOpenButton)`
   display: ${props => (!props.isVisible ? "flex" : "none")};
   font-size: 2rem;
   position: fixed;  
   right: 5px; 
`;

export default MenuOpenButtonStyle;
