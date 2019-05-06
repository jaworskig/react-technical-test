import React  from "react";
import style from "styled-components";
import { menuSettings } from "../config";

 
const AvatarIMG = ({ className, data }) => (
  <div className={className}>
    <img src={data.image} alt="Avatar" />
  </div>
);

const AvatarIMGStyle = style(AvatarIMG)`
  display: flex;
  justify-content: center;  
  align-items: center;  
 
  width: 50px;
  height: 50px;

  
  background-color: ${menuSettings.borderColor1};
  border-radius: 50%;
  border: 2px solid  ${menuSettings.backgroundColor};

  @media (min-width: ${menuSettings.mobileWidth}px) { 
    box-shadow: 0 0 0 4px  ${menuSettings.borderColor1}; 
  }

  img {
    width: auto;
    height: 60%;
  }
`;
  

export default AvatarIMGStyle;
