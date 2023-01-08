import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { postsReducer } from './posts-reducer';
import { usersReducer } from './users-reducer';

export const reducers = combineReducers({
  currentUser: authReducer,
  posts: postsReducer,
  users: usersReducer,
});
