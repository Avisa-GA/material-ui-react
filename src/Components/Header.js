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

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item sm={6} style={{ border: "1px solid #fff" }}>
              <InputBase />
            </Grid>
            <Grid item sm={6} style={{ border: "1px solid #000" }}>
              <IconButton>
                <Badge badgeContent={4}>
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={2}>
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
