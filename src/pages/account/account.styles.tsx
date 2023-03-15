import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";

export const InnerTab = styled.div`
  width: 60%;
  margin: auto;
`;

export const InnerTabHeader = styled(Stack)`
  padding: 20px 0px;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4rem;
`;

export const InnerTabLogo = styled(Avatar)`
  border: 2px solid green;
  margin-right: 10px;
  &.MuiAvatar-root {
    background: transparent;
  }
`;

export const GridContainer = styled(Grid)`
  padding: 0;
`;

export const InputLabel = styled.div`
  padding: 5px;
  font-size: 0.8rem;
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 40;
  font-size: 1.1rem;
  padding: 10px 10px;
  border-radius: 8;
  outline: none;
  border: 2px solid #a1a1a2;
  border-radius: 5px;
`;

export const LabelGrid = styled(Grid)`
  justify-content: space-between;
  padding: 10px 0 5px 5px;
  font-size: 1rem;
  color: #026ce3;
  cursor: pointer;
  &.MuiGrid-root {
    width: 90%;
  }
`;

export const InputLabelRight = styled(Grid)`
  font-size: 0.8rem;
`;
