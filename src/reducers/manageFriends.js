export function manageFriends(state, action){
}


manageFriends = (state = {friends: []}, action) => {
    switch (action.type) {
      case 'ADD_FRIEND':
        let newState = {...state};
        newState.friends.push(action.friend);
        return newState
    case 'REMOVE_FRIEND':
        let filteredFriends = state.friends.filter(f => f.id !== action.id);
        return {friends: filteredFriends}
      default:
        return state;
    }
}