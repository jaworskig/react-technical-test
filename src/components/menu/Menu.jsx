import React, { useState } from "react";
import style from "styled-components";
import { CSSTransition } from "react-transition-group";
import {
  menuSettings,
  footerData,
  mainMenuData,
  userInfoData,
  sideMenuData
} from "./config";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";
import MenuUserInfo from "./MenuUserInfo";
import MenuMaintems from "./MenuMaintems";
import MenuSideItems from "./MenuSideItems";
import MenuOpenButton from "./MenuOpenButton";

const Style = style.div` 
  display: grid;
  grid-gap: 5px;
  height:  100vh;
  background-color: ${menuSettings.backgroundColor};
   
  font-family: Lato,sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${menuSettings.color};
  
  a {
    color: ${menuSettings.color}
    text-decoration: none;
  }

  ul {
    padding-left: 0px;
  }

  padding: 0 10px 0 10px;

  grid-template-columns: 30vw auto;
//  grid-template-rows: 60px min-content auto auto;
//  grid-template-rows: 0.5fr 1fr  2.8fr 0.7fr;
  grid-template-rows: 5vh 15vh auto auto;
  
  grid-template-areas:
  'MenuHeader MenuHeader'
  'MenuSideItems MenuUserInfo'
  'MenuSideItems MenuMainItems'
  'MenuFooter MenuFooter';

  @media (max-width: ${menuSettings.mobileWidth}px) {
    font-weight: 500;
    grid-template-columns: auto;
    grid-template-areas:
    'MenuHeader '
    'MenuUserInfo'
    'MenuMainItems'
    'MenuFooter';
  };

 //display: none;
 opacity: 0;  
 transform: translate3d(0,-110vh,0);
`;

const Transition = style(({ className, isVisible, children }) => (
  <CSSTransition in={isVisible} timeout={1000} classNames={className}>
    {children}
  </CSSTransition>
))`

  &-enter {
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: transform 500ms ease-in-out, opacity 1s ease-in-out;
  }
 
  &-enter-done {
    opacity: 1;  
    transform: translate3d(0,0,0); 
  }

`;

const Menu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <MenuOpenButton
        onClick={() => setVisible(!visible)}
        isVisible={visible}
      />
      <Transition isVisible={visible}>
        <Style>
          <MenuHeader onClick={() => setVisible(!visible)} />
          <MenuSideItems data={sideMenuData} />
          <MenuUserInfo data={userInfoData} />
          <MenuMaintems data={mainMenuData} />
          <MenuFooter data={footerData} />
        </Style>
      </Transition>
    </div>
  );
};

export default Menu;
