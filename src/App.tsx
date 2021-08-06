import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
// import { Button } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
// import { About } from './pages/About';
// import { Home } from './pages/Home';
// import { Dashboard } from './pages/Dashboard/index';
import './App.css';
import { routes } from './router/index'
import { IRoute } from './router/interface'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu
// import './react.dt.ts'

const App: FC = () => {
    let current = '/home'

    // const handleClick = (e: any) => {
    //     console.log('click ', e);
    //     current = e.key
    // };
    const renderSubMenu = (routes: Array<IRoute>) => {
        return (
            routes.map((route) => (
                route.children ?
                    <SubMenu
                        key={route.path}
                        title={route.name}
                    >
                        {renderSubMenu(route.children)}
                    </SubMenu>
                    :
                    <Menu.Item key={route.path}>
                        {route.redirect ?
                            <Redirect key={route.path} to={{ pathname: route.redirect }} /> : <Link to={route.path}>{route.name}</Link>}
                    </Menu.Item>
            ))
        )
    }
    // function RouteWithSubRoutes(route:IRoute) {
    //     return (
    //       <Route
    //         path={route.path}
    //         render={props => (
    //           // pass the sub-routes down to keep nesting
    //           <route.component {...props} routes={route.children} />
    //         )}
    //       />
    //     );
    //   }
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
                    <Menu theme="dark" mode="inline"
                        defaultSelectedKeys={[current]} >
                        {routes.map((route, i) => (
                            // <RouteWithSubRoutes key={i} {...route} />
                            route.children ?
                                renderSubMenu(route.children)
                                : <Menu.Item key={route.path}>
                                    {route.redirect ?
                                        <Redirect key={route.path} to={{ pathname: route.redirect }} /> 
                                        : <Link to={route.path}>{route.name}</Link>}
                                </Menu.Item>
                        ))}
                    </Menu>
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
                                {/* <Route key="/dashboard/blog" path="/dashboard/blog">
                                  <Dashboard />
                                </Route> */}
                                {routes.map((route) => {
                                    // if (isValidElement(route)) {
                                    //     return route;
                                    // }
                                    console.info(route)
                                    return(<Route
                                            exact={route.exact}
                                            key={route.path}
                                            path={route.path}
                                            render={(props:any) => {
                                                return (
                                                <route.component {...props} routes={route.children} />
                                                )}
                                            }
                                        />)
                                    })
                                    // <RouteWithSubRoutes key={route.path} {...route} />
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

export default App;
