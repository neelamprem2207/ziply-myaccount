import { Grid, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";

import {
  GridContainer,
  InputLabel,
  InputLabelRight,
  LabelGrid,
  InnerTab,
  InnerTabHeader,
  StyledInput,
  InnerTabLogo,
} from "../../../pages/account/account.styles";
import styled from "styled-components";

export const KeyAccountInfo = () => {
  return (
    <div>
      <InnerTab>
        <InnerTabHeader direction="row">
          <InnerTabLogo>
            <RequestQuoteOutlinedIcon color="success" />
          </InnerTabLogo>
          <span>Key Account Info</span>
        </InnerTabHeader>
        <GridContainer container spacing={3}>
          <Grid item sm={12} md={6}>
            <InputLabel>Account Number</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputLabel>PIN</InputLabel>
            <StyledInput type="text" />
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container>
              <UnderlinedLabel item>Switch Account</UnderlinedLabel>
              <InputLabelRight item>
                <ArrowForwardIosIcon />
              </InputLabelRight>
            </LabelGrid>
          </Grid>
          <Grid item sm={12} md={6}>
            <LabelGrid container>
              <UnderlinedLabel item>Manage Authorised User</UnderlinedLabel>
              <Grid item>
                <ArrowForwardIosIcon />
              </Grid>
            </LabelGrid>
          </Grid>
        </GridContainer>
      </InnerTab>
      <InnerTab>
        <InnerTabHeader direction="row">
          <span>Linked Account</span>
        </InnerTabHeader>
        <Grid container>
          <AccountCard item xs={5}>
            <RowStackName direction="row">
              <div>Victoria RobertSon</div>
              <div>Select</div>
            </RowStackName>
            <RowStack direction="row">
              <div>Account Number</div>
              <div>PIN</div>
            </RowStack>
            <RowStack direction="row">
              <div>2015-2536-2418</div>
              <div>0247</div>
            </RowStack>
          </AccountCard>
        </Grid>
      </InnerTab>
    </div>
  );
};

const UnderlinedLabel = styled(Grid)`
  text-decoration: underline;
`;

// const LinkedAccountIndividualCard = styled(Grid)``;

const RowStackName = styled(Stack)`
  justify-content: space-between;
  padding: 20px;
`;

const RowStack = styled(RowStackName)`
  padding: 6px 20px;
`;

const AccountCard = styled(Grid)`
  border: 2px solid black;
  margin: 10px 20px;
`;
