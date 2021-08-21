import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
});
export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container>
            <Grid item>
              <InputBase />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={2} color="primary">
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
