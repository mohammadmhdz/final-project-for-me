import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles

const Freelancer = (props) => {
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
          <div className="row align-right mt-5">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>مدیریت درخواست ها</h3>
              </div>
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/freelancer-project-proposals"
                    >
                      همه درخواست های من
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/freelancer-ongoing-projects"
                    >
                      در انتظار بررسی
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/freelancer-completed-projects"
                    >
                      بررسی شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/freelancer-cancelled-projects"
                    >
                      رد شده
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Proposals list */}
              <div className="proposals-section">
                {/* Proposals */}
                <div className="my-projects-list">
                  <div className="row">
                    <div className="col-lg-12 flex-wrap">
                      <div className="projects-card flex-fill">
                        <div className="card-body">
                          <div className="projects-details align-items-center justify-content-between">
                            <div className="projects-details align-items-center">
                              <div className="proposer-img">
                                <img
                                  src={Developer_01}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="proposer-detail">
                                <h4 className="">طراح UI/UX</h4>
                                <ul className="proposal-details">
                                  <li className="Bold">
                                    {" "}
                                    <a href="">ارسال شده برای داده ورزی سداد</a>
                                  </li>
                                  <li>۲ روزپیش</li>
                                  <li className=" red">بررسی نشده</li>
                                </ul>
                              </div>
                            </div>
                            <Link
                              to="/freelancer-view-project-detail"
                              className="projects-btn project"
                            >
                              انصراف از درخواست{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-projects-list">
                  <div className="row align-right">
                    <div className="col-lg-12 flex-wrap">
                      <div className="projects-cancelled-card flex-fill">
                        <div className="card-body">
                          <div className="projects-details align-items-center">
                            <div className="proposer-img">
                              <img
                                src={Developer_01}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="proposer-detail">
                              <h4 className="">طراح UI/UX</h4>
                              <ul className="proposal-details">
                                <li className="Bold">
                                  {" "}
                                  <a href="">ارسال شده برای داده ورزی سداد</a>
                                </li>
                                <li>۲ روزپیش</li>
                                <li className=" red">
                                  رد شده به علت : <span>عدم تطابق سن </span>
                                </li>
                                <li className=" red">
                                  رد شده درتاریخ : <span>۲ مرداد ۱۴۰۲</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proposals */}
              </div>
              {/* /Proposals list */}
              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations freelancer">
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fas fa-angle-right" /> قبلی
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
                        بعدی <i className="fas fa-angle-left" />
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
              <h4 className="modal-title">EDIT PROPOSAL</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Cost</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Days</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <ReactSummernote
                          value="Default value"
                          options={{
                            lang: "ru-RU",
                            height: 350,
                            dialogsInBody: true,
                            toolbar: [
                              ["style", ["style"]],
                              ["font", ["bold", "underline", "clear"]],
                              ["fontname", ["fontname"]],
                              ["para", ["ul", "ol", "paragraph"]],
                              ["table", ["table"]],
                              ["insert", ["link", "picture", "video"]],
                              ["view", ["fullscreen", "codeview"]],
                            ],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-end">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Proposal
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
export default Freelancer;
