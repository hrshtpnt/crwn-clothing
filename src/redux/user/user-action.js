import { userType } from "./user-type";
export const setCurrentUser = (user) => ({
  type: userType.SET_CURRENT_USER,
  payload: user,
});