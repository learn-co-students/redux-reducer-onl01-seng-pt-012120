export function manageFriends(state, action) {
    switch (action.type) {
        case 'ADD_FRIEND':
            return { friends: [...state.friends, action.friend] }
        case 'REMOVE_FRIEND':
            const checkFriend = (e) => e.id === action.id
            let i = [...state.friends].findIndex(checkFriend)
            const array = [...state.friends]
            array.splice(i, 1);
            return { friends: [...array]}
        default:
            return { ...state }
    }
}

