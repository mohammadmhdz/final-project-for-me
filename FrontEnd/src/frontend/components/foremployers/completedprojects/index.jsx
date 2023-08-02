import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_en, Developer_01 } from "../../imagepath";
import { Sidebar } from "../sidebar";

const CompletedProjects = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content align-right">
        <div className="container-fluid">
          <div className="row mt-5 ">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>لیست کار های شما</h3>
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
                    <Link className="nav-link active" to="/completed-projects">
                      تکمیل شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cancelled-projects">
                      منقضی شده
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="my-projects-list">
                <div className="row align-right">
                  <div className="col-lg-10 flex-wrap">
                    <div className="projects-card flex-fill">
                      <div className="card-body">
                        <div className="projects-details align-items-center">
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
                                    <h5>۲۰ روز </h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="project-hire-info">
                            <div className="content-divider" />
                            <div className="projects-amount">
                              <h3>۱۳ میلیون</h3>
                              {/* <h5>in 12 Days</h5> */}
                            </div>
                            <div className="content-divider" />
                            <div className="projects-action text-center">
                              <Link
                                to="/view-project-detail"
                                className="projects-btn"
                              >
                                مشاهده بیشتر{" "}
                              </Link>
                              <a href="#" className="hired-detail">
                                استخدام شده در تاریخ ۱۲ بهمن ۱۴۰۱
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 d-flex flex-wrap">
                    <div className="projects-card flex-fill">
                      <div className="card-body p-2">
                        <div className="prj-proposal-count text-center hired">
                          <h3>استخدام شده</h3>
                          <img
                            src={Developer_01}
                            alt=""
                            className="img-fluid"
                          />
                          <p className="mb-0">محمد مهدیزاده</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      {/* The Modal */}
      <div className="modal fade" id="file">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Review Freelancer</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fa fa-times-circle" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <div className="modal-info">
                <form>
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label>Write Feedback</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        placeholder="Comment Here"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <h5>Ratings</h5>
                    </div>
                    <div className="form-group col-md-4">
                      <p className="mb-2 rating-text">Overall Ratings</p>
                      <div className="rating red">
                        <i className="fa fa-star filled" />
                        <i className="fa fa-star filled" />
                        <i className="fa fa-star filled" />
                        <i className="fa fa-star filled" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section text-end mt-2">
                    <button
                      type="submit"
                      className="btn btn-primary update-btn"
                    >
                      update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default CompletedProjects;
