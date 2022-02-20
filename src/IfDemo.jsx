import React from "react";

export default class IfDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            isLogin: false
        }
    }

    clickHandler = () => {
        this.setState({
            isLogin:true
        })
    }
    render () {

        let showView = this.state.isLogin ?
            <div>Hello Zack!</div> :
            <div>Please Login.</div>

        return (
            <div>
                条件渲染: {showView}
                <button onClick={this.clickHandler}>登录</button>
            </div>
        )
    }
}