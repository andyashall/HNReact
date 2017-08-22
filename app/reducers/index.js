import { combineReducers } from 'redux'
import posts from './posts'
import post from './post'
import postsType from './postsType'
import limit from './limit'

const app = combineReducers({
  posts,
  postsType,
  post,
  limit
})

export default app