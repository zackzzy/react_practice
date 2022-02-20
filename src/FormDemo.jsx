import React from "react";

export default class FormDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handleSubmit = (e) => {
        alert('提交的名字: ' + this.state.value);
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}