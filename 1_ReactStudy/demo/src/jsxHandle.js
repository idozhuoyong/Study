// createElement 创建虚拟 DOM 对象
export function createElement(ele, props, ...children) {
    let virtualDOM = {
        $$typeof: Symbol('react.transitional.element'),
        key: null,
        ref: null,
        type: null,
        props: {}
    };

    virtualDOM.type = ele;

    return virtualDOM
}