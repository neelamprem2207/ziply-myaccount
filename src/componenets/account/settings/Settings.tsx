import Grid from "@mui/material/Grid";
import styled from "styled-components";
import {
  InnerTab,
  InnerTabHeader,
  InnerTabLogo,
} from "../../../pages/account/account.styles";
import { Notifications } from "./notifications/Notifications";
import { PrivacyCenter } from "./privacycenter/PrivacyCenter";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export const Settings = () => {
  return (
    <>
      <InnerTabSettings>
        <InnerTabHeader direction="row">
          <InnerTabLogo>
            <SettingsSuggestIcon color="success" />
          </InnerTabLogo>
          <span>Settings</span>
        </InnerTabHeader>
        <SettingsGrid container>
          <NotificationGrid item sm={11} md={5}>
            <Notifications />
          </NotificationGrid>
          <Grid item sm={12} md={6}>
            <Grid container direction="column">
              <NotificationGrid item>
                <PrivacyCenter />
              </NotificationGrid>
              <NotificationGrid item>
                <Header>Face ID/Touch ID</Header>
                <div>Lorem ipsum </div>
              </NotificationGrid>
            </Grid>
          </Grid>
        </SettingsGrid>
      </InnerTabSettings>
    </>
  );
};

const InnerTabSettings = styled(InnerTab)`
  width: 80%;
`;

export const SettingsGrid = styled(Grid)`
  padding: 10px 0;
`;

export const NotificationGrid = styled(Grid)`
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 10px;

  &.MuiGrid-root {
    padding: 40px;
    margin: 20px;
  }
`;
const Header = styled.div`
  font-size: 1.4rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8e8e8;
`;
