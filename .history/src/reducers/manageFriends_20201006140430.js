export function manageFriends(state, action){
    state = {
        friends: []
    }

    switch (action.type) {
        case "ADD_FRIEND":

            return {friends: [
                ...state.friends,
                {
                    name: action.name,
                    hometown: action.hometown,
                    id: action.id
                }
            ]}            
        case "REMOVE_FRIEND":
            
            break;
    
        default:
            return state;
    }
}
