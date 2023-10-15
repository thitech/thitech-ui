import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppRoutes from "./routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
