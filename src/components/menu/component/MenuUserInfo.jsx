import React from "react";
import style from "styled-components";
import AvatarIMGStyle from "./MenuUserInfoAvatar";
import { menuSettings } from "../config";

const MenuUserInfoStyle = style.div`
  grid-area: MenuUserInfo;
  display: flex;
  justify-content: left;
  align-items: center;  

  

  @media (max-width: ${menuSettings.mobileWidth}px) {
    flex-direction: column;
    font-size: 1rem;
    
    //padding-top: 10px;
  }

  @media (min-width: ${menuSettings.mobileWidth}px) {
    border-bottom: 1px solid ${menuSettings.borderColor2};
    width: 50vw;
  }

  li {
    padding-bottom: 5px;
  }
`;

function formatBalance(number) {
  return new Intl.NumberFormat(menuSettings.locale, {
    style: "currency",
    currency: menuSettings.currency
  }).format(number);
}

const UserInfoDetails = ({ className, data }) => (
  <div className={className}>
    <div type="userFullName">
      <div type="firstName">{data.firstName}&nbsp;</div>
      <div type="lastName">{data.lastName}</div>
    </div>
    <div type="fullDesc">{data.fullDesc}</div>
    <div type="balanceContent">
      <div type="balance">{formatBalance(data.balance)}&nbsp;</div>
      <div type="shortDesc">{data.shortDesc}</div>
    </div>
  </div>
);

const UserNameStyle = style(UserInfoDetails)`

      [type="fullDesc"] {
        display: none;
      }

      [type="userFullName"] {
        display: flex;
      }

      [type="balanceContent"] {
        display: flex;
      }

      @media (min-width: ${menuSettings.mobileWidth}px) {
        padding-left: 20px; 
      }

      @media (max-width: ${menuSettings.mobileWidth}px) { 
        [type="fullDesc"] {
          display: flex;
          font-size: 0.8rem;
        }

        [type="userFullName"] {
          justify-content: center;  
        }

        [type="balanceContent"] {
          justify-content: center;  
        }

        [type="lastName"] {
          display: none;
        }

        [type="shortDesc"] {
          display: none;
        }
      }
`;
 
const MenuUserInfo = props => {
  return (
    <MenuUserInfoStyle>
      <AvatarIMGStyle data={props.data} />
      <UserNameStyle data={props.data} />
    </MenuUserInfoStyle>
  );
};

export default MenuUserInfo;
