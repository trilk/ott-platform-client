import React from "react";

//images use
import flight from "../../../images/flight.png";
import deliver from "../../../images/deliver.png";
import cancel from "../../../images/cancel.png";

import styled from "styled-components";
import "./dashboard.css";

import { useSelector } from "react-redux";

//helpers
import { CommaFormatted } from "../../../helpers/helpers";

import * as IoIcons from "react-icons/io";

const Dashboard = () => {
  const sidebar = useSelector((state) => state.sidebarReducer.sidebar);

  return (
    <div className="dashboard">
      <DashboardLayout sidebar={sidebar}>
        <span className="primary-fontColor">DASHBOARD</span>
        <div className="charts">
          <button className="outline-button">
            <IoIcons.IoIosCalendar
              size="16"
              className="icon primary-fontColor"
            />
            <span className="primary-fontColor">All Time</span>
            <IoIcons.IoIosArrowDown
              size="16"
              className="icon primary-fontColor"
            />
          </button>

          <div className="total-boxs">
            <div className="total-box primary-background">
              <span className="white-fontColor">
                {CommaFormatted(999999999)}
              </span>
              <p className="white-fontColor">Total Messages Sent</p>
              <img src={flight} alt="Flight" className="total-box__image" />
            </div>
            <div className="total-box secondary-background">
              <span className="white-fontColor">{CommaFormatted(140500)}</span>
              <p className="white-fontColor">Successfully Deliveries</p>
              <img src={deliver} alt="Deliver" className="total-box__image" />
            </div>
            <div className="total-box tertiary-background">
              <span className="white-fontColor">{CommaFormatted(1213)}</span>
              <p className="white-fontColor">Cancel</p>
              <img src={cancel} alt="Cancel" className="total-box__image" />
            </div>
            <div className="total-box outline-background">
              <span className="black-fontColor">{CommaFormatted(1213)}</span>
              <p className="secondary-fontColor">Total Users</p>
              <img src={cancel} alt="Cancel" className="total-box__image" />
            </div>
            <div className="total-box outline-background">
              <span className="black-fontColor">{CommaFormatted(345)}</span>
              <p className="secondary-fontColor">Subcribed Users</p>
              <img src={cancel} alt="Cancel" className="total-box__image" />
            </div>
            <div className="total-box outline-background">
              <span className="black-fontColor">{CommaFormatted(234)}</span>
              <p className="secondary-fontColor">Unsubcribed Users</p>
              <img src={cancel} alt="Cancel" className="total-box__image" />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

const DashboardLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: ${({ sidebar }) => (sidebar ? "308px" : "20px")};
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: 350ms;
  justify-content: start;
  flex-direction: column;
`;

export default Dashboard;
