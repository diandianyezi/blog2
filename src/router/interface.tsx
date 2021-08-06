export interface IRoute {
    path: string,
    name: string,
    redirect?: string,
    exact?:boolean,
    children?: Array<IRoute>,
    component?: any
}