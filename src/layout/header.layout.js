import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const container = window !== undefined ? () => window.document.body : undefined;

const Header = () => {
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState();

  const navigationList = useMemo(
    () => [
      { title: "Home", routePath: "/" },
      { title: "About us", routePath: "/about" },
      { title: "Contact", routePath: "/contact" },
    ],
    []
  );

  const handleRouting = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  const handleDrawerToggle = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  return (
    <>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navigationList.map(({ title, routePath }) => (
              <Button
                key={routePath}
                sx={{ color: "#fff" }}
                onClick={() => {
                  handleRouting(routePath);
                }}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={openDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              // width: drawerWidth,
            },
          }}
        >
          HI
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
