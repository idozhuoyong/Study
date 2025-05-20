import PropTypes from "prop-types";

const DemoOne = function DemoOne(props) {
    let { className, style, title } = props
    let { x = 0 } = props
    console.log(title, x)
    
    return <div className={`demo-box ${className}`} style={style}>
        <h2 className="title">{title}</h2>
    </div>;
}

// 通过把函数当做对象，设置静态的私有属性方法，来给其设置属性的校验规则
// 「15.5之后不推荐，react19已废弃」
// DemoOne.defaultProps = {
//     x: 0
// };

// 参数校验
// 「15.5之后不推荐，react19已废弃」
DemoOne.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.number
}

export default DemoOne;