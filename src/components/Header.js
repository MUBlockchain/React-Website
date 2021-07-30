import React from "react";
import { scroller } from "react-scroll";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Tab,
} from "@material-ui/core";

import { Menu as MenuIcon, Brightness4, Brightness7 } from "@material-ui/icons";

import logo from "./logo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const { darkMode, setDarkMode } = props;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleClickAndClose = (sectionID) => {
    setAnchorEl(null);
    scrollToSection(sectionID);
  };

  const sections = [
    {
      menuTitle: "About",
      sectionID: "About",
    },
    {
      menuTitle: "Affiliations",
      sectionID: "Affiliations",
    },
    {
      menuTitle: "Calendar",
      sectionID: "Calendar",
    },
    {
      menuTitle: "Course",
      sectionID: "Course",
    },
    {
      menuTitle: "Crypto Committee",
      sectionID: "Crypto Committee",
    },
    {
      menuTitle: "Leadership",
      sectionID: "Leadership",
    },
    {
      menuTitle: "Newsletter",
      sectionID: "Newsletter",
    },
  ];

  const tabs = sections.map((menuItem, index) => {
    const { menuTitle, sectionID } = menuItem;
    return (
      <Tab
        key={index}
        onClick={() => scrollToSection(sectionID)}
        label={<Typography variant="body1">{menuTitle}</Typography>}
      />
    );
  });

  const menuItems = sections.map((menuItem, index) => {
    const { menuTitle, sectionID } = menuItem;
    return (
      <MenuItem onClick={() => handleClickAndClose(sectionID)} key={index}>
        {menuTitle}
      </MenuItem>
    );
  });

  const darkLightModeButton = (
    <IconButton color="secondary" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <img src={logo} width="auto" height="100" alt="MUBC Logo" />
              <div style={{ marginLeft: "auto" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems}
                </Menu>
                {darkLightModeButton}
              </div>
            </>
          ) : (
            <>
              <img src={logo} width="auto" height="100" alt="MUBC Logo" />
              {tabs}
              {darkLightModeButton}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
