import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Submenu = ({ item, onParentActive, parent, child, onChildActive }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubNav = () => {
    setSubnav(!subnav);
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={() => [onParentActive(item.path), item.subNav && showSubNav()]}
        active={parent === item.path ? "true" : "false"}
      >
        <div className="row">
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              key={index}
              onClick={() => onChildActive(item.path)}
              active={child === item.path ? "true" : "false"}
            >
              <div className="row">
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </div>
            </DropdownLink>
          );
        })}
    </>
  );
};

const SidebarLink = styled(Link)`
  display: flex;
  color: ${({ active }) => (active === "true" ? "#ffffff" : "#9492a0")};
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
  .row {
    display: flex;
    align-items: center;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 18px;
`;

const DropdownLink = styled(Link)`
  background: #001b3c;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ active }) => (active === "true" ? "#ffffff" : "#9492a0")};
  font-size: 16px;
  font-weight: bold;
  font-style: normal;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }

  .row {
    display: flex;
    align-items: center;
  }
`;

export default Submenu;
