const initialState = 30

const limit = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIMIT':
      return action.data
    default:
      return state
  }
}

export default limit