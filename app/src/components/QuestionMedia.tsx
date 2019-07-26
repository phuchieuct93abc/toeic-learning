import * as React from "react";
// @ts-ignore
import AudioPlayer from "react-h5-audio-player";
import TestService from "../services/TestService";

export default class QuestionMedia extends React.Component<{ audioName: string, imageName: string }, {}> {
    private testService: TestService = new TestService();

    renderImage() {
        if (this.props.imageName) {
            return (<img src={this.testService.getImage(this.props.imageName)}
                         alt={this.props.imageName}/>)
        }


    }

    renderMp3() {
        if (this.props.audioName) {
            return (
                < AudioPlayer
                    autoPlay
                    src={this.testService.getMp3(this.props.audioName)}
                    style={
                        {
                            width: "100%",
                            height: 70
                        }
                    }
                />
            )
        }
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", height: "100%", padding: 1}}>
                {this.renderImage()}
                {this.renderMp3()}
            </div>
        )
    }
}
