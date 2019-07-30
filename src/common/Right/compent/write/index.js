import React, { Component } from 'react';
import { Writebox, Writeul, Writeanswer, Writedraft} from "./writestyle"
class Write extends Component {
    render() {
        return (
            <Writebox>
                <Writeul>
                    <a className="writeli" href="">
                        <div className="writefont">写回答</div>
                    </a>
                    <a className="writeli" href="">
                        <div className="writefont">写文章</div>
                    </a>
                    <div className="writeli">
                        <div className="writefont">写想法</div>
                    </div>
                </Writeul>
                <Writeanswer>
                    <a href="">
                        <div>
                            <div className="writeanswer">我的稍后回答</div>
                        </div>
                    </a>
                </Writeanswer>
                <Writedraft>
                <a href="">
                        <div>
                            <div className="writeanswer">我的草稿</div>
                        </div>
                    </a>
                </Writedraft>
            </Writebox>
        );
    }
}

export default Write;