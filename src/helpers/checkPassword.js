import _ from "lodash";
export const checkPassword = (str) => {
  let arr = [];
  const hasNumber = /^[\d]+$/;
  if (hasNumber.test(str)) {
    arr.push(4);
  } else {
    arr.filter((item) => item === 4);
  }

  const lowerCharacter = /^[a-z1-9]$/;
  if (lowerCharacter.test(str)) {
    arr.push(0);
  } else {
    arr.filter((item) => item === 0);
  }
  if(str.length === 0){
    arr = [];
  }
  return arr;
};
