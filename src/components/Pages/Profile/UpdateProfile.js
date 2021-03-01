import React from "react";

import "./profile.css";

//images
import avatar from "../../../images/avatar.png";

import styled from "styled-components";

//icon
import * as IoIcons from "react-icons/io";

//redux
import { useDispatch } from "react-redux";
import { showDrawer } from "../../../redux/action";

function UpdateProfile() {
  const dispatch = useDispatch();
  const onShowChangePassword = () => {
    dispatch(showDrawer({ type: "change-password", show: true }));
  };
  return (
    <>
      <div className="update-profile__container">
        {/* upload photo , change password */}
        <p className="black-fontColor">Profile Photo</p>
        <div className="update-profile__photo row">
          <div className="update-profile__photo-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="update-profile__photo-info">
            <p className="font-weight-400">Upload your photo...</p>
            <p className="margin-top-8 font-weight-300">
              Photo should be at least 300px × 300px
            </p>
            <div className="row margin-top-24">
              <button className="none-button">
                <span className="primary-fontColor-blur">Upload Avatar</span>
              </button>
              <button
                className="primary-button-blur row"
                onClick={onShowChangePassword}
              >
                <IoIcons.IoIosLock className="icon" />
                <span className="primary-fontColor-blur padding-right-8">
                  Change Password
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* basic information */}
        <p className="black-fontColor">Basic Information</p>
        <LayoutInput>
          <div className="margin-top-24">
            <p className="margin-bottom-8 font-weight-500">Email</p>
            <input
              type="text"
              defaultValue="abcxyz123@gmail.com"
              className="none-edit-input"
            />
          </div>
          <div className="margin-top-24">
            <p className="margin-bottom-8 font-weight-500">Phone number</p>
            <input
              type="text"
              defaultValue="abcxyz123@gmail.com"
              className="none-edit-input"
            />
          </div>
          <div className="margin-top-24">
            <p className="margin-bottom-8 font-weight-500">
              Full Name <span className="tertiary-fontColor">*</span>
            </p>
            <input
              type="text"
              defaultValue="Nguyen Trieu Vi"
              className="error-input"
            />
          </div>
          <div className="margin-top-24">
            <p className="margin-bottom-8 font-weight-500">Gender</p>
            <input type="text" defaultValue="Male" />
          </div>
          <p className="margin-top-24 font-weight-500">Address</p>
          <div className="margin-top-24">
            <p className="margin-bottom-8 font-weight-500">City/Province</p>
            <select className="classic">
              <option defaultValue="Select...">Select...</option>
              <option defaultValue="Dong Nai">Dong Nai</option>
              <option defaultValue="HCM">TP Ho Chi Minh</option>
            </select>
          </div>
          <div className="row">
            <div className="margin-top-24">
              <p className="margin-bottom-8 font-weight-500">District</p>
              <select className="classic">
                <option defaultValue="Select...">Select...</option>
                <option defaultValue="Q1">Quan 1</option>
                <option defaultValue="Q2">Quan 2</option>
                <option defaultValue="Q3">Quan 3</option>
                <option defaultValue="Q4">Quan 4</option>
              </select>
            </div>
            <div className="margin-top-24 margin-left-16">
              <p className="margin-bottom-8 font-weight-500">Ward</p>
              <select className="classic">
                <option defaultValue="Select...">Select...</option>
                <option defaultValue="F1">Phuong 1</option>
                <option defaultValue="F2">Phuong 2</option>
                <option defaultValue="F3">Phuong 3</option>
                <option defaultValue="F4">Phuong 4</option>
              </select>
            </div>
          </div>
          <div className="margin-top-24">
            <p className="margin-bottom-8 font-weight-500">Street</p>
            <input type="text" defaultValue="Street address" />
          </div>

          {/* button save and cancel*/}
          <div className="row margin-top-48 right">
            <button className="outline-button">
              <span className="primary-fontColor">Cancel</span>
            </button>
            <button className="primary-button margin-left-24">
              <span className="white-fontColor">Save</span>
            </button>
          </div>
        </LayoutInput>
      </div>
    </>
  );
}

const LayoutInput = styled.div`
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
`;

export default UpdateProfile;
