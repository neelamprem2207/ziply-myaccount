import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FeedIcon from "@mui/icons-material/Feed";
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
import { Button } from "@mui/material";
import { ManageAutoPay } from "./ManageAutoPay";
import { ManagePaymentMethod } from "./ManagePaymentMethod";

export const BillingPreference = () => {
  const [isAutoPayOpen, setIsAutoPayOpen] = useState(false);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);

  const handleManageAutoPay = () => {
    setIsPaymentMethodOpen(false);
    setIsAutoPayOpen(!isAutoPayOpen);
  };

  const handleManagePaymentMethod = () => {
    setIsAutoPayOpen(false);
    setIsPaymentMethodOpen(!isPaymentMethodOpen);
  };

  return (
    <div>
      <InnerTab>
        <InnerTabHeader direction="row">
          <InnerTabLogo>
            <FeedIcon color="success" />
          </InnerTabLogo>
          <span>Billing Preference</span>
        </InnerTabHeader>
        <GridContainer container spacing={3}>
          <Grid item sm={12} md={6}>
            <InputLabel>Address Line 1</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputLabel>Address Line 2</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputLabel>State</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputLabel>ZipCode</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item xs={12}>
            <StyledDivider />
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container>
              <InputLabel>Auto-Pay</InputLabel>
            </LabelGrid>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container>
              <Grid item>Paperless Billing</Grid>
              <InputLabelRight item>Turn On</InputLabelRight>
            </LabelGrid>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container onClick={handleManageAutoPay}>
              <Grid item>Manage Auto-Pay</Grid>
              <InputLabelRight item>
                <ArrowForwardIosIcon />
              </InputLabelRight>
            </LabelGrid>
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container onClick={handleManagePaymentMethod}>
              <Grid item>Manage Payment Method</Grid>
              <InputLabelRight item>
                <ArrowForwardIosIcon />
              </InputLabelRight>
            </LabelGrid>
          </Grid>
        </GridContainer>
      </InnerTab>
      {isAutoPayOpen && <ManageAutoPay />}
      {isPaymentMethodOpen && <ManagePaymentMethod />}
    </div>
  );
};

export const StyledButton = styled(Button)`
  width: 60%;
  &.MuiButtonBase-root {
    border-radius: 25px;
    padding: 10px;
  }
`;

const StyledDivider = styled(Divider)`
  padding-right: 12px;
`;
