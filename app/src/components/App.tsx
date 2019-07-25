import {Breadcrumb, Layout, Menu} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppSider from "./AppSider";
import Dashboard from "./Dashboard";
import Test from "./Test";

const {Header, Content} = Layout;
export default class App extends React.Component<{}, {}> {

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <AppSider/>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Router>

                                <Route path="/" exact={true} component={Dashboard}/>
                                <Route path="/test/:testGroup/:testId" component={Test}/>
                            </Router>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }


} 