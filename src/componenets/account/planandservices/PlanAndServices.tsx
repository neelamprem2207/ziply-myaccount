import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Grid } from "@mui/material";
import {
  GridContainer,
  InputLabelRight,
  LabelGrid,
  InnerTabHeader,
  StyledInput,
  InnerTab,
  InnerTabLogo,
} from "../../../pages/account/account.styles";
import styled from "styled-components";

export const PlanAndServices = () => {
  return (
    <div>
      <InnerTab>
        <InnerTabHeader direction="row">
          <InnerTabLogo>
            <RoomServiceIcon color="success" />
          </InnerTabLogo>
          <span>Plan & Services</span>
        </InnerTabHeader>
        <GridContainer container spacing={3}>
          <Grid item sm={12} md={6}>
            <LabelGrid container>
              <Grid item>
                <GreenColorLabel>Ziply Fiber Green Plan</GreenColorLabel>
              </Grid>
              <InputLabelRight item>Plan Details</InputLabelRight>
            </LabelGrid>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container>
              <Grid item>Account Number</Grid>
              <InputLabelRight item>Unlink</InputLabelRight>
            </LabelGrid>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container>
              <Grid item>Link Another Account</Grid>
              <InputLabelRight item>
                <ArrowForwardIosIcon />
              </InputLabelRight>
            </LabelGrid>
          </Grid>
        </GridContainer>
      </InnerTab>
    </div>
  );
};

const GreenColorLabel = styled.label`
  color: #008600;
`;
