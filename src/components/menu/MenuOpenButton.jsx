import React from "react";
import style from "styled-components";


const MenuOpenButton = ({ className, onClick }) => {  
  return (
    <i
      className={`fas fa-bars ${className}`}
      onClick={onClick}
    />
  );
};

const MenuOpenButtonStyle = style(MenuOpenButton)`
    display: flex; 
   // justify-content: flex-end;
`;

export default MenuOpenButtonStyle;
