import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Flags_en } from "../../imagepath";
import { Sidebar } from "../sidebar";

const Pendingprojects = ({ data }) => {
  const daysBetween = (input) => {
    const now = new Date().getDate();
    const date = new Date(input).getDate();
    return now - date;
  };
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  console.log(data, "pendingData");

  return (
    <>
      {/* Page Content */}

      {/* Warning */}
      <div className="row">
        <div className="col-12">
          <div className="warning-card">
            <p>
              <i className="fa fa-exclamation-triangle" /> در انتظار تایید ادمین
            </p>
          </div>
        </div>
      </div>
      {data.map(
        (item) =>
          item.status === "درانتظار تایید" && (
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
                                  <h5>
                                    {daysBetween(item.published_at)} روز دبگر{" "}
                                  </h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-hire-infoo">
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h4>
                              {item.salary_amount
                                ? `${item.salary_amount} میلیون`
                                : "حقوق توافقی"}{" "}
                            </h4>
                            {/* <h5>in 12 Days</h5> */}
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action">
                            {/* <Link
                                to="/project-proposals"
                                className="projects-btn disabled"
                                >
                                مشاهده درخواست ها{" "}
                              </Link> */}
                            <Link
                              className="projects-btn"
                              to={{
                                pathname: "/edit-project",
                                state: { job: item },
                              }}
                            >
                              ویرایش
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
                        <span>0</span>
                        <h3>درخواست</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
      {/* <div className="row">
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
              </div> */}
      {/* /pagination */}

      {/* /Page Content */}
    </>
  );
};
export default Pendingprojects;
