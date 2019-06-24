import React from 'react'
import NavCss from './nav.css'
import { Link }  from 'react-router-dom'
export default class Nav extends React.Component {
    render() {
        return (
            <div className={ NavCss.wrapper }>
               <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
               <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
               <Link to="/movie">movie</Link>&nbsp;&nbsp;&nbsp;
               <Link to="/redux">Redux</Link>&nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}