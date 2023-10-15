import { createTheme } from "@mui/material/styles";

// import PALETTE from "./color";
import customComponents from "./components";
import customPalette from "./palette";

const theme = createTheme();

const shadows = theme.shadows;
// shadows[0] = `0 0 4px 2px ${PALETTE.boxShadowGreyLight}`;

const lightThemeOptions = {
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },
  palette: customPalette,
  components: customComponents,
  shape: { borderRadius: 8 },
  shadows,
};

export default createTheme(lightThemeOptions);
