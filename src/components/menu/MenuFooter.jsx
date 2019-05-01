import React from "react";
import style from "styled-components";
import {menuSettings} from "./config";

const MenuFooterStyle = style.div`
  grid-area: MenuFooter;
  text-align: center;
`;
const MenuFooterTextStyle = style.div`
  font-size: 1rem;
`;

const MenuFooterDetailsStyle = style.div`
  display: block;
  @media (max-width: ${menuSettings.mobileWidth}px) {
    font-size: 1rem; 
    display: none;
  }
`;

const Link = ({ linkType, linkData }) => (
  <a href={`${linkType}:${linkData}`} target="_blank" rel="noopener noreferrer">
    {linkData}
  </a>
);

const MenuFooter = (props) => {
  return (
    <MenuFooterStyle>
      <MenuFooterTextStyle>
        <div>{props.data.contact}</div>
      </MenuFooterTextStyle>
      <MenuFooterDetailsStyle>
        <Link linkType="callto" linkData={props.data.phone} />
        <br />
        <Link linkType="mailto" linkData={props.data.email} />
      </MenuFooterDetailsStyle>
    </MenuFooterStyle>
  );
}

export default MenuFooter;