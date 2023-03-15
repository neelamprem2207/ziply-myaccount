import Grid from "@mui/material/Grid";
import {
  InnerTab,
  InnerTabHeader,
} from "../../../pages/account/account.styles";

export const ManagePaymentMethod = () => {
  return (
    <InnerTab>
      <InnerTabHeader direction="row">Manage Payment Method</InnerTabHeader>
      <Grid item sm={12} md={6}></Grid>
    </InnerTab>
  );
};
