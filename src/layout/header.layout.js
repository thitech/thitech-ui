import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
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

  const routeToHome = useCallback(() => {
    handleRouting("/");
  }, [handleRouting]);

  return (
    <>
      <AppBar position='sticky' component='nav'>
        <Toolbar sx={{ paddingLeft: { sm: 0 } }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component='img'
            sx={{
              width: 200,
              height: 60,
              objectFit: "cover",
              objectPosition: "25% 50%",
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              cursor: "pointer",
            }}
            onClick={routeToHome}
            alt='Thitech icon'
            src='/assets/logo.png'
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {navigationList.map(({ title, routePath }) => (
              <Button
                key={routePath}
                sx={{ color: "#fff", fontWeight: 700 }}
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
