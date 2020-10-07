export function manageFriends(state, action){
    state = {
        friends: []
    }

    switch (action.type) {
        case "ADD_FRIEND":

            return {friends: [
                {
                    name: action.friends.name,
                    hometown: action.friends.hometown,
                    id: action.friends.id
                }
            ]}            
        case "REMOVE_FRIEND":
            
            break;
    
        default:
            return state;
    }
}
