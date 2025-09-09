import React from "react";
import { Button } from 'antd';
import ThemeContext from "@/ThemeContext";

class VoteFooter extends React.Component {
    // 使用方式一
    // static contextType = ThemeContext;

    render() {
        // 使用方式一
        // let { change } = this.context;

        return <ThemeContext.Consumer>
            {context => {
                // 使用方式二
                let { change } = context;
                return <div className="footer">
                    <Button type="primary" onClick={change.bind(null, 'sup')}>支持</Button>
                    <Button type="primary" danger onClick={change.bind(null, 'opp')}>反对</Button>
                </div>
            }}
        </ThemeContext.Consumer>;
    }
}

export default VoteFooter;