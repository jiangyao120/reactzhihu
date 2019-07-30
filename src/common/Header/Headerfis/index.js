import React from "react";
import {
  Box,
  Container,
  Hidden,
  Grid,
  IconButton,
  InputBase,
  Button
} from "@material-ui/core";
import { useStyles } from "./../style"
import {
  Headwrap,
  Headtitle,
  Headright,
  Headul,
  Headimg,
  Headinput,
  Headbot
} from "./../headerstyle";

const Headerfis = (props) => {
  const classes = useStyles();
  return(
    <Box className={classes.box}>
      <Container>
        <Grid container>
          <Hidden only="xs">
            <Grid item xs={12}>
              <Headwrap>
                <Headtitle>
                  <a href="/">
                    <Headimg alt="知乎" />
                  </a>
                </Headtitle>
                <Headul>
                  <li>
                    <a href="">首页</a>
                  </li>
                  <li>
                    <a href="">发现</a>
                  </li>
                  <li>
                    <a href="">等你回答</a>
                  </li>
                </Headul>
                <Headinput>
                  <div style={{position:'relative'}}>
                    <InputBase
                      placeholder="Search Google Maps"
                      className={classes.input}
                      style={
                        props.input
                          ? { width: "400px", background: "#fff" }
                          : { width: "326px", background: "#f6f6f6" }
                      }
                      onClick={props.inputchange}
                      onBlur={props.inputblur}
                    />
                    <Headbot>
                      <IconButton />
                    </Headbot>
                  </div>
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={
                      props.input ? { opacity:'0',display:'none'} : { opacity:'1' }
                    }
                  >
                    提问
                  </Button>
                </Headinput>
                <Headright />
              </Headwrap>
            </Grid>
          </Hidden>
          <Hidden only={["sm", "md", "lg"]}>
            <Grid item xs={12} />
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
};
export default Headerfis;
