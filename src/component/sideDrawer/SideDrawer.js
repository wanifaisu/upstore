import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReportIcon from "@mui/icons-material/Report";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ExploreIcon from "@mui/icons-material/Explore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "@mui/material";
import CatagoriesMenu from "../catagoriesMenu/CatagoriesMenu";
import Upsell from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
const drawerWidth = 205;
const list = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  margin: theme.spacing(9, 0, 0, 0),

  [theme.breakpoints.down("xs")]: {
    margin: theme.spacing(17, -2, 0, -1),
  },
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "#ECF3FF",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#ECF3FF",
  width: `calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(9)} + 1px)`,
  // },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  opacity: "0.7px",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#ECF3FF",
  height: "6rem",
  opacity: "0.7px",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    height: "6rem",
    backgroundColor: "#F0F3FD",
    opacity: "0.7px",
    color: "black",
    justifyContent: "center",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,

  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F0F3FD", height: "100vh" }}>
      <AppBar elevation={0} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "primary.main", flex: 5 }} />
          </IconButton>
          <input
            type="text"
            placeholder="Search.."
            style={{
              borderRadius: "13px",
              height: "30px",
              width: "300px",
            }}
          />

          <img
            src={Upsell}
            alt="img"
            style={{
              width: "70px",
              height: "30px",
              display: "block",
              float: "left",
            }}
          />
          {/* <Box sx={{ float: "right" }}>
            <CatagoriesMenu />
          </Box> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={() => {
              handleDrawerClose();
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItem sx={{ height: "36px", color: "#C7CADA" }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="ANALYTICS" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem sx={{ height: "36px", color: "#C7CADA" }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="CONTENT" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText primary="Catagories" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <PaymentsIcon />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem sx={{ height: "36px", color: "#C7CADA" }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="CUSTUMIZATION" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Estimates" />
          </ListItem>

          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <DeliveryDiningIcon />
            </ListItemIcon>
            <ListItemText primary="Delivery Challans" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Timesheet" />
          </ListItem>
          <ListItem sx={{ height: "36px" }}>
            <ListItemIcon onClick={handleDrawerOpen}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <br />
    </Box>
  );
}
