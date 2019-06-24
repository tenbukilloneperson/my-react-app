import React from 'react'
import { connect } from 'react-redux'
import { countCutAction } from '../../action/countAction.js'
class Swiper extends React.Component {
    render () {
        return (
            <div>
                <h1>这是swiper 组件中的初始值：{ this.props.count}</h1>
                <button onClick={ this.props.cut }> -1 </button>
            </div>
        )
    }
}
function mapStoreToProps(store) {
    return {
         count: store.count,
         swiper: store.swiper
    }
 }
 // 把 store 中的方法映射到 props 中
 function mapDispatchTOProps(dispatch) {
     return {
         cut: () => dispatch(countCutAction(50))
     }
 }
export default connect(mapStoreToProps,mapDispatchTOProps)(Swiper)