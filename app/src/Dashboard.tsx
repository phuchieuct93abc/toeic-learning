import * as React from "react";
import {Card} from 'antd';
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";

export interface TestData {
    name: string,
    description: string,
    id: number
}

export default class Dashboard extends React.Component {

    private tests: TestData[] = [
        {
            description: "Desc 1",
            id: 1,
            name: "Name 1"

        },
        {
            description: "Desc 2",
            id: 2,
            name: "Name 2"

        },
        {
            description: "Desc 3",
            id: 3,
            name: "Name 3"

        },
        {
            description: "Desc 4",
            id: 4,
            name: "Name 4"

        },
        {
            description: "Desc 5",
            id: 5,
            name: "Name 5"

        },
        {
            description: "Desc 6",
            id: 6,
            name: "Name 6"

        }];


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <Row gutter={16}>
                {this.tests.map(t => {

                    return (
                        <Col  key={t.id} span="8" style={{padding:'8px'}}>
                        <Card title={t.name} >
                            {t.description}
                        </Card>
                        </Col>
                    )
                })}
                </Row>

            </div>
        )
    }
}
