import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Developer_02, Developer_03 } from "../../imagepath";
import { Sidebar } from "../sidebar";
import { useLocation } from "react-router-dom";

const FreelacerOngoingProjects = () => {
  console.log("here");
  // const input = useLocation();
  // const [item, setItem] = useState([input.state.item]);
  // console.log(input);
  // useEffect(() => {
  //   document.body.className = "dashboard-page";
  //   return () => {
  //     document.body.className = "";
  //   };
  // });
  // console.log(item);

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
                      className="nav-link"
                      // to="/freelancer-project-proposals"
                    >
                      همه درخواست های من
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      // to="/freelancer-ongoing-projects"
                    >
                      در انتظار بررسی
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      // to="/freelancer-completed-projects"
                    >
                      بررسی شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      // to="/freelancer-cancelled-projects"
                    >
                      رد شده
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
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
                            // to="/freelancer-view-project-detail"
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
              {/* /project list */}

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
    </>
  );
};
export default FreelacerOngoingProjects;
