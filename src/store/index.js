
import { createStore, applyMiddleware } from 'redux'
import thunk from 'react-thunk'
import Reducer from '../reducer/index'

// 需要安装 redux-thunk 中间件来 完成redux 的异步修改数据 通过配置第二个参数 来支持 redux 的异步提交数据
export default createStore(Reducer,applyMiddleware())