import { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Grid } from "@mui/material";
import {
  GridContainer,
  InputLabel,
  InputLabelRight,
  LabelGrid,
  InnerTabHeader,
  StyledInput,
  InnerTab,
  InnerTabLogo,
} from "../../../pages/account/account.styles";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangePassword = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <InnerTab>
        <InnerTabHeader direction="row">
          <InnerTabLogo>
            <PersonIcon color="success" />
          </InnerTabLogo>
          <span>Profile</span>
        </InnerTabHeader>
        <GridContainer container spacing={3}>
          <Grid item sm={12} md={6}>
            <InputLabel>Phone Number</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputLabel>Email Address</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputLabel>Username</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputLabel>Password</InputLabel>
            <StyledInput type="password" />
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container onClick={handleChangePassword}>
              <Grid item>Change Password</Grid>
              <InputLabelRight item>
                <ExpandMoreIcon />
              </InputLabelRight>
            </LabelGrid>
          </Grid>
        </GridContainer>
      </InnerTab>
      {isOpen && (
        <InnerTab>
          <InnerTabHeader direction="row">Change Password</InnerTabHeader>
          <GridContainer container spacing={3}>
            <Grid item sm={12} md={6}>
              <InputLabel>Enter Your Current Password</InputLabel>
              <StyledInput type="password" />
            </Grid>
            <Grid item sm={12} md={6}>
              <InputLabel>Enter New Password</InputLabel>
              <StyledInput type="password" />
            </Grid>
            <Grid item sm={12} md={6}>
              <InputLabel>Re-enter New Password</InputLabel>
              <StyledInput type="password" />
            </Grid>
          </GridContainer>
          <Grid item sm={12} md={6}>
            <ButtonsFlex>
              <StyledButton variant="contained">Save</StyledButton>
              <StyledButton variant="contained" disabled>
                Cancel
              </StyledButton>
            </ButtonsFlex>
          </Grid>
        </InnerTab>
      )}
    </div>
  );
};

export const ButtonsFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  margin: 20px 0;
`;

export const StyledButton = styled(Button)`
  width: 40%;

  &.MuiButtonBase-root {
    border-radius: 25px;
    padding: 10px;
  }
`;
