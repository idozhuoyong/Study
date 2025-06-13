import PropTypes from "prop-types"
import React from "react"

const Dialog = function (props) {
    // 获取属性和插槽信息
    let {
        title = "温馨提示",
        content,
        children
    } = props
    children = React.Children.toArray(children)

    return <div className="dialog-box" style={{ width: 200 }}>
        <div className="header" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h2>{title}</h2>
            <span>X</span>
        </div>
        <div className="main">
            {content}
        </div>
        {children.length > 0 ?
            <div className="footer">
                {children}
            </div>
            : null
        }
    </div>
}

// react18 控制台会输出警告
// Dialog.defaultProps = {
//     title: "温馨提示"
// }

// 规则校验
Dialog.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired
}

export default Dialog