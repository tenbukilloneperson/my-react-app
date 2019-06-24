import Counter from './Count'
import Swiper from './Swiper'
import React from 'react'

export default class Redux extends React.Component {
    render() {
        return (
            <div>
                <Counter />
                <hr/>
                <Swiper />
            </div>
        )
    }
}
