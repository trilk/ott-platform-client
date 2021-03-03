const initialState = {
  user: {
    token: "",
  },
};
export default function userReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "USER-LOGIN":
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload.token,
        },
      };
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
