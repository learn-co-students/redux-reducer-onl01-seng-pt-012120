export function manageFriends(state, action){
    state = {
        friends: []
    }

    switch (action.type) {
        case "ADD_FRIEND":

            return {friends: [
                ...state.friends,
                {
                    name: state.name,
                    hometown: state.hometown,
                    id: state.id
                }
            ]}            
        case "REMOVE_FRIEND":
            
            break;
    
        default:
            return state;
    }
}
