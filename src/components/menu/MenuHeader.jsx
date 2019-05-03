import React from "react";
import style from "styled-components";
import logo from "../../resources/img/awaymoFullWhite.svg"


const MenuHeaderStyle = style.div`
  grid-area: MenuHeader;
  display: flex; 
  
  img {
    display: flex;
    flex: 1;
  }
`;

// class MenuHeader extends Component {
//   render() {
//     return (
//       <MenuHeaderStyle>
//         <img src={logo} alt="Logo" />
//         <i className="fas fa-times"/>
//       </MenuHeaderStyle>  
//     );
//   }
// }


const MenuHeader = ({ className, onClick }) => {  
  return (
    <MenuHeaderStyle>
      <img src={logo} alt="Logo" />
      <i className="fas fa-times" onClick={onClick}/>
    </MenuHeaderStyle>  
  );
};

export default MenuHeader;
