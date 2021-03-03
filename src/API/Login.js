import axios from "axios";
import { userLogin } from "../redux/action";
const HOST = "http://localhost:5000";
export const __userLogin = async (dispatch, user) => {
  await axios
    .post(`${HOST}/api/auth/login`, user)
    .then((result) => {
      console.log("result", result.data);
      dispatch(userLogin(result.data));
    })
    .catch((error) => {
      console.log("login error", error);
    });
};
