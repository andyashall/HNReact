export const savePosts = (data) => {
  return {
    type: 'SAVE_POSTS',
    data
  }
}

export const removePosts = () => {
  return {
    type: 'REMOVE_POSTS'
  }
}

export const savePost = (data) => {
  return {
    type: 'SAVE_POST',
    data
  }
}

export const removePost = () => {
  return {
    type: 'REMOVE_POST'
  }
}

export const signIn = (data) => {
	return {
	type: 'SAVE_USER',
	data
	}
}

export const signOut = (data) => {
  return {
  type: 'REMOVE_USER',
  data
  }
}
