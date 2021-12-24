import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import theme from "./modules/theme";

import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to={"/signup"} />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </MUIThemeProvider>
    </div>
  );
}

export default App;
