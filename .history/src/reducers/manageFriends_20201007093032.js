export function manageFriends(state, action){
    // state = {
    //     friends: []
    // }

    switch (action.type) {
        case "ADD_FRIEND":
            
            console.log(action)           
            return {
                friends: [...state.friends, action.friend]
            }
                
        case "REMOVE_FRIEND":
            // console.log(action.friend)
            const afterList = state.friends.filter(friend=>friend!==action.friend[0])
            // console.log(afterList)
            return {friends: afterList}            
    
        default:
            return state;
    }
}
