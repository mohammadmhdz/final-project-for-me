import React from "react";
import { Link } from "react-router-dom";
import { Img_04 } from "../../imagepath";

const Sidebar = (props) => {
  const pathname = window.location.pathname.split("/")[1];
  return (
    <>
      <div className="settings-widget">
        <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
          <Link to="freelancer-profile">
            <img
              alt="profile image"
              src={Img_04}
              className="avatar-lg rounded-circle"
            />
          </Link>
          <div className="me-sm-3 me-md-0 me-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0 align-right">
            <p className="mb-2">خوش آمدید,</p>
            <h3 className="mb-0">
              <Link to="/freelancer-profile">محمد مهدیزاده</Link>
            </h3>
            <p className="mb-0">@Mhdz</p>
          </div>
        </div>
        <div className="settings-menu">
          <ul>
            <li className="nav-item">
              <Link
                to="/freelancer-dashboard"
                className={`nav-link ${
                  pathname === "freelancer-dashboard" ? "active" : ""
                }`}
              >
                <i className="material-icons">verified_user</i> داشبورد
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/freelancer-project-proposals"
                className={`nav-link ${
                  pathname === "freelancer-project-proposals" ? "active" : ""
                }`}
              >
                <i className="material-icons">business_center</i> درخواست ها
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/freelancer-favourites"
                className={`nav-link ${
                  pathname === "freelancer-favourites" ? "active" : ""
                }`}
              >
                <i className="material-icons">local_play</i> نشان شده ها
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/freelancer-portfolio"
                className={`nav-link ${
                  pathname === "freelancer-portfolio" ? "active" : ""
                }`}
              >
                <i className="material-icons">pie_chart</i> پورتفولیو
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/freelancer-chats"
                className={`nav-link ${
                  pathname === "freelancer-chats" ? "active" : ""
                }`}
              >
                <i className="material-icons">chat</i> پیام ها
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/freelancer-profile-settings"
                className={`nav-link ${
                  pathname === "freelancer-profile-settings" ? "active" : ""
                }`}
              >
                <i className="material-icons">settings</i> تنظیمات
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="material-icons">power_settings_new</i> خروج
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export { Sidebar };
