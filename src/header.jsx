import React from "react";
import { AppBar, Toolbar, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";

const UseStyles = makeStyles({
  TypographyStyles: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

export default function Header() {
  const Classes = UseStyles();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid item container xs={6} sm={6} direction="row-reverse">
          <Typography className={Classes.TypographyStyles}>
            Daily offers
          </Typography>
          <Typography className={Classes.TypographyStyles}>Help</Typography>
          <Typography className={Classes.TypographyStyles}>Sells</Typography>
          <Typography className={Classes.TypographyStyles}>
            <Link
              href="#"
              onClick={() => {
                console.info("sign in");
              }}>
              Sign in
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={1} sm={4}>
          {/* empty space */}
        </Grid>
        <Grid item container xs={5} sm={2} direction="row">
          <ShoppingCartIcon className={Classes.flex}></ShoppingCartIcon>
          <NotificationsIcon></NotificationsIcon>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
