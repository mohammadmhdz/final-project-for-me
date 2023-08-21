import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_02, Developer_01, Developer_03 } from "../../imagepath";
import { Sidebar } from "../sidebar";

const FreelacerCompletedProjects = (props) => {
  // useEffect(() => {
  //   document.body.className = "dashboard-page";
  //   return () => {
  //     document.body.className = "";
  //   };
  // });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="row">
          <div className="col-lg-12 flex-wrap">
            <div className="projects-card flex-fill">
              <div className="card-body">
                <div className="projects-details align-items-center">
                  <div className="proposer-img">
                    <img src={Developer_01} alt="" className="img-fluid" />
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
                        بررسی شده در تاریخ : <span>۳ مرداد ۱۴۰۲</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {/* <ul className="paginations freelancer">
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
                </ul> */}
        </div>
      </div>
      {/* /pagination */}

      {/* /Page Content */}
    </>
  );
};
export default FreelacerCompletedProjects;
