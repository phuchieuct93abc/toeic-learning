import * as React from "react";
import TestService from "../services/TestService";
import {TestModel} from "../models/TestModel";
import "../styles/test.css"
import QuestionComponent from "./QuestionComponent";
import Navigator from "./Navigator"
import Hint from "./Hint";
import QuestionMedia from "./QuestionMedia";


export default class Test extends React.Component<{ match: any, testId: number }, { testData?: TestModel, mp3?: string, isAllAnswered: boolean }> {

    private testService: TestService = new TestService();


    constructor(props: any) {
        super(props);
        this.testService = new TestService();
        this.state = {isAllAnswered: false}

    }


    initData(props: any) {
        let testGroup = props.match.params.testGroup;
        let testId = props.match.params.testId;
        this.testService.getTestsById(testGroup, testId).then(data => {
            this.setState(() => ({
                testData: data,
                isAllAnswered: false
            }))
        });
    }

    componentDidMount(): void {
        // @ts-ignore
        this.setState({testId: parseInt(this.props.match.params.testId),isAllAnswered:false});
        this.initData(this.props);


    }


    componentWillReceiveProps(nextProps: Readonly<{ match: any }>, nextContext: any): void {

        // @ts-ignore
        this.setState({testId: parseInt(nextProps.match.params.testId),isAllAnswered:false});
        this.initData(nextProps);
    }

    hint() {
        if (this.state.testData) {
            let htmlData = {__html: this.state.testData.hint};
            return (<div dangerouslySetInnerHTML={htmlData}/>)
        }
    }


    renderAnswer() {
        if (!this.state.testData) return;
        return <div className={"question-wrapper"}>
            {
                this.state.testData.questions.map((q, index) => <QuestionComponent
                    onSelectAnswer={this.onSelectAnswered.bind(this)} key={q.id} question={q}/>)
            }

        </div>

    }

    onSelectAnswered(p1: boolean, p2: string) {
        this.setState({isAllAnswered: true})

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const testId = parseInt(this.props.match.params.testId);

        // @ts-ignore
        return (
            <div style={{overflow: "auto", height: "100%"}}>
                <div className={"test-wrapper"}>

                    <div className={"image-audio overflow"}>
                        {this.state.testData && <QuestionMedia audioName={this.state.testData.mp3}
                                                               imageName={this.state.testData.image}/>}

                    </div>
                    <div className={"overflow"}>
                        {this.renderAnswer()}
                        {this.state.isAllAnswered && this.state.testData &&
                        <Hint hint={this.state.testData.hint} hintVn={this.state.testData.hintVn}/>
                        }

                    </div>


                    <Navigator prevId={testId - 1} nextId={testId + 1}></Navigator>


                </div>
            </div>

        )
    }
}



