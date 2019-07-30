import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Showlist,
  Listbox,
  Listh2,
  Listimg,
  Listtext,
  Listbotton,
  Listcontent,
  Richtext,
  Textbutton,
  Aria,
  Bottonbut
} from "./showstyle";
import { createaction } from "./store";
class Show extends Component {
  componentDidMount() {
    this.props.acquireList();
    // console.log(this.props.list)
  }
  render() {
  const {list} =this.props;
    return (
      <Showlist>
        {list.map((item,index) => 
          <Listbox key={index}>
            <Listh2>{item.get('title')}</Listh2>
            <Listcontent>
            <Listimg>
              <div>
              <img src={item.get('pic')} alt="123"/>
              </div>
            </Listimg>
            <Listtext>
              <Richtext>{item.get('content')}</Richtext>
              <Textbutton>阅读全文</Textbutton>
            </Listtext>
            <Listbotton>
              <Aria>
                <button className="votebutton">{item.get('aprover')}</button>
                <button className="votebutton" style={{ marginLeft: "4px" }}>
                  131
                </button>
              </Aria>

              <Bottonbut>{item.get('comment')}条评论</Bottonbut>
              <Bottonbut>分享</Bottonbut>
              <Bottonbut>收藏</Bottonbut>
              <Bottonbut>感谢</Bottonbut>
              <Bottonbut>...</Bottonbut>
            </Listbotton>
            </Listcontent>
          </Listbox>
        )}
      </Showlist>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.getIn(["show", "article"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    acquireList() {
      dispatch(createaction.getlist());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
