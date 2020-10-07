export function manageFriends(state, action){
    // state = {
    //     friends: []
    // }

    switch (action.type) {
        case "ADD_FRIEND":
            return {
                friends: [...state.friends, action.friend]
            }
                
        case "REMOVE_FRIEND":
            console.log(action)
            const afterList = state.friends.filter(friend=>friend.id!==action.id)
            console.log(afterList)
            return {friends: afterList}            
    
        default:
            return state;
    }
}
