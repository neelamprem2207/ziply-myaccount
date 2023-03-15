import { NavTabs } from "../navtabs/NavTabs";
import { TabList } from "../../interfaces/GlobalInterfaces";
import { HeaderColorBar } from "./headercolorbar/HeaderColorBar";
import PersonIcon from "@mui/icons-material/Person";
import {
  ColoredText,
  CurrentPage,
  HeaderNavBarGrid,
  MainHeader,
  TopDiv,
  Username,
  UsernameDiv,
  ZiplyLogo,
} from "./header.styles";

export const Header = () => {
  const headerNavTabsList: TabList[] = [
    {
      label: "Home",
      value: "home",
      path: "/home",
    },
    {
      label: "Billing",
      value: "billing",
      path: "/billing",
    },
    {
      label: "Account",
      value: "account",
      menuItem: [
        {
          item: "Key Account Info",
          path: "/account/keyaccountinfo",
        },
        {
          item: "Profile",
          path: "/account/profile",
        },
        {
          item: "Billing Preference",
          path: "/account/billingpreference",
        },
        {
          item: "Plan and Services",
          path: "/account/planandservices",
        },
        {
          item: "Settings",
          path: "/account/settings",
        },
      ],
    },
    {
      label: "Notifications",
      value: "notification",
      path: "/notification",
    },
    {
      label: "Support",
      value: "support",
      path: "/support",
    },
  ];

  const ImgUrl = require("../../assets/ziplyfiber.png");
  return (
    <>
      <HeaderColorBar />
      <MainHeader>
        <TopDiv>
          <span>Services</span>
          <ColoredText>My Account</ColoredText>
        </TopDiv>
        <TopDiv>
          <UsernameDiv>
            <PersonIcon />
            <Username>Welcome,Prem</Username>
          </UsernameDiv>
          <span>Sign Out</span>
        </TopDiv>
      </MainHeader>
      <HeaderNavBarGrid container>
        <ZiplyLogo src={ImgUrl} alt="Ziply Fiber" />
        <NavTabs tabsList={headerNavTabsList} />
      </HeaderNavBarGrid>
      <CurrentPage>Account &gt; Profile</CurrentPage>
    </>
  );
};
