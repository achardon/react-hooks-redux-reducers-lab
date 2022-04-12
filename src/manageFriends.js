const initialState = { friends: [] }

export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "friends/add":
      const newArray = [...state.friends, action.payload]
      return { friends: newArray};
    case "friends/remove":
      const updatedArray = state.friends.filter(n => n.id !== action.payload)
      return { friends: updatedArray};
    default: 
      return state
  }
}
