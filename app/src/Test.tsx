import * as React from "react";
import {Link} from "react-router-dom";
import TestService from "./services/TestService";
import {Button} from "antd";
import {TestModel} from "./models/TestModel";
import Popover from "antd/lib/popover";

export default class Test extends React.Component<{ match: any }, { testId: number, testData?: TestModel, mp3?: string }> {

    private testService: TestService;


    constructor(props: any) {
        super(props);
        this.testService = new TestService();
        this.state = {
            testId: 0
        }

    }

    initData() {
        let testGroup = this.props.match.params.testGroup;
        let testId = this.props.match.params.testId;
        this.testService.getTestsById(testGroup, testId).then(data => {

            this.setState({testData: data, mp3: this.testService.getMp3(testGroup, testId)})
        });
    }

    componentDidMount(): void {
        // @ts-ignore
        this.setState({testId: parseInt(this.props.match.params.testId), testData: null})
        this.initData();


    }

    componentWillReceiveProps(nextProps: Readonly<{ match: any }>, nextContext: any): void {

        // @ts-ignore
        this.setState({testId: parseInt(nextProps.match.params.testId), testData: null})
        this.initData();
    }

    hint() {
        if (this.state.testData) {
            let htmlData = {__html: this.state.testData.hint}
            return (<div dangerouslySetInnerHTML={htmlData}></div>)
        }
    }

    renderMp3() {
        if (this.state.mp3) {
            return (<audio controls autoPlay>
                <source src={this.state.mp3} type="audio/mpeg"></source>
            </audio>)
        }
    }

    renderImage() {
        if (this.state.testData && this.state.testData.image) {
            return (<img src={this.testService.getImage(this.state.testData.image)}/>)
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        if (this.state.testData) {
            return (

                <div style={{overflow: "auto", maxHeight: "100%"}}>
                    <div>{this.renderImage()}</div>

                    {this.renderMp3()}


                    <div>

                        <Popover content={this.hint()} title="Hint" trigger="click">
                            <Button>Hover me</Button>
                        </Popover>

                    </div>


                    <div className={"navigator"}>
                        <Link to={(this.state.testId - 1).toString()}>
                            <Button type="default">Back</Button>
                        </Link>

                        <Link to={(this.state.testId + 1).toString()}>
                            <Button
                                type="primary">Next </Button>
                        </Link>

                    </div>

                </div>

            )
        } else {
            return (<div>Loading</div>)
        }
    }
}
