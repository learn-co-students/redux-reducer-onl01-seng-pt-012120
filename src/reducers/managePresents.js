export function managePresents(state = { numberOfPresents: 0 }, action) {
    if (action.type === 'INCREASE') {
        state = {...state, numberOfPresents: state.numberOfPresents + 1 }
    }
    return state
}