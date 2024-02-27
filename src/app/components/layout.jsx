"use client";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleCollaps = () => {
    setIsCollapse(!isCollapse);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          LOGO
        </Typography>
      </Toolbar>

      <Divider />
      <List>
        {["Dashboard", "Analysis", "Send email", "Drafts"].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              className={
                pathName.startsWith("/" + text.toLocaleLowerCase())
                  ? "text-sky-500 bg-slate-100"
                  : "text-gray-500"
              }
              onClick={() => router.push("/" + text.toLocaleLowerCase())}
            >
              <ListItemButton>
                <ListItemIcon
                  className={
                    pathName.startsWith("/" + text.toLocaleLowerCase())
                      ? "text-sky-500 bg-slate-100"
                      : "text-gray-500"
                  }
                >
                  {index === 0 && <DashboardIcon />}
                  {index === 1 && <AnalyticsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}

        <ListItem
          disablePadding
          onClick={handleCollaps}
          className={
            pathName.startsWith("/help")
              ? "text-sky-500 bg-slate-100"
              : "text-gray-500"
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Help"} />
            {isCollapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              className={
                pathName.startsWith("/" + text.toLocaleLowerCase())
                  ? "text-sky-500 bg-slate-100"
                  : "text-gray-500"
              }
            >
              <ListItemButton>
                <ListItemIcon
                  className={
                    pathName.startsWith("/" + text.toLocaleLowerCase())
                      ? "text-sky-500 bg-slate-100"
                      : "text-gray-500"
                  }
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
  children: PropTypes.array,
};

export default Layout;
