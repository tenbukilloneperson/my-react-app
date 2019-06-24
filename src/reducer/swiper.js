export default function swiperReducer (state =[], action) {
    switch(action.type) {
        case 'GET_SWIPER':
            return action.payload
        default: 
            return state
    }
}