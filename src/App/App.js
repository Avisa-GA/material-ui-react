import {
  CssBaseline,
  ThemeProvider,
  makeStyles,
  createTheme,
} from "@material-ui/core";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Employees from "../pages/Employees/Employees";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#7986cb",
    },
    secondary: {
      main: "#f50057",
      light: "#ff4081",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "5px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
