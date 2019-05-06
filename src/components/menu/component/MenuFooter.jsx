import React from "react";
import style from "styled-components";
import { menuSettings } from "../config";

const MenuFooterStyle = style.div`
  grid-area: MenuFooter;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${menuSettings.borderColor2};

  @media (min-width: ${menuSettings.mobileWidth}px) {
    font-size: 1.1rem;
    font-weight: 500;
    font-stretch: expanded;
  }

 

  
`;

const MenuFooterDetailsStyle = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${menuSettings.mobileWidth}px) {
    display: none; 
  }
`;

const Link = ({ linkType, linkData }) => (
  <a href={`${linkType}:${linkData}`} target="_blank" rel="noopener noreferrer">
    {linkData}
  </a>
);

const MenuFooter = props => {
  return (
    <MenuFooterStyle>
      {props.data.contact}
      <MenuFooterDetailsStyle>
        <Link linkType="callto" linkData={props.data.phone} />
        
        <Link linkType="mailto" linkData={props.data.email} />
      </MenuFooterDetailsStyle>
    </MenuFooterStyle>
  );
};

export default MenuFooter;
