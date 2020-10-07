export function manageFriends(state, action){
    state = {
        friends: []
    }

    switch (action.type) {
        case "ADD_FRIEND":
            
            console.log(action)           
            return {
              friends: [state.friends, action.friend]
            }
                
        case "REMOVE_FRIEND":
            const afterList = state.friends.filter(friend=>friend!==action.friend)
            return {friends: afterList}            
    
        default:
            return state;
    }
}
