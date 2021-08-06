import { Component } from 'react';
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import { IRoute } from '../router/interface';
import { routes } from '../router/index'

const { SubMenu } = Menu

class CustomMenu extends Component {
    renderSubMenu = (route: IRoute) => {
        return (
            route.children ?
                <SubMenu
                    key={route.path}
                    title={route.name}
                >
                    {
                        route.children.map((item, i) => (
                            this.renderSubMenu(item)
                        ))
                    }
                </SubMenu>
                :
                <Menu.Item key={route.path}>
                    <Link to={route.path}>{route.name}</Link>
                </Menu.Item>
        )
    }
    render() {
        return (
            <Menu theme="dark" mode="inline"
                defaultSelectedKeys={['/']} >
                {routes.map((route, i) => (
                    this.renderSubMenu(route)
                ))}
            </Menu>
        )
    }
}

export default CustomMenu