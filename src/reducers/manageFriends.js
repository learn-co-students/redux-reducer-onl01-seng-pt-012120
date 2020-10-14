

let state = {friend : []}
let action = {
    type: 'ADD_FRIEND',
    friend: {
      name: "Chrome Boi",
      homewtown: "NYC",
      id: 1
    }
  }

export function manageFriends(state, action){
    switch (action.type) {
      case 'ADD_FRIEND':
        return Object.assign ({}, {friend : state.friend  + 1})
      case 'REMOVE_FRIEND':
        return Object.assign ({},   {friend : state.friend  - 1})
        // return Object.assign ({}, friend,  {friend : state.friend  - 1})
      default:
        return state;
    }
  }
  

