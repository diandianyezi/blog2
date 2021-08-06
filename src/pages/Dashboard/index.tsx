import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { IRoute } from '../../router/interface'

function Dashboard(routes: Array<IRoute>) {
  return (
    <Switch>
      {routes.map((route) => {
        // if (isValidElement(route)) {
        //     return route;
        // }
        console.info(route)
        return (<Route
          exact={route.exact}
          key={route.path}
          path={route.path}
          component={route.component}
        />)
      })
        // <RouteWithSubRoutes key={route.path} {...route} />
      }
    </Switch>
  );
}

export { Dashboard }