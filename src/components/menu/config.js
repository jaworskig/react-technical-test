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
  borderColor1: "#fff",
  borderColor2: "#f18990",
  locale: "en-GB",
  currency: "GBP"
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


export const iconList = [
  'faUserCircle',
  'faInfoCircle',
  'faCreditCar',
  'faLifeRing',
  'faSignOutAlt',
  'faQuestionCircle',
  'faPhone',
  'faPlane'
];

export const mainMenuData = [
  {
    text: "Profile",
    link: "#0",
    icon: "user-circle",
    display: disType.MOBILE | disType.PC
  },
  {
    text: "My Bookings",
    link: "#0",
    icon: "plane",
    display: disType.MOBILE | disType.PC
  },
  {
    text: "My Payments",
    link: "#0",
    icon: "credit-card",
    display: disType.MOBILE | disType.PC
  },
  { text: "Support", link: "#0", icon: "life-ring", display: disType.MOBILE },
  { text: "Contact Us", link: "#0", icon: "phone", display: disType.MOBILE },
  {
    text: "Log Out",
    link: "#0",
    icon: "sign-out-alt",
    display: disType.MOBILE | disType.PC
  },
  {
    text: "About",
    link: "#0",
    icon: "question-circle",
    display: disType.MOBILE
  },
  { text: "FAQ", link: "#0", icon: "info-circle", display: disType.MOBILE },
  { text: "Resume Application", link: "#0", icon: "info-circle", display: disType.PC }
];

export const sideMenuData = [
  { text: "Home", link: "#0" },
  { text: "Flights", link: "#0" },
  { text: "", link: "#0" },
  { text: "About Us", link: "#0" },
  { text: "FAQ", link: "#0" },
  { text: "Support", link: "#0" },
  { text: "Profile", link: "#0" },
  { text: "Contact Us", link: "#0" }
];
