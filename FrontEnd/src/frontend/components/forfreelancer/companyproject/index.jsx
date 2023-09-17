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

const CompanyProject = ({ companyId }) => {
  // for using redux in our project
  const dispatch = useDispatch();
  const companyJobs = useSelector((state) => state.companyJobsList);
  const { companyJobsListArray, loading } = companyJobs;
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
        {loading ? (
          <Loader />
        ) : (
          companyJobsListArray?.map((items, index) =>
            items.status === "فعال" ? (
              <div className="projects-card flex-fill project-company">
                <div className="card-body">
                  <div className="projects-details align-items-center">
                    <div className="project-info">
                      <Link
                        className="font-semibold text-primary"
                        to={{
                          pathname: "/project-details",
                          state: { jobIdInput: +items.id },
                        }}
                      >
                        <span>{items.title}</span>
                      </Link>

                      {/* <h2>{items.company?.Name}</h2> */}
                      <div className="d-flex ">
                        <div className="avatar avatar-xl ms-2">
                          <img
                            className="avatar-img "
                            style={{ borderRadius: "10px" }}
                            alt=""
                            src={"http://127.0.0.1:8000" + items.company?.image}
                          />
                        </div>
                        <div
                          className="customer-info"
                          style={{ width: "100%" }}
                        >
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>نام شرکت</p>
                                <h2>{items.company?.Name}</h2>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p> حقوق</p>
                                <h5>
                                  {items.salary_amount === null
                                    ? items.salary_type
                                    : `${items.salary_amount} میلیون تومان`}
                                </h5>
                              </div>
                            </li>

                            <li>
                              <div className="slot">
                                <p>حوزه</p>
                                <h5>{items.job_category?.title}</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>تاریخ انتشار</p>
                                <h5>
                                  {moment(items.published_at, "YYYY/MM/DD")
                                    .locale("fa")
                                    .format("YYYY/MM/DD")}
                                </h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="project-hire-info">
                      <Link
                        className="font-semibold text-primary"
                        to={{
                          pathname: "/project-details",
                          state: { jobIdInput: +items.id },
                        }}
                      >
                        <h4
                          style={{ borderRadius: "20px" }}
                          className="btn-cart"
                        >
                          مشاهده بیشتر
                        </h4>
                      </Link>
                      {/* <h5>in 12 Days</h5> */}
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )
        )}
      </div>
    </>
  );
};
export default CompanyProject;
