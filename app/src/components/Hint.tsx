import * as React from "react";
import Popover from "antd/lib/popover";
import {Button} from "antd";
import Tabs from "antd/lib/tabs";

const {TabPane} = Tabs;
export default class Hint extends React.Component<{ hint: string, hintVn: string }> {
    hint() {
        let hintHtml = {__html: this.props.hint};
        let hintVNHtml = {__html: this.props.hintVn};

        return (<Tabs defaultActiveKey="1">
            <TabPane tab="English" key="1">
                <div dangerouslySetInnerHTML={hintHtml}/>
            </TabPane>
            <TabPane tab="Vietname" key="2">
                <div dangerouslySetInnerHTML={hintVNHtml}/>
            </TabPane>
        </Tabs>)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let hint = this.hint();
        return (
            <Popover overlayClassName={"hint"} content={hint}
                     title="Hint" trigger="click">
                <Button>Hint</Button>
            </Popover>
        )
    }
}
