import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import MovieList from './MovieList'
import Detail from './Detail'
export default class Movie extends React.Component {
    render () {
        return (
            <div>
                <Link to="/movie/top250/1">top250</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/movie/coming_soon/2">即将上映</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/movie/hot/3">热映</Link>&nbsp;&nbsp;&nbsp;
                <Switch>
                    <Route  path="/movie/detail/:id" component={ Detail }></Route>
                    <Route  path="/movie/:type/:page" component={ MovieList }></Route>
                </Switch>
            </div>
        )
    }
}

/* 
    import { Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom'
    Switch: Switch组件包裹的路由规则  匹配第一条成功后就放弃后续匹配
*/