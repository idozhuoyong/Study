import React from "react";
import { Button } from 'antd';
const VoteFooter = function VoteFooter(props) {
    let { support, oppose } = props;
    return <div className="footer">
        <Button type="primary" onClick={support}>支持</Button>
        <Button type="primary" danger onClick={oppose}>反对</Button>
    </div >;
};
export default VoteFooter;