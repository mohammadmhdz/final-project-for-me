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

// redux
import { useDispatch, useSelector } from "react-redux";
import { companyJobsListAction } from "../../../../actions/companyActions";

const CompanyProject = (props) => {
  // for using redux in our project
  const dispatch = useDispatch();
  const companyJobs = useSelector((state) => state.companyJobsList);
  const { companyJobsListArray } = companyJobs;
  console.log(companyJobsListArray);
  useEffect(() => {
    dispatch(companyJobsListAction());

    // document.body.className = "dashboard-page";
    // return () => {
    //   document.body.className = "";
    // };
  }, [dispatch]);

  // // console.log(jobs, "job list per company");

  // const test = jobs.map((item) => {
  //   // console.log(item.Company.id); this is what we want
  //   console.log(item.Company);
  // });
  // test();
  return (
    <>
      {companyJobsListArray.map((items, index) => {
        return (
          <div className="pro-post widget-box company-post align-right">
            <h3 className="pro-title">فرصت های شغلی</h3>
            <div className="projects-card flex-fill project-company">
              <div className="card-body">
                <div className="projects-details align-items-center">
                  <div className="project-info">
                    <span>{items.Company?.Name}</span>
                    <h2>{items.Company?.Name}</h2>
                    <div className="customer-info">
                      <ul className="list-details">
                        <li>
                          <div className="slot">
                            <p>Price type</p>
                            <h5>{items.salary_type}</h5>
                          </div>
                        </li>
                        <li>
                          <div className="slot">
                            <p>شهر</p>
                            <h5>{items.city?.name}</h5>
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
                      <h3>
                        {items.salary_amount === null
                          ? null
                          : `${items.salary_amount} میلیون تومان`}
                      </h3>
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
          </div>
        );
      })}

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
    </>
  );
};
export default CompanyProject;
