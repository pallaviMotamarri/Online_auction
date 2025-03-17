import { USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constants/userConstants";

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_SUCCESS:
      return { success: true, user: action.payload }; // Update user profile
    case USER_UPDATE_FAIL:
      return { error: action.payload }; // Store error message
    default:
      return state;
  }
};
