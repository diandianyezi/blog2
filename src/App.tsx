import React, { FC, Component } from 'react';
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
// import { About } from './pages/About';
// import { Home } from './pages/Home';
// import { Dashboard } from './pages/Dashboard/index';
import './App.css';
import { routeContent } from './router/index'
import CustomMenu from './layouts/CustomMenu';

const { Header, Content, Footer, Sider } = Layout;
// import './react.dt.ts'

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <div className="logo" />
                        <CustomMenu />
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div className="site-layout-background"
                                style={{
                                    padding: 24,
                                    textAlign: 'center',
                                    minHeight: 'calc(100vh - 158px)',
                                    overflow: 'auto'
                                }}>
                                <Switch>
                                    {
                                        routeContent.map((route) => {
                                            console.info(route)
                                            return (<Route
                                                exact={route.exact}
                                                key={route.path}
                                                path={route.path}
                                                component={route.component}
                                            />)
                                        })
                                    }
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Blog ©2021 Created by TingTing</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default App;
