import Grid from "@mui/material/Grid/Grid";
import styled from "styled-components";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

export const Notifications = () => {
  return (
    <div>
      <NotificationHeader>Notification</NotificationHeader>
      <NotificationCategoryblock>
        <NotificationSubHeader>
          Account and Services Alerts
        </NotificationSubHeader>
        <NotificationType container>
          <Grid item>
            <NotificationTypeLabel>
              Send me Push Notifications
            </NotificationTypeLabel>
            <NotificationTypeStatus>Off</NotificationTypeStatus>
          </Grid>
          <Grid item>
            <ToggleOffOutlinedIcon fontSize="large" />
          </Grid>
        </NotificationType>
        <NotificationType container>
          <Grid item>
            <NotificationTypeLabel>Send me Emails</NotificationTypeLabel>
            <NotificationTypeStatus>Off</NotificationTypeStatus>
          </Grid>
          <Grid item>
            <ToggleOffOutlinedIcon fontSize="large" />
          </Grid>
        </NotificationType>
        <NotificationType container>
          <Grid item>
            <NotificationTypeLabel>Send me SMS</NotificationTypeLabel>
            <NotificationTypeStatus>Off</NotificationTypeStatus>
          </Grid>
          <Grid item>
            <ToggleOffOutlinedIcon fontSize="large" />
          </Grid>
        </NotificationType>
      </NotificationCategoryblock>
      <div>
        <NotificationSubHeader>Marketing and Promotion</NotificationSubHeader>
        <NotificationType container>
          <Grid item>
            <NotificationTypeLabel>
              Send me Push Notifications
            </NotificationTypeLabel>
            <NotificationTypeStatus>Off</NotificationTypeStatus>
          </Grid>
          <Grid item>
            <ToggleOffOutlinedIcon fontSize="large" />
          </Grid>
        </NotificationType>
        <NotificationType container>
          <Grid item>
            <NotificationTypeLabel>Send me Emails</NotificationTypeLabel>
            <NotificationTypeStatus>Off</NotificationTypeStatus>
          </Grid>
          <Grid item>
            <ToggleOffOutlinedIcon fontSize="large" />
          </Grid>
        </NotificationType>
        <NotificationType container>
          <Grid item>
            <NotificationTypeLabel>Send me SMS</NotificationTypeLabel>
            <NotificationTypeStatus>Off</NotificationTypeStatus>
          </Grid>
          <Grid item>
            <ToggleOffOutlinedIcon fontSize="large" />
          </Grid>
        </NotificationType>
      </div>
    </div>
  );
};

export const NotificationHeader = styled.div`
  font-size: 1.4rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8e8e8;
`;

export const NotificationCategoryblock = styled.div`
  padding: 10px 0;
`;

export const NotificationSubHeader = styled.div`
  font-size: 1.2rem;
  margin: 30px 0;
`;

export const NotificationType = styled(Grid)`
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 10px;
`;
export const NotificationTypeLabel = styled.div`
  font-size: 0.8rem;
  padding-bottom: 6px;
`;

export const NotificationTypeStatus = styled.div`
  font-size: 1rem;
`;
