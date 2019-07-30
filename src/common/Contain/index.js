import React, { Component } from "react";
import { Contained, Leftbox, Rightbox, Containbox } from "./containstyle";
import Left from "./../Left";
import Right from "./../Right";
import { Box, Container, Grid } from "@material-ui/core";
class Contain extends Component {
  render() {
    return (
      <Contained>
        <Box>
          <Container>
            <Grid container>
              <Containbox>
                <Leftbox>
                  <Left />
                </Leftbox>
                <Rightbox>
                  <Right />
                </Rightbox>
              </Containbox>
            </Grid>
          </Container>
        </Box>
      </Contained>
    );
  }
}

export default Contain;
