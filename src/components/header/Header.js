import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          component={NavLink}
          exact
          to="/"
          color="inherit"
          aria-label="home"
        >
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
