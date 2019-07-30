import React, { Component } from 'react';
import {Myprovbox,Myprovli} from "./myprostyle";
class Myprov extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[
                {   
                    id:1,
                    name:'我的收藏'
                },
                {
                    id:2,
                    name:'我关注的问题'
                },
                {
                    id:3,
                    name:'我的邀请'
                },
                {
                    id:4,
                    name:'站务中心'
                },
                {
                    id:5,                    
                    name:'版权服务中心'
                }
            ]
        }
    }
    render() {
        return (
            <Myprovbox>
                {
                    this.state.list.map(it=>(
                        <Myprovli key={it.id}>
                            <a href="">
                            {it.name}
                            </a>
                        </Myprovli>
                    ))
                }
            </Myprovbox>
        );
    }
}

export default Myprov;