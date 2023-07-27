import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";

const FreelancerChangePassword = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">
                        <img src={home_icon} alt="Post Author" /> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      FREELANCER
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Settings
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/freelancer-profile-settings"
                    >
                      Profile Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/freelancer-change-password"
                    >
                      Change Password
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/freelancer-delete-account">
                      Delete Account
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Password Content */}
              <div className="account-content setting-content">
                <div className="pro-card">
                  <div className="pro-head">
                    <h3 className="pro-title without-border mb-0">
                      Change Password
                    </h3>
                  </div>
                  <div className="pro-body">
                    <div className="row">
                      <div className="col-md-8">
                        <form>
                          <div className="form-group">
                            <label>Old Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <button
                                className="btn btn-primary click-btn btn-plan"
                                type="submit"
                              >
                                Update
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
export default FreelancerChangePassword;
