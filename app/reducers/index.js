import { combineReducers } from 'redux'
import posts from './posts'
import post from './post'
import postsType from './postsType'
import limit from './limit'
import login from './login'

const app = combineReducers({
  posts,
  postsType,
  post,
  limit,
  login
})

export default app