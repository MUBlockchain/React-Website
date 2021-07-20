import React from "react";
import { Link, scroller } from "react-scroll";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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

  const menuItems = [
    {
      menuTitle: "About",
      sectionID: "About",
    },
    {
      menuTitle: "Leadership",
      sectionID: "Leadership",
    },
    {
      menuTitle: "Affiliations",
      sectionID: "Affiliations",
    },
    {
      menuTitle: "Schedule",
      sectionID: "Contact Us",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MUBC
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
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
                {menuItems.map((menuItem, index) => {
                  const { menuTitle, sectionID } = menuItem;
                  return (
                    <MenuItem key={index}>
                      <Link
                        activeClass="active"
                        to={sectionID}
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        {menuTitle}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            menuItems.map((menuItem, index) => {
              const { menuTitle, sectionID } = menuItem;
              return (
                <Tab
                  key={index}
                  onClick={() => scrollToSection(sectionID)}
                  label={menuTitle}
                />
              );
            })
          )}
          <IconButton color="secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
