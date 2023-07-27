import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AccountEmp from "./employer-account";
import CompleteingEmp from "./completedEmp";
import OtherEmp from "./otherEmp";
import { EmployerInfo } from "./Employer-Info";
import ProfessionalInfoEmp from "./professionalinfoEmp";
import { Logo_01 } from "../../../imagepath";

const OnboardScreenEmployer = (props) => {
  const [TabChangeEmp, setTabChangeEmp] = useState({
    status: false,
    value: "25%",
  });
  const [TabChangeEmp1, setTabChangeEmp1] = useState({ status: false });
  const [TabChangeEmp2, setTabChangeEmp2] = useState({ status: false });
  const [TabChangeEmp3, setTabChangeEmp3] = useState({ status: false });
  const [TabChangeEmp4, setTabChangeEmp4] = useState({ status: false });

  const [PageChangeEmp, setPageChangeEmp] = useState("employer-account");

  const nextTabEmp = () => {
    setTabChangeEmp({ status: true, value: "50%" });
    setPageChangeEmp("Employer-Info");
  };

  const prevTabEmp = () => {
    setTabChangeEmp({ status: false, value: "25%" });
    setPageChangeEmp("employer-account");
  };

  const nextTabEmp1 = () => {
    setTabChangeEmp1({ status: true });
    setTabChangeEmp({ status: true, value: "75%" });
    setPageChangeEmp("professionalinfoEmp");
  };

  const prevTabEmp2 = () => {
    setTabChangeEmp({ status: true, value: "50%" });
    setTabChangeEmp1({ status: false });
    setPageChangeEmp("Employer-Info");
  };

  const prevTabEmp4 = () => {
    setTabChangeEmp({ status: true, value: "75%" });
    setTabChangeEmp3({ status: false });
    setTabChangeEmp4({ status: false });
    setPageChangeEmp("professionalinfoEmp");
  };

  const nextTabEmp2 = () => {
    setTabChangeEmp2({ status: true });
    setTabChangeEmp3({ status: true });
    setTabChangeEmp({ status: true, value: "100%" });
    setPageChangeEmp("otherEmp");
  };

  const nextTabEmp3 = () => {
    setPageChangeEmp("completedEmp");
    setTabChangeEmp4({ status: true });
  };

  const prevTabEmp3 = () => {
    setTabChangeEmp({ status: false, value: "25%" });
    setTabChangeEmp1({ status: false });
    setTabChangeEmp2({ status: false });
    setTabChangeEmp3({ status: false });
    setTabChangeEmp4({ status: false });
    setPageChangeEmp("employer-account");
  };

  return (
    <>
      {/* <div className="main-wrapper"> */}
      {/* Page Wrapper */}
      <div className="page-wrapper board-screen">
        <div className="content container-fluid">
          <div className="acc-content">
            <div className="row">
              <div className="col-sm-12">
                <div className="multistep-form">
                  {/* Freelancer Multistep */}
                  <div className="multistep-progress" id="freelance_step">
                    <div className="first-progress">
                      <div className="board-logo">
                        <Link to="#">
                          <img src={Logo_01} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <ul id="progressbar" className="progressbar">
                        <li className="progress-active">
                          {TabChangeEmp.status ? (
                            <div className="multi-step">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                          ) : (
                            <div className="multi-step">1</div>
                          )}
                          <h5> نوع حساب کاربری</h5>
                        </li>
                        <li
                          className={
                            TabChangeEmp.status ? "progress-active" : ""
                          }
                        >
                          {TabChangeEmp1.status ? (
                            <div className="multi-step">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                          ) : (
                            <div className="multi-step">2</div>
                          )}
                          <h5>اطلاعات شخصی</h5>
                        </li>
                        <li
                          className={
                            TabChangeEmp1.status ? "progress-active" : ""
                          }
                        >
                          {TabChangeEmp3.status ? (
                            <div className="multi-step">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                          ) : (
                            <div className="multi-step">3</div>
                          )}
                          <h5>اطلاعات شرکت</h5>
                        </li>
                        <li
                          className={
                            TabChangeEmp3.status ? "progress-active" : ""
                          }
                        >
                          {TabChangeEmp4.status ? (
                            <div className="multi-step">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                          ) : (
                            <div className="multi-step">4</div>
                          )}
                          <h5>سایر اطلاعات</h5>
                        </li>
                      </ul>
                      <div className="progress-info">
                        <h5>درصد تکمیل</h5>
                        <div className="progress-25">
                          <div className="d-flex align-items-center">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: TabChangeEmp.value }}
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={50}
                                aria-valuemax={100}
                              ></div>
                            </div>
                            <p>{TabChangeEmp.value}</p>
                          </div>
                        </div>
                        {/* <div className="progress-75">
                          <div className="d-flex align-items-center">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                            <p>75%</p>
                          </div>
                        </div>
                        <div className="progress-100">
                          <div className="d-flex align-items-center">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                            <p>100%</p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {PageChangeEmp === "Employer-Info" ? (
                    <EmployerInfo
                      nextTabEmp1={nextTabEmp1}
                      prevTabEmp={prevTabEmp}
                    />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "professionalinfoEmp" ? (
                    <ProfessionalInfoEmp
                      nextTabEmp2={nextTabEmp2}
                      prevTabEmp2={prevTabEmp2}
                    />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "employer-account" ? (
                    <AccountEmp nextTabEmp={nextTabEmp} />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "otherEmp" ? (
                    <OtherEmp
                      nextTabEmp3={nextTabEmp3}
                      prevTabEmp4={prevTabEmp4}
                    />
                  ) : (
                    ""
                  )}
                  {PageChangeEmp === "completedEmp" ? (
                    <CompleteingEmp prevTabEmp3={prevTabEmp3} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* </div> */}
    </>
  );
};

export default OnboardScreenEmployer;
