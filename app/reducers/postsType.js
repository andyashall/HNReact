const initialState = ''

const postsType = (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_TYPE':
      return action.data
    default:
      return state
  }
}

export default postsType