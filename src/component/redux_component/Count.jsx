import React from 'react'
import { connect } from 'react-redux'
import { countAddAction } from '../../action/countAction.js'
class Counter extends React.Component {
    render () {
        return (
            <div>
                <h1>Redux 中的初始值: { this.props.count }</h1>
                <button onClick={ this.props.add }> +1 </button>
            </div>
        )
    }
}

// 把 store 中的值映射到 props 中
function mapStoreToProps(store) {
   return {
        count: store.count,
        swiper: store.swiper
   }
}
// 把 store 中的方法映射到 props 中
function mapDispatchTOProps(dispatch) {
    return {
        add: () => dispatch(countAddAction(100))
        
    }
}
export default connect(mapStoreToProps,mapDispatchTOProps)(Counter) 