import React from "react";

class Demo extends React.Component { 
    // 手指按下：记录手指的起始坐标
    touchStart = (ev) => { 
        let finger = ev.changedTouches[0]; // 记录了操作手指的信息
        this.touch = {
            startX: finger.pageX,
            startY: finger.pageY,
            isMove: false
        }
    };
    // 手指移动：
    touchMove = (ev) => { 
        let finger = ev.changedTouches[0],
            { startX, startY } = this.touch;
        let changeX = finger.pageX - startX,
            changeY = finger.pageY - startY;
        if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
            this.touch.isMove = true;
        }
    };
    // 手指离开：
    touchEnd = () => { 
        let { isMove } = this.touch;
        if (isMove) return;
        // 说明触发了点击操作
        console.log("点击了按钮");
    };

    render() { 
        return <div>
            <button
                onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}>
                提交
            </button>
        </div>;
    }
}

export default Demo;