import React from "react";

export default class KeyDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo: [
                {
                    name : "zack",
                    age : 27,
                    gender: "male"
                },
                {
                    name : "zack1",
                    age : 28,
                    gender: "male"
                },
                {
                    name : "zack2",
                    age : 29,
                    gender: "male"
                }
            ]
        }
    }

    clickHandler = () => {
        this.setState({
            userInfo: this.state.userInfo.concat([{
                name: 'Arnold',
                age: 26,
                gender: "male"
            }])
        })
    }


    render(){
        return (
            <div>
                <ul>
                    {this.state.userInfo.map((element,index) => {
                        return (
                            <li key={index}>
                                <span>{element.name}</span>
                                <span>{element.age}</span>
                                <span>{element.gender}</span>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={this.clickHandler}>添加数据</button>
            </div>
        )
    }
}