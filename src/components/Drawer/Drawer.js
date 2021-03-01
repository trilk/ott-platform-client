import React from "react";

import styled from "styled-components";

import * as IoIcons from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";
import { showDrawer } from "../../redux/action";

import UpdateProfile from "../Pages/Profile/UpdateProfile";
import ChangePassword from "../Pages/Profile/ChangePassword";

const Drawer = (props) => {
  const dispatch = useDispatch();
  const arrayDrawer = useSelector((state) => state.drawerReducer.arrayDrawer);

  const onCloseDrawer = (item) => {
    item.show = false;
    dispatch(showDrawer(item));
  };
  return (
    <>
      {arrayDrawer.map((item, index) => {
        return (
          <DrawerLayout drawer={item.show} key={index}>
            <DrawerContent drawer={item.show}>
              <DrawerHeader>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 16,
                    letterSpacing: "0.1px",
                  }}
                >
                  {item.title}
                </span>
                <IoIcons.IoIosClose
                  size="26"
                  color="#ffffff"
                  style={{ cursor: "pointer" }}
                  onClick={() => onCloseDrawer(item)}
                />
              </DrawerHeader>
              {index === 0 && item.show && <UpdateProfile />}
              {index === 1 && item.show && <ChangePassword />}
            </DrawerContent>
          </DrawerLayout>
        );
      })}
    </>
  );
};

const DrawerLayout = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(41, 38, 66, 0.6);
  top: 0;
  left: ${({ drawer }) => (drawer ? "0" : "-100%")};
  transition: opacity 350ms linear;
  z-index: 9999;
`;
const DrawerContent = styled.div`
  position: fixed;
  background-color: #ffffff;
  height: 100%;
  max-width: 30%;
  top: 0;
  right: ${({ drawer }) => (drawer ? "0" : "-100%")};
  transition: 350ms;
`;
const DrawerHeader = styled.div`
  display: flex;
  width: 100%;
  background: #001b3c;
  opacity: 0.6;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;
export default Drawer;
