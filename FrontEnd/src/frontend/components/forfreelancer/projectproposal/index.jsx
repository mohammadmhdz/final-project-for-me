import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import moment from "jalali-moment";
import Loader from "../../../../Loader";

import FreelacerOngoingProjects from "../ongoingprojects/index";
import FreelacerCancelledProjects from "../cancelledprojects/index";
import FreelacerCompletedProjects from "../completedprojects/index";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  freelancerRequest,
  deleteRequest,
} from "../../../../actions/requestsActions";

const Freelancer = (props) => {
  const [allRequest, setAllRequest] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [read, setRead] = useState(false);
  const [denied, setDenied] = useState(false);

  const handleAllRequest = () => {
    setAllRequest(true);
    setDenied(false);
    setWaiting(false);
    setRead(false);
  };
  const handleWaiting = () => {
    setAllRequest(false);
    setDenied(false);
    setWaiting(true);
    setRead(false);
  };
  const handleRead = () => {
    setAllRequest(false);
    setDenied(false);
    setWaiting(false);
    setRead(true);
  };
  const handleDenied = () => {
    setAllRequest(false);
    setWaiting(false);
    setRead(false);
    setDenied(true);
  };
  // redux
  const dispatch = useDispatch();
  const freelancerRequests = useSelector((state) => state.freelancerRequest);
  const deleteApplyStatus = useSelector((state) => state.deleteApply);
  const { success: delete_success } = deleteApplyStatus;
  const { freelancerRequestsAll, loading } = freelancerRequests;

  const localItem = JSON.parse(localStorage.getItem("userInfo"));

  const daysBetween = (input) => {
    const now = new Date().getDate();
    const date = new Date(input).getDate();
    return now - date;
  };

  const handleDeleteReq = (input) => {
    console.log(input, "here");
    dispatch(deleteRequest(input));
  };

  useEffect(() => {
    // redux
    dispatch(freelancerRequest());

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch, delete_success]);
  // console.log(freelancerRequestsAll[0]?.company_name);
  console.log(freelancerRequestsAll);
  console.log(deleteApplyStatus, "delete");
  // console.log();

  // filter request by the employee
  // const filterEmployee = freelancerRequestsAll.map((items) => {
  //   console.log(items.status);
  // });
  const requestForEmployee = freelancerRequestsAll.filter((item) => {
    return item.employee === +localItem.associated_id;
  });
  console.log(requestForEmployee, "request form employee");

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row align-right mt-5">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>مدیریت درخواست ها</h3>
              </div>
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link
                      onClick={handleAllRequest}
                      className={allRequest ? "nav-link active" : "nav-link"}
                      // to="/freelancer-project-proposals"
                    >
                      همه درخواست های من
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleWaiting}
                      className={waiting ? "nav-link active" : "nav-link"}
                      // to="/freelancer-ongoing-projects"
                      // state={{ items: dispatch?.freelancerRequestsAll }}
                    >
                      در انتظار بررسی
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleRead}
                      className={read ? "nav-link active" : "nav-link"}
                      // to="/freelancer-completed-projects"
                    >
                      بررسی شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleDenied}
                      className={denied ? "nav-link active" : "nav-link"}
                      // to="/freelancer-cancelled-projects"
                    >
                      رد شده
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Proposals list */}
              {/* Proposals */}
              {loading ? (
                <Loader />
              ) : allRequest ? (
                requestForEmployee.map((items) => (
                  <div className="proposals-section">
                    {items.status === "در انتظار بررسی" && (
                      <div className="my-projects-list">
                        <div className="row">
                          <div className="col-lg-12 flex-wrap">
                            <div className="projects-card flex-fill">
                              <div className="card-body">
                                <div className="projects-details align-items-center justify-content-between">
                                  <div className="projects-details align-items-center">
                                    <div className="proposer-img">
                                      <img
                                        src={
                                          "http://127.0.0.1:8000" +
                                          items.company?.image
                                        }
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="proposer-detail">
                                      <Link
                                        to={{
                                          pathname: "/project-details",
                                          state: {
                                            jobIdInput: items.id,
                                            employeeId:
                                              +localItem.associated_id,
                                          },
                                        }}
                                      >
                                        <h4 className="">{items.job_title}</h4>
                                      </Link>
                                      <ul className="proposal-details">
                                        <li className="Bold">
                                          <Link
                                            to={{
                                              pathname: "/company-profile",
                                              state: {
                                                companyIdInput: items.id,
                                              },
                                            }}
                                          >
                                            <div>{items.company_name}</div>
                                          </Link>
                                        </li>
                                        <li>
                                          {daysBetween(items.send_at)} روز پیش
                                        </li>
                                        <li className=" red">{items.status}</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <Link
                                    onClick={() => handleDeleteReq(items.id)}
                                    className="projects-btn project"
                                  >
                                    انصراف از درخواست{" "}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {items.status === "رد شده" && (
                      <div className="my-projects-list">
                        <div className="row align-right">
                          <div className="col-lg-12 flex-wrap">
                            <div className="projects-cancelled-card flex-fill">
                              <div className="card-body">
                                <div className="projects-details align-items-center">
                                  <div className="proposer-img">
                                    <img
                                      src={Developer_01}
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="proposer-detail">
                                    <Link
                                      to={{
                                        pathname: "/project-details",
                                        state: {
                                          jobIdInput: items.job,
                                          employeeId: +localItem.associated_id,
                                        },
                                      }}
                                    >
                                      <h4 className="">{items.job_title}</h4>
                                    </Link>
                                    <ul className="proposal-details">
                                      <li className="Bold">
                                        {" "}
                                        <Link
                                          to={{
                                            pathname: "/company-profile",
                                            state: {
                                              companyIdInput: items.Company,
                                            },
                                          }}
                                        >
                                          <div>{items.company_name}</div>
                                        </Link>
                                      </li>
                                      <li>
                                        {daysBetween(items.send_at)} روز پیش
                                      </li>

                                      <li>
                                        <span style={{ color: "red" }}>
                                          رد شده{" "}
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          {" "}
                                          تاریخ :{" "}
                                          {moment(
                                            items.status_change_date,
                                            "YYYY/MM/DD"
                                          )
                                            .locale("fa")
                                            .format("YYYY/MM/DD")}
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {items.status === "بررسی شده" && (
                      <div className="my-projects-list">
                        <div className="row">
                          <div className="col-lg-12 flex-wrap">
                            <div className="projects-card flex-fill">
                              <div className="card-body">
                                <div className="projects-details align-items-center justify-content-between">
                                  <div className="projects-details align-items-center">
                                    <div className="proposer-img">
                                      <img
                                        src={Developer_01}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="proposer-detail">
                                      <Link
                                        to={{
                                          pathname: "/project-details",
                                          state: {
                                            jobIdInput: items.job,
                                            employeeId:
                                              +localItem.associated_id,
                                          },
                                        }}
                                      >
                                        <h4 className="">{items.job_title}</h4>
                                      </Link>
                                      <ul className="proposal-details">
                                        <li className="Bold">
                                          <Link
                                            to={{
                                              pathname: "/company-profile",
                                              state: {
                                                companyIdInput: items.Company,
                                              },
                                            }}
                                          >
                                            <div>{items.company_name}</div>
                                          </Link>
                                        </li>
                                        <li>
                                          {daysBetween(items.send_at)} روز پیش
                                        </li>
                                        <li>
                                          <span style={{ color: "green" }}>
                                            بررسی شده{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            {" "}
                                            تاریخ :{" "}
                                            {moment(
                                              items.status_change_date,
                                              "YYYY/MM/DD"
                                            )
                                              .locale("fa")
                                              .format("YYYY/MM/DD")}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : waiting ? (
                <FreelacerOngoingProjects data={requestForEmployee} />
              ) : denied ? (
                <FreelacerCancelledProjects data={requestForEmployee} />
              ) : read ? (
                <FreelacerCompletedProjects data={requestForEmployee} />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* /Page Content */}
      {/* The Modal */}
    </>
  );
};
export default Freelancer;
