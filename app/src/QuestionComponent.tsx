import * as React from "react";
import {Radio} from "antd";
import {Question} from "./models/TestModel";
import Card from "antd/lib/card";

export default class QuestionComponent extends React.Component<{ question: Question }, {}> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Card title={this.props.question.question} style={{marginBottom:10}}>
                <Radio.Group size="large">
                    {this.props.question.options.map((q, index) => {
                        return (<Radio key={index} style={{display: "block"}}
                                       value={index}>{["A", "B", "C", "D"][index]}. {q}</Radio>
                        )
                    })}

                </Radio.Group>
            </Card>

        );
    }
}
