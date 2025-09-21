import styled from "styled-components";

/*
基于“styled.标签名” 这种方式编写需要的样式
    + 样式需要写在“ES6模板字符串”中
    + 返回并且导出的结果是一个自定义组件

如果编写样式的时候没有提示，我们可以在vscode中安装一个官方插件“vscode-styled-components”
*/
export const NavBox = styled.nav`
    background-color: lightblue;
    width: 300px;

    .title {
        font-size: 20px;
        color: red;
        &:hover {
            color: green;
        }
    }
`;

export const NavBarBox = styled.div.attrs(props => {
    return {
        size: props.size || 16 // 给默认值
    }
})`
    line-height: 40px;

    a {
        font-size: ${props => props.size}px;
        color: #000;
        margin-right: 10px;

        &:hover {
            color: ${props => props.hoverColor};
        }
    }
`;