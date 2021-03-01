import _ from "lodash";
export const checkPassword = (str) => {
  let check = false;
  let hasNumber = /\d/;
  if (hasNumber.test(str)) {
    check = true;
  } else {
    check = false;
  }
  return check;
};
