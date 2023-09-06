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
import moment from "jalali-moment";
import Loader from "../../../../Loader";
// redux
import { useDispatch, useSelector } from "react-redux";
import { companyJobsListAction } from "../../../../actions/companyActions";

const CompanyProject = ({companyId}) => {
  // for using redux in our project
  const dispatch = useDispatch();
  const companyJobs = useSelector((state) => state.companyJobsList);
  const { companyJobsListArray , loading} = companyJobs;
  console.log(companyJobsListArray);
  useEffect(() => {
    dispatch(companyJobsListAction(companyId));

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
          <div className="pro-post widget-box company-post align-right">
            <h3 className="pro-title">فرصت های شغلی</h3>
      {loading ? <Loader/> : companyJobsListArray?.map((items, index) => (
        items.status === "فعال" ? (
          <div className="projects-card flex-fill project-company">
              <div className="card-body">
                <div className="projects-details align-items-center">
                  <div className="project-info">
                  <Link className="font-semibold text-primary"
                                    to={{
                                     pathname : "/project-details" ,
                                      state : {jobIdInput: +items.id} 
                                      }}>
                             <span>{items.title}</span>
                            </Link>
                    
                    <h2>{items.company?.Name}</h2>
                    <div className="customer-info">
                      <ul className="list-details">
                        <li>
                          <div className="slot">
                            <p>نام شرکت</p>
                            <h2>{items.company?.Name}</h2>
                          </div>
                        </li>
                        <li>
                          <div className="slot">
                            <p>Price type</p>
                            <h5>{items.salary_type}</h5>
                          </div>
                        </li>
                        <li>
                          <div className="slot">
                            <p>شهر</p>
                            <h5>{items.company.city?.name}</h5>
                          </div>
                        </li>
                        <li>
                          <div className="slot">
                            <p>تاریخ انتشار</p>
                            <h5>{moment(items.published_at, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY/MM/DD")}</h5>
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
                          ? items.salary_type
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
        ) : null
      ))}
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
    </>
  );
};
export default CompanyProject;
