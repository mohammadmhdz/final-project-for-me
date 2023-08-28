import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_en } from "../../imagepath";
import { Sidebar } from "../sidebar";

const CancelledProjects = ({data}) => {
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

  console.log(data , "cancelledData")
  return (
    <>

        {data.map ((item) => (
            item.status === "منقضی شده" && (

  
              <div className="my-projects-list ">
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="projects-delete-details align-items-center">
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
                        <h4>{item.salary_amount ? `${item.salary_amount} میلیون` : "حقوق توافقی"} </h4>
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
              )))}
         
      

      {/* /Page Content */}
    </>
  );
};
export default CancelledProjects;
