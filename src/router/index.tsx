import { About } from '../pages/About';
import { Home } from '../pages/Home';
// import { Dashboard } from '../pages/Dashboard/index';
import { Blog } from '../pages/Dashboard/Blog'
// import { NotMatch } from '../pages/error/404'
import { IRoute } from './interface'

const routes: Array<IRoute> = [
    {
        path: "/",
        name: '首页',
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: '首页',
                exact: true,
                component: Home
            },
            {
                path: "/about",
                name: '关于',
                exact: true,
                component: About
            },
            {
                path: "/dashboard",
                name: 'Dashboard',
                redirect: '/dashboard/blog',
                children: [
                    {
                        path: "/dashboard/blog",
                        name: '子页面1',
                        exact: true,
                        component: Blog
                    },
                ]
            }
        ]
    },
    
];
export { routes }