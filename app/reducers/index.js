import { combineReducers } from 'redux'
import posts from './posts'
import post from './post'
import login from './login'

const app = combineReducers({
  posts,
  post,
  login
})

export default app