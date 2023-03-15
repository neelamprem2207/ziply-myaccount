import React from "react";
import { Grid, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TabList } from "../../interfaces/GlobalInterfaces";

type TabsList = {
  tabsList: TabList[];
};

export const NavTabs = ({ tabsList }: TabsList) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item>
      <NavGrid container>
        {tabsList.map((tab) => {
          return (
            <Grid item>
              {tab.path ? (
                <NavLink to={tab.path} key={tab.value}>
                  {tab.label}
                </NavLink>
              ) : (
                <div>
                  <NavLink
                    aria-controls="menu"
                    aria-haspopup="true"
                    to="/account"
                    onMouseEnter={handleOpenMenu}
                    color="inherit"
                  >
                    {tab.label}
                  </NavLink>
                  <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                  >
                    {tab.menuItem?.map((item) => {
                      return (
                        <MenuItem component={Link} to={item.path}>
                          {item.item}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </div>
              )}
            </Grid>
          );
        })}
      </NavGrid>
    </Grid>
  );
};

const NavGrid = styled(Grid)`
  justify-content: flex-start;
`;

const NavLink = styled(Link)`
  margin-right: 30px;
  padding-bottom: 25px;
  font-size: 1.1rem;
  text-decoration: none;
  color: black;
  position: relative;
  &:hover {
    color: #008600;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 10px;
    bottom: 0;
    left: 0;
    background-color: #008600;
    border-radius: 5px;
    transform: scaleX(0);
    transition: transform ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
