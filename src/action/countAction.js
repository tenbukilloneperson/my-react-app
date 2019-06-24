
export function countAddAction(payload) {
    return {type: 'INCREMENT',payload: payload}
}

export function countCutAction(payload) {
    return {type: 'DECREMENT',payload: payload}
}