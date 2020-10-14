

let state = {friend : []}
let action = {
    type: 'ADD_FRIEND',
    friend: {
      name: "Chrome Boi",
      homewtown: "NYC",
      id: 1
    }
  }
  
  
export function manageFriends(state = {friends:[]}, action){
    switch (action.type) {
      case 'ADD_FRIEND':
        return Object.assign ({},state, {friends : [...state.friends, action.friend] })
      case 'REMOVE_FRIEND':
          let index = state.friends.findIndex((friend)=> friend.id === action.id ) 
          
        return Object.assign ({},state, {friends : [...state.friends.slice(0,index),...state.friends.slice(index +1)] })
        
      default:
        return state;
    }
  }
  

