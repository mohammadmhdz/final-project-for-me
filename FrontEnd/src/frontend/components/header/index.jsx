import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, avatar_1 } from "../imagepath";
// redux
import { logout } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { employeePortfolioDetails } from "../../../actions/employeeActions";

const Header = (props) => {
  // add by mhdz
  const localItem = JSON.parse(localStorage?.getItem("userInfo"));
  const dispatch = useDispatch();

  console.log(localItem);
  const employeedetails = useSelector((state) => state.employeeDetails);
  const { employee, loading } = employeedetails;
  console.log(employee);

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
    dispatch(employeePortfolioDetails(localItem?.associated_id));
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleLogout = (e) => {
    dispatch(logout());
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
                    <Link to="/" target="_blank">
                      خانه
                    </Link>
                  </li>
                  <li>
                    <Link to="/project" target="_blank">
                      فرصت های شغلی
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" target="_blank">
                      قوانین و مقررات
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/admin/login" target="_blank">
                       آگهی های برتر 
                    </Link>
                  </li> */}
                </ul>
              </div>
              {localItem ? (
                <ul className="nav header-navbar-rht">
                  <li className="nav-item dropdown has-arrow account-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="user-img  ms-2">
                        <img
                          src={"http://127.0.0.1:8000" + employee.image}
                          alt=""
                        />
                      </span>
                      <span className=" ms-2">{localItem?.username}</span>
                    </Link>

                    <div className="dropdown-menu emp">
                      <Link
                        className="dropdown-item "
                        to={
                          localItem.role === "employer"
                            ? "/dashboard"
                            : "/freelancer-dashboard"
                        }
                      >
                        <i className="material-icons  ms-1">verified_user</i>{" "}
                        پروفایل من
                      </Link>
                      <Link
                        className="dropdown-item "
                        to={
                          localItem.role === "employer"
                            ? "/profile-settings"
                            : "/freelancer-profile-settings"
                        }
                      >
                        {" "}
                        <i className="material-icons  ms-1">settings</i>
                        تنظیمات
                      </Link>
                      <Link
                        onClick={handleLogout}
                        className="dropdown-item"
                        to="/"
                      >
                        <i className="material-icons  ms-1">
                          power_settings_new
                        </i>{" "}
                        خروج
                      </Link>
                    </div>
                  </li>
                  <li className={pathname === "post-project" ? "active" : ""}>
                    {localItem.role === "employee" ? (
                      <Link to="/project" className="login-btn">
                        لیست کارها
                      </Link>
                    ) : (
                      <Link to="/post-project" className="login-btn">
                        ایجاد کار
                      </Link>
                    )}
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
                  {/* <li className={pathname === "post-project" ? "active" : ""}>
                    <Link to="/post-project" className="login-btn">
                      ایجاد فرصت شغلی{" "}
                    </Link>
                  </li> */}
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
