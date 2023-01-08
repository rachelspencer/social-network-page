import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  const { data } = await axios.get('/posts?_embed=comments');

  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};

export const fetchCurrentUser = () => async (dispatch) => {
  const res = await axios.get('/current-user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data,
  });
};

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};
