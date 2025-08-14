import React from "react"

export interface DemoOneProps {
    title: string,
    x?: number,
    className?: string,
    style?: object
}

const DemoOne = function DemoOne(props: DemoOneProps) {
    let { className, style, title } = props
    let { x = 0 } = props
    console.log(title, x)
    
    return <div className={`demo-box ${className}`} style={style}>
        <h2 className="title">{title}</h2>
    </div>;
}

export default DemoOne;