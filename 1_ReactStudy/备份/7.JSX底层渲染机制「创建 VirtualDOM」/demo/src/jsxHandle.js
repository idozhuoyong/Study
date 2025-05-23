// createElement 创建虚拟 DOM 对象
export function createElement(ele, props, ...children) {
    let virtualDOM = {
        $$typeof: Symbol('react.transitional.element'),
        key: null,
        ref: null,
        type: null,
        props: {}
    };
    let len = children.length

    virtualDOM.type = ele;

    if (props !== null) {
        virtualDOM.props = {
            ...props
        }
    }

    if (len === 1) {
        virtualDOM.props.children = children[0]
    }

    if (len > 1) {
        virtualDOM.props.children = children
    }

    return virtualDOM
}