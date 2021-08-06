import About from '../pages/About';
import Home from '../pages/Home';
// import { Dashboard } from '../pages/Dashboard/index';
import Blog from '../pages/Dashboard/Blog'
// import { NotMatch } from '../pages/error/404'
import { IRoute } from './interface'

const routes: Array<IRoute> = [
    {
        path: "/",
        name: '首页',
        exact: true,
        component: Home
    },
    {
        path: "/about",
        name: '关于',
        component: About
    },
    {
        path: "/dashboard",
        name: 'Dashboard',
        children: [
            {
                path: "/dashboard/blog",
                name: '子页面1',
                exact: true,
                component: Blog
            }
        ]
    }
];

const routeContent = flatTree(routes, [])

function flatTree (tree:Array<IRoute>, arr: Array<IRoute>) {
    tree.forEach(v => {
        arr.push(v)
        if (v.children) {
            flatTree(v.children, arr)
        }
    })
    return arr
}
export { routes, routeContent }