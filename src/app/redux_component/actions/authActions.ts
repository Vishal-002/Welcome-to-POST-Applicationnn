// actions/authActions.ts
export const setLoggedIn = (isLoggedIn: boolean) => ({
  type: "SET_LOGGED_IN",
  payload: isLoggedIn,
});
