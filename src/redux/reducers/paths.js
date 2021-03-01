const initialState = {
  parentPath: "/dashboard",
  childPath: "",
};
export default function pathsReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "CHANGE-PARENT-PATH":
      return {
        ...state,
        parentPath: action.payload,
      };
    case "CHANGE-CHILD-PATH":
      return {
        ...state,
        childPath: action.payload,
      };
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
