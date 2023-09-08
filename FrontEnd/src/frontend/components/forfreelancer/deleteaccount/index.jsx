import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";

const FreelancerDeleteAccount = (props) => {
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
                    <Link className="nav-link" to="/developer-profile-settings">
                      تنظیمات حساب کاربری
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/freelancer-change-password">
                      تغییر رمز عبور
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/freelancer-delete-account"
                    >
                      حذف حساب کاربری
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="setting-content">
                <div className="pro-card">
                  <div className="pro-head">
                    <h3 className="pro-title without-border mb-0">
                      حذف حساب کاربری
                    </h3>
                  </div>
                  <div className="pro-body">
                    <form>
                      <div className="form-group">
                        <label>لطفا دلیل حذف خود را بیان کنید</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <label>رمز عبور*</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <a
                            className="btn btn-primary click-btn btn-plan"
                            data-bs-toggle="modal"
                            href="#delete-acc"
                          >
                            حذف
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade custom-modal" id="delete-acc">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body del-modal">
              <form>
                <div className="text-center pt-0 mb-5">
                  <i className="fa fa-exclamation-triangle fa-3x" />
                  <h3>آیا مطمعمن هستید؟</h3>
                </div>
                <div className="submit-section text-center">
                  <button
                    data-bs-dismiss="modal"
                    className="btn btn-primary black-btn click-btn"
                  >
                    بازگشت
                  </button>
                  &nbsp;
                  <button type="submit" className="btn btn-primary click-btn">
                    تایید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default FreelancerDeleteAccount;
