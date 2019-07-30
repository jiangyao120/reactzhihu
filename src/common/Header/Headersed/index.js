import React from "react";
import { withRouter, NavLink  } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Button
} from "@material-ui/core";

import { Headwrap, Headtitle, Headimg, Headbot } from "./../headerstyle";
import { Headul, Headright, Headtibox } from "./style";
import { useStyles } from "./../style";
const Headersed = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container>
        <Grid container>
          <Headwrap>
            <Headtibox>
              <Headtitle>
                <a href="/">
                  <Headimg alt="知乎" />
                </a>
              </Headtitle>
              <Headul>
                  <li>
                    <NavLink to="/">推荐</NavLink>
                  </li>
                  <li>
                    <NavLink to="/follow">关注</NavLink>
                  </li>
                  <li>
                    <NavLink to="/hot">热榜</NavLink>
                  </li>
              </Headul>
            </Headtibox>
            <Headright>
              <div style={{ position: "relative" }}>
                <InputBase
                  placeholder="Search Google Maps"
                  className={classes.input}
                  style={{ width: 296 }}
                />
                <Headbot>
                  <IconButton />
                </Headbot>
              </div>
              <Button variant="contained" className={classes.button}>
                提问
              </Button>
            </Headright>
          </Headwrap>
        </Grid>
      </Container>
    </Box>
  );
};
export default withRouter(Headersed);
