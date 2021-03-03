import React, { useState } from "react";

import "./profile.css";

//images
import avatar from "../../../images/avatar.png";

import styled from "styled-components";

//icon
import * as IoIcons from "react-icons/io";

import { checkPassword } from "../../../helpers/checkPassword";

const ChangePassword = () => {
  const [dataChange, setDataChange] = useState([
    {
      id: "verify",
      value: "",
      label: "Verify current password",
      name: "verify",
      type: "password",
    },
    {
      name: "newpassword",
      id: "newpassword",
      value: "",
      label: "New password",
      type: "password",
    },
    {
      name: "confirm",
      id: "confirm",
      value: "",
      label: "Confirm new password",
      type: "password",
    },
  ]);

  const [radioCheckPassword, setRadioCheckPassword] = useState([
    {
      id: 0,
      value: "One lowercase character",
      check: false,
    },
    {
      id: 1,
      value: "One uppercase character",
      check: false,
    },
    {
      id: 2,
      value: "One special character",
      check: false,
    },

    {
      id: 3,
      value: "8 characters minimum",
      check: false,
    },
    {
      id: 4,
      value: "One number",
      check: false,
    },
  ]);

  const onInputValidateChange = (value) => {
    
    const items = radioCheckPassword;
    const result = checkPassword(value);
    items.map((item, index) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i] === index) {
          item.check = true;
          setRadioCheckPassword([...radioCheckPassword], items);
        } else {
          item.check = false;
          setRadioCheckPassword(items);
        }
      }
    });
  };

  const [latestData, setLatestData] = useState({
    verify: "",
    newpassword: "",
    confirm: "",
  });

  const [focused, setFocused] = useState();
  const focusField = (indexfield) => setFocused(indexfield);

  const onChangeData = (event, index) => {
    const target = event.target;
    const name = target.name;
    const items = dataChange;
    items.map((item, index) => {
      if (item.name === name) {
        setLatestData({ ...latestData, [name]: target.value });
        item.value = target.value;
      }
      if (name === "newpassword") {
        onInputValidateChange(target.value);
      }
    });
    setDataChange([...dataChange], items);
  };

  const onSubmit = () => {
    console.log(latestData);
  };
  const [showPassword, setShowPassword] = useState();
  const onShowPassword = (index) => setShowPassword(index);
  return (
    <>
      {/* basic information */}
      <div className="change-password">
        <LayoutInput>
          {dataChange.map((item, index) => {
            return (
              index < 2 && (
                <div className="margin-top-24" key={index}>
                  <p className="margin-bottom-8 font-weight-500">
                    {item.label}
                  </p>
                  <div
                    className={`row center wrap-input ${
                      index === focused ? "active-input" : ""
                    }`}
                  >
                    <input
                      name={`${item.name}`}
                      type={`${showPassword === index ? "text" : "password"}`}
                      placeholder={`${item.label}`}
                      onFocus={() => focusField(index)}
                      onChange={(value) => onChangeData(value)}
                      value={`${item.value}`}
                      autoComplete="off"
                    />
                    <IoIcons.IoMdEye
                      className="icon"
                      size="24"
                      color="#C7C3DC"
                      onClick={() => onShowPassword(index)}
                    />
                  </div>
                </div>
              )
            );
          })}
          <div className="radio-check row wrap margin-top-24">
            {radioCheckPassword.map((item, index) => {
              return (
                <div
                  className="row align-center margin-bottom-16 margin-right-16"
                  key={index}
                >
                  <IoIcons.IoIosCheckmarkCircle
                    size="22"
                    className="icon"
                    color={`${item.check ? "#007BFF" : "#C7C3DC"}`}
                  />
                  <span>{item.value}</span>
                </div>
              );
            })}
          </div>
          <div className="margin-top-24">
            <p className="margin-bottom-8 font-weight-500">
              {dataChange[2].label}
            </p>
            <div
              className={`row center wrap-input ${
                2 === focused ? "active-input" : ""
              }`}
            >
              <input
                name={`${dataChange[2].name}`}
                type={`${showPassword === 2 ? "text" : "password"}`}
                placeholder={`${dataChange[2].label}`}
                onFocus={() => focusField(2)}
                onChange={(value) => onChangeData(value)}
                value={`${dataChange[2].value}`}
                autoComplete="off"
              />
              <IoIcons.IoMdEye
                className="icon"
                size="24"
                color="#C7C3DC"
                onClick={() => onShowPassword(2)}
              />
            </div>
          </div>
          {/* submit and cancel */}
          <div className="row margin-top-48 right">
            <button className="outline-button">
              <span className="primary-fontColor">Cancel</span>
            </button>
            <button
              className="primary-button margin-left-24"
              onClick={onSubmit}
            >
              <span className="white-fontColor">Save</span>
            </button>
          </div>
        </LayoutInput>
      </div>
    </>
  );
};

const LayoutInput = styled.div`
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
`;

export default ChangePassword;
