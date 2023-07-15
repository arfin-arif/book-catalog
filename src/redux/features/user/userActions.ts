// userActions.ts

// Define the User type according to your needs
import { login, logout } from "./userSlice";
import { User } from "./userSlice";

// Action creators
export const loginUser = (user: User) => {
  return (dispatch) => {
    // Perform login logic, e.g., making API calls, etc.
    // Dispatch the login action with the user data
    dispatch(login(user));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    // Perform logout logic, e.g., clearing local storage, etc.
    // Dispatch the logout action
    dispatch(logout());
  };
};

export const registerUser = (user: User) => {
  return (dispatch) => {
    dispatch(login(user));
  };
};
