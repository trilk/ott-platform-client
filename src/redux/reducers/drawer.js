const initialState = {
  arrayDrawer: [
    {
      type: "update-profile",
      show: false,
      title: "Update Profile",
    },
    {
      type: "change-password",
      show: false,
      title: "Change Password",
    },
  ],
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW-DRAWER":
      const index = state.arrayDrawer.findIndex(
        (drawer) => drawer.type === action.payload.type
      );
      const newArray = [...state.arrayDrawer]; //making a new array
      newArray[index].show = action.payload.show; //changing value in the new array
      return {
        ...state, //copying the orignal state
        arrayDrawer: newArray, //reassingning todos to new array
      };
    default:
      return state;
  }
};

export default drawerReducer;
