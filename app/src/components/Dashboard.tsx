import * as React from "react";
import {Card} from 'antd';
import './Dashboard.css'
import {Link} from "react-router-dom";
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

        },
        {
            description: "Desc 7",
            id: 7,
            name: "Name 7"

        },
        {
            description: "Desc 8",
            id: 8,
            name: "Name 8"

        },
        {
            description: "Desc 9",
            id: 9,
            name: "Name 9"

        },
        {
            description: "Desc 10",
            id: 10,
            name: "Name 10"

        },
        {
            description: "Desc 11",
            id: 11,
            name: "Name 11"

        },







    ];


    componentDidMount(): void {
        // let testService = new TestService();
        // testService.getAllName().then(names=>{
        //     console.log(names)
        // })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={{background: '#ECECEC', padding: '30px'}} className={'dashboard'}>
                {this.tests.map(t => {

                    return (
                        <Link to={`/test/${t.id}/1`} key={t.id}>
                        <Card  title={t.name} >
                            {t.description}
                        </Card>
                        </Link>
                    )
                })}

            </div>
        )
    }
}
