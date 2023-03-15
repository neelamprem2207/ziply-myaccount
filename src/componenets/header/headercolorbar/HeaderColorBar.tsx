import styled from "styled-components";
import { Grid } from "@mui/material";
import { ColorBarProps } from "../../../interfaces/GlobalInterfaces";

export const HeaderColorBar = () => {
  return (
    <>
      <ColorBar container>
        <ColorBarEach item bgcolor="green" xs={6}></ColorBarEach>
        <ColorBarEach item bgcolor="skyblue" xs={4}></ColorBarEach>
        <ColorBarEach item bgcolor="darkblue" xs={2}></ColorBarEach>
      </ColorBar>
    </>
  );
};

const ColorBar = styled(Grid)`
  height: 6px;
  margin: auto;
  border-radius: 3px;
  overflow: hidden;
`;

const ColorBarEach = styled(Grid)<ColorBarProps>`
  background: ${({ bgcolor }) => bgcolor};
`;
