export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            let r;
            for (let i = 0; i < state.friends.length; i++) {
                if (state.friends[i].id === action.id) {r = i}
            };
            return {friends: [...state.friends.slice(0, r), ...state.friends.slice(r + 1)]};
        default:
            return state;

    }
}
