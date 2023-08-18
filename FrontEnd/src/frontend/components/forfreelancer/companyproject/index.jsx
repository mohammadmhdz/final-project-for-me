import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  home_icon,
  about_details,
  profile_details,
  profile_img,
  Flags_en,
  Tab_icon_10,
  Tab_icon_09,
  Tab_icon_11,
  Tab_icon_12,
  Tab_icon_13,
} from "../../imagepath";
import StickyBox from "react-sticky-box";
import { ProfileSidebar } from "../../forfreelancer/sidebar/profilesidebar";
import { useLocation } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { listJobs } from "../../../../actions/jobActions";

const CompanyProject = (props) => {
  // const input = useLocation();
  // console.log(input, "Sss");
  // const [item, setItem] = useState([input]);

  // // for using redux in our project
  // const dispatch = useDispatch();
  // const listJob = useSelector((state) => state.jobList);
  // const { jobs } = listJob;
  // // console.log(error, loading, jobs);
  // useEffect(() => {
  //   dispatch(listJobs());

  //   document.body.className = "dashboard-page";
  //   return () => {
  //     document.body.className = "";
  //   };
  // }, [dispatch]);

  // // console.log(jobs, "job list per company");

  // const test = jobs.map((item) => {
  //   // console.log(item.Company.id); this is what we want
  //   console.log(item.Company);
  // });
  // test();
  return (
    <>
      <div className="pro-post widget-box company-post align-right">
        <h3 className="pro-title">فرصت های شغلی</h3>
        <div className="projects-card flex-fill project-company">
          <div className="card-body">
            <div className="projects-details align-items-center">
              <div className="project-info">
                <span>آرمان ارتباطات ویرا</span>
                <h2>رایمون فناور آریان | Rymon Fanavar Arian</h2>
                <div className="customer-info">
                  <ul className="list-details">
                    <li>
                      <div className="slot">
                        <p>Price type</p>
                        <h5>Fixed</h5>
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
                        <p>تاریخ انقضا</p>
                        <h5>۱۰ روز</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project-hire-info">
                <div className="content-divider" />
                <div className="projects-amount">
                  <h3>13 میلیون</h3>
                  {/* <h5>in 12 Days</h5> */}
                </div>
                <div className="content-divider" />
                {/* <div className="projects-action text-center">
                            <Link
                              to="/view-project-detail"
                              className="projects-btn"
                            >
                              View Proposals
                            </Link>
                            <Link
                              to="/view-project-detail"
                              className="projects-btn"
                            >
                              Edit Jobs
                            </Link>
                            <Link to="#" className="hired-detail">
                              <span>5</span> Proposals
                            </Link>
                          </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-md-12">
            <ul className="paginations list-pagination">
              <li>
                <Link to="#">
                  <i className="fas fa-angle-right" /> قبلی
                </Link>
              </li>
              <li>
                <Link to="#">1</Link>
              </li>
              <li>
                <Link to="#" className="active">
                  2
                </Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">4</Link>
              </li>
              <li>
                <Link to="#">
                  بعدی <i className="fas fa-angle-left" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* /Pagination */}
      </div>
    </>
  );
};
export default CompanyProject;
