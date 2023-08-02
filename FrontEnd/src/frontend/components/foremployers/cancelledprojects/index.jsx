import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_en } from "../../imagepath";
import { Sidebar } from "../sidebar";

const CancelledProjects = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row mt-5  align-right">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>لیست کارهای شما</h3>
              </div>
              <nav className="user-tabs project-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link " to="/manage-projects">
                      همه
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pending-projects">
                      در انتظار
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ongoing-projects">
                      فعال
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/completed-projects">
                      تکمیل شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/cancelled-projects">
                      منقضی شده
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="my-projects-list ">
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="projects-delete-details align-items-center">
                      <div className="project-info">
                        <span>فراوب|FaraWeb</span>
                        <h2>برنامه نویس FrontEnd</h2>
                        <div className="customer-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>امکان دورکاری</p>
                                <h5>دارد</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>شهر</p>
                                <h5>تهران</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>انقضای آگهی</p>
                                <h5>۰ روز </h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="project-hire-info">
                        <div className="content-divider" />
                        <div className="projects-amount">
                          <h3>۱۷ میلیون</h3>
                          {/* <h5>in 12 Days</h5> */}
                        </div>
                        <div className="content-divider" />
                        <div className="projects-action text-center">
                          <a href="#" className="projects-btn">
                            انتشار دوباره{" "}
                          </a>
                          <h4 className="mb-0">
                            <a href="#" className="cancelled-badge">
                              حذف آگهی
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations list-pagination">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" /> قبلی
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        بعدی <i className="fa fa-angle-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /pagination */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default CancelledProjects;
