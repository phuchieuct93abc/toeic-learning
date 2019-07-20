import * as React from "react";
import TestService from "./services/TestService";
import {Button} from "antd";
import {TestModel} from "./models/TestModel";
import Popover from "antd/lib/popover";
import "./test.css"
import Navigator from './Navigator';
import QuestionComponent from "./QuestionComponent";

export default class Test extends React.Component<{ match: any, testId: number }, { testData?: TestModel, mp3?: string }> {

    private testService: TestService;


    constructor(props: any) {
        super(props);
        this.testService = new TestService();
        this.state = {}

    }


    initData(props:any) {
        let testGroup = props.match.params.testGroup;
        let testId = props.match.params.testId;
        this.testService.getTestsById(testGroup, testId).then(data => {

            this.setState(() => ({
                testData: data
            }))
        });
    }

    componentDidMount(): void {
        // @ts-ignore
        this.setState({testId: parseInt(this.props.match.params.testId), testData: null});
        this.initData(this.props);


    }


    componentWillReceiveProps(nextProps: Readonly<{ match: any }>, nextContext: any): void {

        // @ts-ignore
        this.setState({testId: parseInt(nextProps.match.params.testId), testData: null});
        this.initData(nextProps);
    }

    hint() {
        if (this.state.testData) {
            let htmlData = {__html: this.state.testData.hint};
            return (<div dangerouslySetInnerHTML={htmlData}/>)
        }
    }

    renderMp3() {
        if (this.state.testData && this.state.testData.mp3) {
            return (<audio controls autoPlay style={{width: "100%"}}>
                <source src={this.testService.getMp3(this.state.testData.mp3)} type="audio/mpeg"/>
            </audio>)
        }
    }

    renderImage() {
        if (this.state.testData && this.state.testData.image) {
            console.log(this.state.testData.image)
            return (<img src={this.testService.getImage(this.state.testData.image)} alt={this.state.testData.image}/>)
        }
    }

    renderAnswer() {
        if (!this.state.testData) return;
        return (<div>
                {this.state.testData.questions.map((q, index) => {
                    return (<QuestionComponent key={index} question={q}/>)
                })
                }

            </div>
        )
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const testId = parseInt(this.props.match.params.testId);
        return (
            <div style={{overflow: "auto", height: "100%"}}>
                <div className={"test-wrapper"}>
                    <div>
                        {this.renderImage()}
                        {this.renderMp3()}

                    </div>


                    <div>

                        {this.renderAnswer()}
                        <Popover content={this.hint()} title="Hint" trigger="click">
                            <Button>Hover me</Button>
                        </Popover>

                    </div>

                    <Navigator prevId={testId - 1} nextId={testId + 1}/>


                </div>
            </div>

        )
    }
}
