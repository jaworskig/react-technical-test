import React, { useState } from "react";
import style from "styled-components";
import { CSSTransition } from "react-transition-group";
import { menuSettings, footerData, mainMenuData, userInfoData } from "./config";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";
import MenuUserInfo from "./MenuUserInfo";
import MenuMaintems from "./MenuMaintems";
import MenuSideItems from "./MenuSideItems";
import MenuOpenButton from "./MenuOpenButton";

const Style = style.div` 
  display: grid;
   
  background-color: ${menuSettings.backgroundColor};
  color: ${menuSettings.color};
  grid-template-columns: 200px auto;
  grid-template-areas:
  'MenuHeader MenuHeader'
  'MenuSideItems MenuUserInfo'
  'MenuSideItems MenuMainItems'
  'MenuFooter MenuFooter';

  @media (max-width: ${menuSettings.mobileWidth}px) {
    grid-template-columns: auto;
    grid-template-areas:
    'MenuHeader '
    'MenuUserInfo'
    'MenuMainItems'
    'MenuFooter';
  };

  opacity: 0;  
  transform: translate3d(0,-100vw,0);

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
          <MenuSideItems />
          <MenuUserInfo data={userInfoData} />
          <MenuMaintems data={mainMenuData} />
          <MenuFooter data={footerData} />
        </Style>
      </Transition>
    </div>
  );
};

export default Menu;
