//change path on sidebar when click
export const changeParentPath = (path) => {
  return {
    type: "CHANGE-PARENT-PATH",
    payload: path,
  };
};
export const changeChildPath = (path) => {
  return {
    type: "CHANGE-CHILD-PATH",
    payload: path,
  };
};

export const showSidebar = (show) => {
  return {
    type: "SHOW-SIDEBAR",
    payload: show,
  };
};

export const showDrawer = (show) => {
  return {
    type: "SHOW-DRAWER",
    payload: show,
  };
};
