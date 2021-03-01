import React from "react";

//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiBarChartBoxFill />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowBack />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <AiIcons.AiFillMessage />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "All Messages",
        path: "/messages/all",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Create Messages",
        path: "/messages/create",
        icon: <BiIcons.BiMessageAdd />,
      },
      {
        title: "Schedule",
        path: "/messages/schedule",
        icon: <IoIcons.IoIosTimer />,
      },
      {
        title: "Templates",
        path: "/messages/templates",
        icon: <TiIcons.TiMessages />,
      },
      {
        title: "Drafts",
        path: "/messages/drafts",
        icon: <MdIcons.MdDrafts />,
      },
    ],
  },
  {
    title: "Audience Studio",
    path: "/audience",
    icon: <AiIcons.AiFillMessage />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Segments",
        path: "/audience/segments",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Contacts",
        path: "/audience/contacts",
        icon: <BiIcons.BiMessageAdd />,
      },
    ],
  },
  {
    title: "User Management",
    path: "/usermanagement",
    icon: <AiIcons.AiFillMessage />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/usermanagement/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Roles",
        path: "/usermanagement/roles",
        icon: <BiIcons.BiMessageAdd />,
      },
    ],
  },
  {
    title: "User Management",
    path: "/usermanagement",
    icon: <AiIcons.AiFillMessage />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/usermanagement/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Roles",
        path: "/usermanagement/roles",
        icon: <BiIcons.BiMessageAdd />,
      },
    ],
  },
  {
    title: "User Management",
    path: "/usermanagement",
    icon: <AiIcons.AiFillMessage />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/usermanagement/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Roles",
        path: "/usermanagement/roles",
        icon: <BiIcons.BiMessageAdd />,
      },
    ],
  },
  {
    title: "User Management",
    path: "/usermanagement",
    icon: <AiIcons.AiFillMessage />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/usermanagement/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Roles",
        path: "/usermanagement/roles",
        icon: <BiIcons.BiMessageAdd />,
      },
    ],
  },
];
