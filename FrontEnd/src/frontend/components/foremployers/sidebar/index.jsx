import React from "react";
import { Link } from "react-router-dom";
import { Img_04 } from "../../imagepath";
//
import { logout } from "../../../../actions/userActions";
import { useDispatch } from "react-redux";
const Sidebar = (props) => {

  const localItem = JSON.parse(localStorage.getItem("userInfo"));

  // redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("ss");
    dispatch(logout());
  };

  const pathname = window.location.pathname.split("/")[1];

  return (
    <>
      <div className="settings-widget">
        <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
          <Link to="/user-account-details">
            <img
              alt="profile image"
              src={Img_04}
              className="avatar-lg rounded-circle"
            />
          </Link>
          <div className="me-sm-3 me-md-0 me-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0 align-right">
            <p className="mb-2">خوش آمدید,</p>
            <Link to="user-account-details">
              <h3 className="mb-0">{localItem.username}</h3>
            </Link>
            <p className="mb-0">{localItem.email}</p>
          </div>
        </div>
        <div className="settings-menu">
          <ul>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className={`nav-link ${
                  pathname === "dashboard" ? "active" : ""
                }`}
              >
                <i className="material-icons">verified_user</i> داشبورد
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/manage-projects"
                className={`nav-link ${
                  pathname === "-projects" ? "active" : ""
                }`}
              >
                <i className="material-icons">business_center</i> کارهای شما
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favourites"
                className={`nav-link ${
                  pathname === "favourites" || pathname === "invited-freelancer"
                    ? "active"
                    : ""
                }`}
              >
                <i className="material-icons">local_play</i> کارجویان نشان شده
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/review"
                className={`nav-link ${pathname === "review" ? "active" : ""}`}
              >
                <i className="material-icons">record_voice_over</i> نظرات
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link
                to="/membership-plans"
                className={`nav-link ${
                  pathname === "membership-plans" ? "active" : ""
                }`}
              >
                <i className="material-icons">person_add</i> پریمیوم
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/verify-identity"
                className={`nav-link ${
                  pathname === "verify-identity" ? "active" : ""
                }`}
              >
                <i className="material-icons">person_pin</i> احراز هویت
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/transaction-history"
                className={`nav-link ${
                  pathname === "deposit-funds" ||
                  pathname === "withdraw-money" ||
                  pathname === "transaction-history"
                    ? "active"
                    : ""
                }`}
              >
                <i className="material-icons">wifi_tethering</i> پرداخت ها
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile-settings"
                className={`nav-link ${
                  pathname === "profile-settings" ||
                  pathname === "change-password" ||
                  pathname === "delete-account"
                    ? "active"
                    : ""
                }`}
              >
                <i className="material-icons">settings</i> تنظیمات
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleLogout} to="/" className="nav-link">
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
