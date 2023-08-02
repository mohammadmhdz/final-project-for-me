import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Logo, Img_04, avatar_1 } from "../imagepath";
import config from "config";

const Header = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenu1, setSideMenu1] = useState("");
  const [isSideMenu2, setSideMenu2] = useState("");
  const [isSideMenu3, setSideMenu3] = useState("");

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    setSideMenu1(value);
  };
  const toggleSidebar2 = (value) => {
    setSideMenu2(value);
  };
  const toggleSidebar3 = (value) => {
    setSideMenu3(value);
  };
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const pathname = props.location.pathname.split("/")[1];

  const exclusionArray = ["/onboardScreen", "/onboard-screen-employer"];

  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  console.log(props.location, "location");

  //nav transparent

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const Reload = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      {/* Header */}
      {!props.location.pathname.includes("/index-two") &&
        !props.location.pathname.includes("/index-three") &&
        !props.location.pathname.includes("/index-four") &&
        !props.location.pathname.includes("/index-five") && (
          <header className={`header ${navbar ? "sticky" : ""} header-bg`}>
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <Link
                  id="mobile_btn"
                  to="#"
                  onClick={() => onHandleMobileMenu()}
                >
                  <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </Link>
                <Link to="/" className="navbar-brand logo">
                  <img src={Logo} className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/" className="menu-logo">
                    <img src={Logo} className="img-fluid" alt="Logo" />
                  </Link>
                  <Link
                    id="menu_close"
                    className="menu-close"
                    to="#"
                    onClick={() => onhandleCloseMenu()}
                  >
                    <i className="fas fa-times" />
                  </Link>
                </div>
                <ul className="main-nav">
                  <li>
                    <Link to="/admin/login" target="_blank">
                      خانه
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/login" target="_blank">
                      فرصت های شغلی
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/login" target="_blank">
                      پروفایل من
                    </Link>
                  </li>

                  <li>
                    <Link to="/admin/login" target="_blank">
                      شرکت های برتر
                    </Link>
                  </li>
                </ul>
              </div>
              {pathname === "user-account-details" ? (
                <ul className="nav header-navbar-rht"></ul>
              ) : pathname === "freelancer-invoices" ||
                pathname === "project" ||
                pathname === "view-invoice" ||
                pathname.includes("freelancer-") ? (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item dropdown has-arrow account-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="user-img">
                        <img src={avatar_1} alt="" />
                      </span>
                      <span>John</span>
                    </Link>
                    <div className="dropdown-menu emp">
                      <div className="drop-head">Account Details</div>
                      <Link
                        className="dropdown-item"
                        to="/user-account-details"
                      >
                        <i className="material-icons">verified_user</i> View
                        profile
                      </Link>
                      <div className="drop-head">Projects Settings</div>
                      <Link className="dropdown-item" to="/manage-projects">
                        <i className="material-icons">business_center</i>{" "}
                        Projects
                      </Link>
                      <Link className="dropdown-item" to="/favourites">
                        <i className="material-icons">local_play</i> Favourites
                      </Link>
                      <Link className="dropdown-item" to="/review">
                        <i className="material-icons">pie_chart</i> Reviews
                      </Link>
                      <div className="drop-head">Account Details</div>
                      <Link className="dropdown-item" to="/profile-settings">
                        {" "}
                        <i className="material-icons">settings</i> Profile
                        Settings
                      </Link>
                      <Link className="dropdown-item" to="/">
                        <i className="material-icons">power_settings_new</i>{" "}
                        Logout
                      </Link>
                    </div>
                  </li>
                  <li className={pathname === "post-project" ? "active" : ""}>
                    <Link to="/post-project" className="login-btn">
                      Post a Project{" "}
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="nav header-navbar-rht">
                  <li className={pathname === "register" ? "active" : ""}>
                    <Link to="/register" className="reg-btn align-right">
                      <i className="fa fa-user" /> ثبت نام
                    </Link>
                  </li>
                  <li className={pathname === "login" ? "active" : ""}>
                    <Link to="/login" className="log-btn align-right">
                      <i className="fa fa-lock" /> ورود
                    </Link>
                  </li>
                  <li className={pathname === "post-project" ? "active" : ""}>
                    <Link to="/post-project" className="login-btn">
                      ایجاد فرصت شغلی{" "}
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </header>
        )}
      {/* /Header */}
    </>
  );
};

export default Header;
