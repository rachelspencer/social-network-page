import { FETCH_USERS } from '../actions/types';

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      const updatedState = {};
      action.payload.forEach((user) => {
        updatedState[user.id] = user;
      });
      return updatedState;
    default:
      return state;
  }
};
