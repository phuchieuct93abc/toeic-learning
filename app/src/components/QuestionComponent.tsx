import * as React from "react";
import {Radio} from "antd";
import {Question} from "../models/TestModel";
import Card from "antd/lib/card";
import {RadioChangeEvent} from "antd/lib/radio";
import "../styles/question.css"

export default class QuestionComponent extends React.Component<{ question: Question,onSelectAnswer(isCorrect:boolean,id:string):void}, { isAnswered: boolean, isCorrect: boolean }> {

    state = {isAnswered: false, isCorrect: false};


    private onSelect(p1: RadioChangeEvent) {
        let isCorrect = this.props.question.options[p1.target.value].indexOf("key:") == 0;
        this.setState({isCorrect, isAnswered: true});

        this.props.onSelectAnswer(isCorrect,this.props.question.id);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        let displayAnswer = (answer: string) => answer.replace("key:", "");
        let displayQuestion = (question: string) => question.length <5 ? "Listen the audio and choose the correct answer below" : question;
        let className = "";
        if (this.state.isAnswered) {

            className = this.state.isCorrect ? "correct" : "wrong";
        }

        return (
            <Card className={className} title={displayQuestion(this.props.question.question)} style={{marginBottom: 10}}>
                <Radio.Group size="large" disabled={this.state.isAnswered}>
                    {this.props.question.options.map((q, index) => {
                        return (<Radio onChange={this.onSelect.bind(this)} key={index} style={{display: "block"}}
                                       value={index}>{["A", "B", "C", "D"][index]}. {displayAnswer(q)}</Radio>
                        )
                    })}

                </Radio.Group>
            </Card>

        );
    }


}
