import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Flags_us,
  Flags_de,
  company_img5,
  company_img6,
  company_img7,
  company_img8,
  company_img9,
} from "../../imagepath";
import { Sidebar } from "../sidebar";

const FreelancerInvitations = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content bookmark">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/freelancer-favourites">
                      فرصت های شغلی های نشان شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/freelancer-invitations"
                    >
                      دعوت از شما
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pro-post mb-4">
                      <div className="project-table align-right">
                        <div className="table-responsive">
                          <h3>دعوت از شما</h3>
                          <table className="table table-hover table-center mb-0 mt-4 datatable">
                            <thead className="thead-pink">
                              <tr>
                                <th>شرکت</th>
                                <th>عنوان</th>

                                <th>تاریخ ارسال </th>
                                <th>شهر</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="/project-details"
                                      className="avatar avatar-md tab-imgcircle ms-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src={company_img5}
                                        alt="User Image"
                                      />
                                    </Link>
                                    <Link to="/project-details">
                                      <span className="profile-name">
                                        آرمان افرا{" "}
                                      </span>
                                      <span>Back-End developer</span>
                                      <span className="rating mt-2">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                      </span>
                                    </Link>
                                  </h2>
                                </td>
                                <td>برنامه نویس Back-End مسلط به Django</td>
                                <td>۲۸ آبان ۱۴۰۱</td>
                                <td>
                                  <h2 className="table-avatar">تهران</h2>
                                </td>
                                <td>
                                  <div className="table-action">
                                    <a href="" className="ms-2">
                                      <i className="fab fa-rocketchat" />
                                    </a>
                                    <a href="" className="orange-text">
                                      <i className="material-icons">
                                        delete_sweep
                                      </i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerInvitations;
