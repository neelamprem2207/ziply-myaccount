import { Grid, InputLabel } from "@mui/material";
import {
  GridContainer,
  InnerTab,
  InnerTabHeader,
  StyledInput,
} from "../../../pages/account/account.styles";
import { StyledButton } from "./BillingPreference";

export const ManageAutoPay = () => {
  return (
    <InnerTab>
      <InnerTabHeader direction="row">Manage Auto Pay</InnerTabHeader>
      <InnerTabHeader direction="row" fontSize="1rem">
        Auto Pay
      </InnerTabHeader>
      <InnerTabHeader direction="row" fontSize="0.8rem">
        Manage Auto Pay
      </InnerTabHeader>
      <GridContainer container spacing={3}>
        <Grid item sm={12} md={6}>
          <InputLabel>Account Number</InputLabel>
          <StyledInput type="text" />
        </Grid>
        <Grid item sm={12} md={6}>
          <InputLabel>Payment Method</InputLabel>
          <StyledInput type="text" />
        </Grid>
        <Grid item sm={12} md={6}>
          <InputLabel>Payment to be applied</InputLabel>
          <StyledInput type="text" />
        </Grid>
        <Grid item sm={12} md={6}>
          <InputLabel>Amount</InputLabel>
          <StyledInput type="texttext" />
        </Grid>
        <Grid item sm={12} md={6}>
          <StyledButton variant="contained">Edit Auto Pay</StyledButton>
        </Grid>
      </GridContainer>
      <Grid item sm={12} md={6}></Grid>
    </InnerTab>
  );
};
