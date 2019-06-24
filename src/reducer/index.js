import { combineReducers } from 'redux'
import Count from './count'
import Swiper from './swiper'
export default combineReducers({
    count: Count,
    swiper: Swiper
})