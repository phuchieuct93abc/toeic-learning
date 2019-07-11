import * as React from "react";
import {Button} from "antd";
import InputNumber from "antd/lib/input-number";
import Switch from "antd/lib/switch";

import  axios from 'axios'
export default class Dashboard extends React.Component<{}, { counter: number, checked: boolean ,data:string}> {

    click() {
        this.setState({counter: this.state.counter + 1})
    }

    change(event: number) {
        this.setState({counter: event})
        console.log(event)
    }

    check(value) {
        this.setState({checked: value})
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then((value)=>{
            this.setState({data:value.data})
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            checked: true,
            data:"EMpty data"
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <p>{JSON.stringify(this.state.data)}</p>
                <div>{this.state.counter} {this.state.checked?'check':'uncheck'}</div>
                <div><InputNumber value={this.state.counter} onChange={this.change.bind(this)}></InputNumber></div>
                <Switch checked={this.state.checked} onChange={this.check.bind(this)}></Switch>
                <Button type="primary" onClick={this.click.bind(this)}>Primary</Button>

                <div>Dashboard here</div>
            </div>

        )
    }

}
