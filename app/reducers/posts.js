const initialState = []

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_POSTS':
      return action.data
    case 'REMOVE_POSTS':
      return []
    default:
      return state
  }
}

export default posts