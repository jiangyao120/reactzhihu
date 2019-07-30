import React, { Component } from "react";
import { Topbar, NavA } from "./leftstyle";
import { Route, Link } from "react-router-dom";
// import Loadable from 'react-loadable';
import Show from "./../../page/tuijian";
import Follow from "./../../page/guanzhu";
import Hot from "./../../page/rebang";
// const MyLoadingComponent = ({ isLoading, error }) => {
//   if (isLoading) {
//       return <div>Loading...</div>
//   }
//   else if (error) {
//       return <div>Sorry, there was a problem loading the page.</div>
//   }
//   else {
//       return null;
//   }
// };

// const Show = Loadable({
//   loader: () => import('./../../page/tuijian'),
//   loading: MyLoadingComponent
// });



class Left extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          name: "推荐",
          path:"/"
        },
        {
          name: "关注",
          path:"/follow"
        },
        {
          name: "热榜",
          path:'/hot'
        }
      ],
      select:0
    };
  }
  render() {
    return (
      <div>
        <Topbar>
          {this.state.list.map((list, index) => (
            <NavA key={index}>
                <Link to={list.path}
                onClick={()=>{this.setState({select:index})}}
                style={this.state.select===index?{color:'blue'}:{}}
                >{list.name}</Link>
            </NavA>
          ))}
        </Topbar>
          <Route path="/" exact component={Show} />
          <Route path="/follow" component={Follow} />
          <Route path="/hot" component={Hot} />
      </div>
    );
  }
}

export default Left;
