import React, { useState } from "react";
import styled from "styled-components";
import { __userLogin } from "../../../API/Login";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });
  const onChangeData = (event) => {
    const target = event.target;
    const name = target.name;
    setUser({ ...user, [name]: target.value });
  };
  const onSubmit = () => {
    __userLogin(dispatch, user);
  };
  return (
    <>
      <LoginLayout>
        <div className="margin-top-24">
          <p className="margin-bottom-8 font-weight-500">Phone number</p>
          <div className="row center wrap-input">
            <input
              name="phone"
              type="text"
              placeholder="Your Phone number"
              onChange={(value) => onChangeData(value)}
              value={`${user.phone}`}
              autoComplete="off"
            />
            {/* <IoIcons.IoMdEye
              className="icon"
              size="24"
              color="#C7C3DC"
              onClick={() => onShowPassword(index)}
            /> */}
          </div>
        </div>
        <div className="margin-top-24">
          <p className="margin-bottom-8 font-weight-500">Password</p>
          <div className="row center wrap-input">
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              onChange={(value) => onChangeData(value)}
              value={`${user.password}`}
              autoComplete="off"
            />
            {/* <IoIcons.IoMdEye
              className="icon"
              size="24"
              color="#C7C3DC"
              onClick={() => onShowPassword(index)}
            /> */}
          </div>
        </div>
        {/* submit and cancel */}
        <div className="row margin-top-48 right">
          <button className="primary-button margin-left-24" onClick={onSubmit}>
            <span className="white-fontColor">Login</span>
          </button>
        </div>
      </LoginLayout>
    </>
  );
};
const LoginLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default Login;
