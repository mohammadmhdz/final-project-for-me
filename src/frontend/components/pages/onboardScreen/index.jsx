import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo_01 } from "../../imagepath";
import Account from "./account";
import Completeing from "./completeing";
import Other from "./other";
import { PersonalInfo } from "./personalInfo";
import ProfessionalInfo from "./professionalInfo";

const OnboardScreen = (props) => {
  const [TabChange, setTabChange] = useState({ status: false, value: "25%" });
  const [TabChange1, setTabChange1] = useState({ status: false });
  const [TabChange2, setTabChange2] = useState({ status: false });
  const [TabChange3, setTabChange3] = useState({ status: false });
  const [TabChange4, setTabChange4] = useState({ status: false });

  const [PageChange, setPageChange] = useState("account");

  const nextTab = () => {
    setTabChange({ status: true, value: "50%" });
    setPageChange("personal");
  };

  const prevTab = () => {
    setTabChange({ status: false, value: "25%" });
    setPageChange("account");
  };

  const nextTab1 = () => {
    setTabChange1({ status: true });
    setTabChange({ status: true, value: "75%" });
    setPageChange("professional");
  };

  const prevTab2 = () => {
    setTabChange({ status: true, value: "50%" });
    setTabChange1({ status: false });
    setPageChange("personal");
  };

  const prevTab4 = () => {
    setTabChange({ status: true, value: "75%" });
    setTabChange3({ status: false });
    setTabChange4({ status: false });
    setPageChange("professional");
  };

  const nextTab2 = () => {
    setTabChange2({ status: true });
    setTabChange3({ status: true });
    setTabChange({ status: true, value: "100%" });
    setPageChange("other");
  };

  const nextTab3 = () => {
    setPageChange("complete");
    setTabChange4({ status: true });
  };

  const prevTab3 = () => {
    setTabChange({ status: false, value: "25%" });
    setTabChange1({ status: false });
    setTabChange2({ status: false });
    setTabChange3({ status: false });
    setTabChange4({ status: false });
    setPageChange("account");
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
                        <Link to="/">
                          <img src={Logo_01} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <ul id="progressbar" className="progressbar">
                        <li className="progress-active">
                          {TabChange.status ? (
                            <div className="multi-step">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                          ) : (
                            <div className="multi-step">1</div>
                          )}
                          <h5>نوع حساب کاربری</h5>
                        </li>
                        <li
                          className={TabChange.status ? "progress-active" : ""}
                        >
                          {TabChange1.status ? (
                            <div className="multi-step">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                          ) : (
                            <div className="multi-step">2</div>
                          )}
                          <h5>اطلاعات شخصی</h5>
                        </li>
                        <li
                          className={TabChange1.status ? "progress-active" : ""}
                        >
                          {TabChange3.status ? (
                            <div className="multi-step">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                          ) : (
                            <div className="multi-step">3</div>
                          )}
                          <h5>اطلاعات کاری</h5>
                        </li>
                        <li
                          className={TabChange3.status ? "progress-active" : ""}
                        >
                          {TabChange4.status ? (
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
                                style={{ width: TabChange.value }}
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={50}
                                aria-valuemax={100}
                              ></div>
                            </div>
                            <p>{TabChange.value}</p>
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

                  {PageChange === "personal" ? (
                    <PersonalInfo nextTab1={nextTab1} prevTab={prevTab} />
                  ) : (
                    ""
                  )}
                  {PageChange === "professional" ? (
                    <ProfessionalInfo nextTab2={nextTab2} prevTab2={prevTab2} />
                  ) : (
                    ""
                  )}
                  {PageChange === "account" ? (
                    <Account nextTab={nextTab} />
                  ) : (
                    ""
                  )}
                  {PageChange === "other" ? (
                    <Other nextTab3={nextTab3} prevTab4={prevTab4} />
                  ) : (
                    ""
                  )}
                  {PageChange === "complete" ? (
                    <Completeing prevTab3={prevTab3} />
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

export default OnboardScreen;
