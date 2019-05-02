import React, { Component } from "react";
import style from "styled-components";
import { menuSettings } from "./config";

const MenuUserInfoStyle = style.div`
  grid-area: MenuUserInfo;
  display: flex;
  align-items: center;  
  @media (max-width: ${menuSettings.mobileWidth}px) {
    flex-direction: column;
  }
`;

const AvatarIMG = ({ className, data }) => (
  <div className={className}>
    <img src={data.image} alt="Avatar" />
  </div>
);

const AvatarIMGStyle = style(AvatarIMG)`
  display: flex;
  justify-content: center;  
  align-items: center;  
 
  width: 30px;
  height: 30px;
  
  background-color: ${menuSettings.borderColor};
  border-radius: 50%;
  border: 2px solid  ${menuSettings.backgroundColor};

  @media (min-width: ${menuSettings.mobileWidth}px) { 
    box-shadow: 0 0 0 2px  ${menuSettings.borderColor}; 
  }

  img {
    width: auto;
    height: 70%;
  }
`;

const UserInfoDetails = ({ className, data }) => (
  <div className={className}>
    <div type="userFullName">
      <div type="firstName">{data.firstName}&nbsp;</div>
      <div type="lastName">{data.lastName}</div>
    </div>
    <div type="fullDesc">{data.fullDesc}</div>
    <div type="balanceContent">
      <div type="balance">{data.balance}&nbsp;</div>
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

      @media (max-width: ${menuSettings.mobileWidth}px) {

        [type="fullDesc"] {
          display: flex;
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

class MenuUserInfo extends Component {
  render() {
    return (
      <MenuUserInfoStyle>
        <AvatarIMGStyle data={this.props.data} />
        <UserNameStyle data={this.props.data} />
      </MenuUserInfoStyle>
    );
  }
}

export default MenuUserInfo;
