import React from 'react'
import { MyButton } from '../../common_component/common'
export default class MovieList extends React.Component {
    render() {
        // this.props.match.params 中保存所有的参数
        return (
            <div>
                <h1>亲~ 当前处于 { this.props.match.params.type } 电影频道</h1>
                <h2>第 { this.props.match.params.page } 页</h2>
                <MyButton onClick={ ()=> this.goDetail() }>详情页</MyButton>
                <MyButton onClick={ ()=> this.goback() }>GO BACK</MyButton>
            </div>
        )
    }

    goback = ()=> {
        this.props.history.go('-1')
    }

    goDetail() {
        this.props.history.push('/movie/detail/100')
    }
}