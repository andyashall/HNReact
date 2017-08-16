import { combineReducers } from 'redux'
import user from './login'
import posts from './posts'
import post from './post'
import login from './login'

const app = combineReducers({
  user,
  posts,
  post,
  login
})

export default app