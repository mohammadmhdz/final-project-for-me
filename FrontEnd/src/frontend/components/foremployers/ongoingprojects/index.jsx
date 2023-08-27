import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Flags_en } from "../../imagepath";
import { Sidebar } from "../sidebar";

const OngoingProjects = ({data}) => {
  const daysBetween =(input) => {
    const now = new Date().getDate()
    const date = new Date(input).getDate()
    return now - date
  }

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  console.log(data , "ongoing-projects")
  return (
    <>
      {/* Page Content */}
      {data.map((item) => (
        item.status === "فعال" &&
      (
        <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-10 flex-wrap">
                    <div className="projects-card flex-fill">
                      <div className="card-body">
                        <div className="projects-details align-items-center">
                          <div className="project-info">
                            <span>{item.Company?.Name}</span>
                            <h2>{item.title}</h2>
                            <div className="customer-info">
                              <ul className="list-details">
                                <li>
                                  <div className="slot">
                                    <p>امکان دورکاری</p>
                                    <h5>{item.isremote ? "دارد" : "ندارد"}</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>شهر</p>
                                    <h5>{item.city?.name}</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>انقضای آگهی</p>
                                    <h5>{daysBetween(item.published_at)} روز دبگر </h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="project-hire-info">
                            <div className="content-divider" />
                            <div className="projects-amount">
                              <h3>{item.salary_amount}</h3>
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 d-flex flex-wrap">
                    <div className="projects-card flex-fill">
                      <div className="card-body p-2">
                        <div className="prj-proposal-count text-center">
                          <span>{item.num_requests}</span>
                          <h3>درخواست</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )))}
            
              {/* /pagination */}

      {/* /Page Content */}
    </>
  );
};
export default OngoingProjects;
