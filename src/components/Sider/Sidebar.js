import React, { useState, useEffect } from "react";

import styled from "styled-components";
import "./sidebar.css";

import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

// images
import avatar from "../../images/avatar.png";
import flight from "../../images/flight.png";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

// redux
import { useSelector, useDispatch } from "react-redux";
//redux action
import {
  changeChildPath,
  changeParentPath,
  showSidebar,
  showDrawer,
} from "../../redux/action";

import { useHistory } from "react-router";

const Sidebar = () => {
  const parentPath = useSelector((state) => state.pathsReducer.parentPath);
  const childPath = useSelector((state) => state.pathsReducer.childPath);
  const sidebar = useSelector((state) => state.sidebarReducer.sidebar);

  const dispatch = useDispatch();

  const history = useHistory();

  const [showProfile, setShoProfile] = useState(false);

  const onShowUpdateProfileDrawer = () => {
    dispatch(showDrawer({ type: "update-profile", show: true }));
  };

  const onShowSidebar = () => {
    dispatch(showSidebar(!sidebar));
  };

  // submenu link click
  const onChildActive = (value) => {
    const splitPath = value.split("/");

    dispatch(changeParentPath(`/${splitPath[1]}`));
    dispatch(changeChildPath(value));
  };
  const onParentActive = (value) => {
    dispatch(changeParentPath(value));
    dispatch(changeChildPath(""));
  };
  //end submenu link click

  // show profile
  const onShowProfile = () => setShoProfile(!showProfile);
  // end show profile

  useEffect(() => {
    const historyPath = history.location.pathname;
    const splitPath = historyPath.split("/");
    if (splitPath.length > 1) {
      dispatch(changeParentPath(`/${splitPath[1]}`));
      dispatch(changeChildPath(historyPath));
    } else {
      dispatch(changeParentPath(historyPath));
      dispatch(changeChildPath(""));
    }
  }, [dispatch, history]);
  return (
    <IconContext.Provider value={{ color: "#9492A0", size: 24 }}>
      {/* navigation bar , header */}
      <Nav>
        <div className="row-nav">
          {/* hamburger bar */}
          <NavIcon to="#" onClick={onShowSidebar}>
            <FaIcons.FaBars className="icon white-fontColor" />
          </NavIcon>
          {/* end hamburger bar */}

          {/* profile */}
          <div className="profile" onClick={onShowProfile}>
            <div className="profile_avatar">
              <img src={avatar} alt="avatar" className="avatar" />
            </div>
            <IoIcons.IoIosArrowDown
              size="14"
              className="icon white-fontColor"
            />
          </div>
          {/* end profile */}
        </div>
        <div className={`profile-box ${showProfile ? "box-show" : ""}`}>
          <div className="profile-information">
            <div className="profile-information__avatar">
              <img src={avatar} alt="avatar" className="avatar" />
            </div>
            <div className="profile-information__info">
              <span style={{ fontWeight: "500" }}>Admin</span>
              <span>abcxyz123asd_asdwdw@gmail.com</span>
              <button
                className="profile-information__btnEdit"
                onClick={onShowUpdateProfileDrawer}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="profile-action">
            <IoIcons.IoIosLock />
            <span>Change Password</span>
          </div>
          <div className="profile-action">
            <IoIcons.IoMdNotifications />
            <span>Notification</span>
          </div>
          <div className="profile-action">
            <IoIcons.IoIosFlag />
            <span>English</span>
          </div>
          <div className="profile-action">
            <IoIcons.IoIosFlag />
            <span>Vietnamese</span>
          </div>
          <div className="profile-action">
            <IoIcons.IoIosLogOut />
            <span>Logout</span>
          </div>
        </div>
      </Nav>

      {/* end navigation bar , header */}

      {/* sidebar menu */}
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {/* information app */}
          <div className="top-app">
            <LogoApp>
              <div className="appicon">
                <img src={flight} alt="app icon" className="avatar" />
              </div>
              <span className="appname">OTT App</span>
            </LogoApp>
            <NavIcon to="#" onClick={onShowSidebar}>
              <AiIcons.AiOutlineClose className="white-fontColor" />
            </NavIcon>
          </div>
          {/* end information app */}

          {/* scroll when menu too many */}
          <ScollWrap>
            {/* information company */}
            <div className="company">
              <div className="company-avatar">
                <div className="company-avatar child">
                  <img src={avatar} alt="avatar" className="avatar" />
                </div>
              </div>
              <span className="company-name"> TESOLF & Tường Thịnh Tech</span>
            </div>
            {/* end information company */}

            {/* label menu */}
            <span style={{ padding: "10px", color: "#ffffff" }}>MENU</span>
            {/* end label menu */}

            {/* submenu links */}
            {SidebarData.map((item, index) => {
              return (
                <SubMenu
                  item={item}
                  key={index}
                  parent={parentPath}
                  child={childPath}
                  onChildActive={onChildActive}
                  onParentActive={onParentActive}
                />
              );
            })}

            {/* end submenulinks */}
          </ScollWrap>
          {/* end scroll */}
        </SidebarWrap>
      </SidebarNav>
      {/* end sidebar */}
    </IconContext.Provider>
  );
};

// style css components
const Nav = styled.div`
  background: #001b3c;
  height: 66px;
  display: flex;
  align-items: center;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  margin-right: 18px;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #001b3c;
  height: 100vh;
  width: 288px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const ScollWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 20vh;
`;
const LogoApp = styled.div`
  display: flex;
  align-items: center;
`;

export default Sidebar;
