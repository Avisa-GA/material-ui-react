import {
  CssBaseline,
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#7986cb",
    },
    secondary: {
      main: "#f50057",
      light: "#ff4081",
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
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
