import avatar_img from "../../resources/img/avatar.png";

export const disType = {
  MOBILE: 1,
  PC: 2,
  OTHER: 4
};

export const menuSettings = {
  mobileWidth: 600,
  backgroundColor: "#ee5f63",
  color: "#fff",
  borderColor: "#fff"
};

export const userInfoData = {
    firstName: "Dominik",
    lastName: "Biel",
    fullDesc: "Available Balance",
    shortDesc: "Available",
    balance: 1500,
    image: avatar_img
};

export const footerData = {
  contact: "We're here to help",
  phone: "+44(0)20 8050  3459",
  email: "support@awaymo.com"
};

export const mainMenuData = [
  { text: "Profile", link: "#0", icon: "fas fa-user-circle", display: disType.MOBILE | disType.PC },
  { text: "My Bookings", link: "#0", icon: "fas fa-user-circle",display: disType.MOBILE | disType.PC },
  { text: "My Payments",link: "#0", icon: "fas fa-user-circle", display: disType.MOBILE | disType.PC },
  { text: "Support",link: "#0", icon: "fas fa-user-circle", display: disType.MOBILE },
  { text: "Contact Us", link: "#0", icon: "fas fa-user-circle",display: disType.MOBILE },
  { text: "Log Out",link: "#0", icon: "fas fa-user-circle", display: disType.MOBILE | disType.PC },
  { text: "About",link: "#0", icon: "fas fa-user-circle", display: disType.MOBILE },
  { text: "FAQ", link: "#0", icon: "fas fa-user-circle",display: disType.MOBILE },
  { text: "Resume Application", link: "#0", icon: "fas fa-user-circle",display: disType.PC }
];
