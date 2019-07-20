import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Icon from "antd/lib/icon";
import { Button } from "antd";


class Navigator extends Component<{ prevId: number, nextId: number }, {}> {
    render() {
        return (
            <Button.Group size="large" className={"navigator"}>


                <Link to={this.props.prevId.toString()}>
                    <Button type="primary">
                        <Icon type="left" />
                        Backward
    </Button> </Link>

                <Link to={this.props.nextId.toString()} style={{ float: "right" }}>
                    <Button type="primary">
                        Forward
        <Icon type="right" />
                    </Button>
                </Link>
            </Button.Group>
        );
    }
}

export default Navigator;