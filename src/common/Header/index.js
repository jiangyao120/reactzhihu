import React, { Component } from "react";
import { connect } from "react-redux";
import Headerfis from "./Headerfis";
import Headersed from "./Headersed";
import { Headers, Headerbox, HeaderBox ,Headinputbox} from "./headerstyle";
import {
  createaction
} from "./store";
class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.bindScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindScroll.bind(this));
  }
  bindScroll(event) {
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);
    if (scrollTop >= 60) {
      this.props.scrollbotaction();
    }
    if (scrollTop <= 60) {
      this.props.scrolltopaction();
    }
  }
  render() {
    return (
      <HeaderBox>
        <Headers>
          <Headerbox style={this.props.hidden ? { top: "-56px" } : { top: 0 }}>
            <Headerfis hidden={this.props.hidden} 
            input={this.props.input} 
            inputchange={this.props.inputchange}
            inputblur={this.props.inputblur}
            />
            <Headersed hidden={this.props.hidden} />
          </Headerbox>
        </Headers>
        <Headinputbox
          style={this.props.input ? { opacity: "1",display:'block'} : { opacity: "0",display:'none' }}
        />
      </HeaderBox>
    );
  }
}
const mapStateToProps = state => {
  return {
    hidden: state.getIn(['header','hidden']),
    input: state.getIn(['header','input']),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    scrollbotaction() {
      dispatch(createaction.scrollbot());
    },
    scrolltopaction() {
      dispatch(createaction.scrolltop());
    },
    inputchange() {
      dispatch(createaction.input_change());
    },
    inputblur() {
      dispatch(createaction.input_blur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
