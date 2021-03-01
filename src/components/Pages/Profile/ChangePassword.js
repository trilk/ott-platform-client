import React, { useState, useEffect } from "react";

import "./profile.css";

//images
import avatar from "../../../images/avatar.png";

import styled from "styled-components";

//icon
import * as IoIcons from "react-icons/io";

import {checkPassword} from '../../../helpers/checkPassword'

const ChangePassword = () => {
  const [dataChange, setDataChange] = useState([
    {
      id: "verify",
      value: "",
      label: "Verify current password",
      name: "verify",
    },
    {
      name: "newpassword",
      id: "newpassword",
      value: "",
      label: "New password",
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
  const [latestData, setLatestData] = useState({ verify: "", newpassword: "" });

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
    });
    setDataChange([...dataChange], items);
  };

  const onSubmit = () => {
    console.log(latestData);
  };
  return (
    <>
      {/* basic information */}
      <div className="change-password">
        <LayoutInput>
          {dataChange.map((item, index) => {
            return (
              <div className="margin-top-24" key={index}>
                <p className="margin-bottom-8 font-weight-500">{item.label}</p>
                <div
                  className={`row center wrap-input ${
                    index === focused ? "active-input" : ""
                  }`}
                >
                  <input
                    name={`${item.name}`}
                    type="text"
                    placeholder={`${item.label}`}
                    onFocus={() => focusField(index)}
                    onChange={(value) => onChangeData(value)}
                    value={`${item.value}`}
                    autoComplete="off"
                  />
                  <IoIcons.IoMdEye className="icon" size="24" color="#C7C3DC" />
                </div>
              </div>
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
