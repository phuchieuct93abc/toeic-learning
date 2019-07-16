import * as React from "react";
import {Card} from 'antd';

export interface TestData {
    name: string,
    description: string,
    id: number
}

export default class Dashboard extends React.Component {

    // @ts-ignore
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

        }];


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={{background: '#ECECEC', padding: '30px'}}>
                {this.tests.map(t => {

                    return (
                        <Card title={t.name} key={t.id} style={{width: 300}}>
                            {t.description}
                        </Card>
                    )
                })}


            </div>
        )
    }
}
