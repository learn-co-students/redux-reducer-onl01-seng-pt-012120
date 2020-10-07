export function manageFriends(state, action){
    state = {
        friends: []
    }

    switch (action.type) {
        case "ADD_FRIEND":
            console.log(action)
            state.friends.push({
              name: action.name,
              hometown: action.hometown,
              id: action.id
            })
            return state
                
        case "REMOVE_FRIEND":
            
            break;
    
        default:
            return state;
    }
}
