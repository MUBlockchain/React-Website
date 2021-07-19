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
  Button,
  useMediaQuery,
  Tab,
  Tabs,
} from "@material-ui/core";

import { Menu as MenuIcon, TableChartRounded } from "@material-ui/icons";

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
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
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
      menuTitle: "Affiliations",
      sectionID: "Affiliations",
    },
    {
      menuTitle: "Leadership",
      sectionID: "Leadership",
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
                {menuItems.map((menuItem) => {
                  const { menuTitle, sectionID } = menuItem;
                  return (
                    <MenuItem>
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
            menuItems.map((menuItem) => {
              const { menuTitle, sectionID } = menuItem;
              return (
                <Button onClick={() => scrollToSection(sectionID)}>
                  {menuTitle}
                </Button>
              );
            })

            // <Tabs>
            //   <Tab label="About" value="/" component={Link} to="/" />
            //   <Tab
            //     value="/affiliations"
            //     label="Affiliations"
            //     component={Link}
            //     to="/affiliations"
            //   />
            //   <Tab
            //     value="/leadership"
            //     label="Leadership"
            //     component={Link}
            //     to="/leadership"
            //   />
            // </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
