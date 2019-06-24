import React from 'react'
import ContentCss from './content.css'
import { Route, Redirect } from 'react-router-dom'

import Home from '../route_component/Home/Home'
import About from '../route_component/About/About'
import Movie from '../route_component/movie/Movie'
import Redux from '../redux_component/Redux'
export default class Content extends React.Component {
    render() {
        return (
            <div className={ ContentCss.wrapper }>
              <Route exact path="/" render={ ()=> <Redirect to="/home"></Redirect> }></Route>
              <Route path="/home" component={ Home }></Route>
              <Route path="/about" component={ About }></Route>
              <Route path="/movie" component={ Movie }></Route>
              <Route path="/redux" component={ Redux }></Route>
            </div>
        )
    }
}