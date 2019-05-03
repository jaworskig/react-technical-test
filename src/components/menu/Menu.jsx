import React, { useState } from "react";
import style from "styled-components";
import { Transition } from "react-transition-group";
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
  }

`;

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Menu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <MenuOpenButton onClick={() => setVisible(!visible)} />
      <Transition in={visible} timeout={500}>

      {state => (

        <Style style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }} >

          <MenuHeader onClick={() => setVisible(!visible)} />
          <MenuSideItems />
          <MenuUserInfo data={userInfoData} />
          <MenuMaintems data={mainMenuData} />
          <MenuFooter data={footerData} />
        </Style>
      )}
      </Transition>
    </div>
  );
};

export default Menu;
