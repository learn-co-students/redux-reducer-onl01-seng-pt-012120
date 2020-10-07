export function manageFriends(state, action){
    state = {
        friends: []
    }

    switch (action.type) {
        case "ADD_FRIEND":
            
                       
            return {
              friends: [...state.friends, action.friend]
            }
                
        case "REMOVE_FRIEND":
            
            break;
    
        default:
            return state;
    }
}
