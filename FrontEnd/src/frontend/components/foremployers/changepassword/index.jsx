import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";

const ChangePassword = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid mt-5">
          <div className="row align-right">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile-settings">
                      تنظیمات حساب کاربری
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/change-password">
                      تغییر رمز عبور
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/delete-account">
                      حذف حساب کاربری
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Password Content */}
              <div className="account-content setting-content">
                <div className="pro-card">
                  <div className="pro-head">
                    <h3 className="pro-title without-border mb-0">
                      تغییر رمز عبور
                    </h3>
                  </div>
                  <div className="pro-body">
                    <div className="row">
                      <div className="col-md-8">
                        <form>
                          <div className="form-group">
                            <label>رمز عبور قبلی</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>رمز عبور جدید</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>تایید رمز عبور</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <button
                                className="btn btn-primary click-btn btn-plan"
                                type="submit"
                              >
                                تایید
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Password Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default ChangePassword;
