export function manageFriends(state, action){
    state = {
        friends: []
    }

    switch (action.type) {
        case "ADD_FRIEND":
            console.log(action)
            console.log(state)
            return {friends: [
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
