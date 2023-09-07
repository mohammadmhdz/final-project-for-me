import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Flags_en,
  Logo_01,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
// import { alias as moment } from "jalali-moment";
import moment from "moment";

// redux
import {
  freelancerRequest,
  companyChangeRequestStatus,
} from "../../../../actions/requestsActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader";

const Projectproposal = (props) => {
  const dispatch = useDispatch();
  const allRequest = useSelector((state) => state.freelancerRequest);
  const postStatusChange = useSelector((state) => state.companyChangeStatus);
  const { freelancerRequestsAll, loading } = allRequest;
  const location = useLocation();
  const { job } = location.state;
  const [statusShow, setStatusShow] = useState("در انتظار بررسی");
  const [statusChange, setStatusChange] = useState();
  console.log(job, "project-proposal-job");
  console.log(statusShow, "status");
  console.log(postStatusChange, "post change status");

  const daysBetween = (input) => {
    const now = new Date().getDate();
    const date = new Date(input).getDate();
    return now - date;
  };

  useEffect(() => {
    dispatch(freelancerRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(companyChangeRequestStatus(statusChange));
  }, [statusChange]);

  const handleChangeStatus = (e) => {
    console.log(e.target.value);
    setStatusChange({
      ["id"]: e.target.id,
      ["status"]: e.target.value,
      ["status_change_date"]: moment(new Date().toISOString()).utc().format(),
    });
  };

  console.log(statusChange, "status change");
  console.log(freelancerRequestsAll);

  const hired = true;
  const hired2 = false;
  const hired3 = false;

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row mt-5 align-right">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>درخواست ها</h3>
              </div>
              {/* <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/manage-projects">
                      همه
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pending-projects">
                      در انتظار
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ongoing-projects">
                      فعال
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/completed-projects">
                      تکمیل شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cancelled-projects">
                      منقضی شده
                    </Link>
                  </li>
                </ul>
              </nav> */}
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-10 flex-wrap">
                    <div className="projects-card flex-fill">
                      <div className="card-body">
                        <div className="projects-details align-items-center">
                          <div className="project-info">
                            <Link
                              className="text-success"
                              to={{
                                pathname: "/company-profile",
                                state: { companyIdInput: +job.company?.id },
                              }}
                            >
                              {job.company.Name}
                            </Link>
                            <h2>{job.title}</h2>
                            <div className="customer-info">
                              <ul className="list-details">
                                <li>
                                  <div className="slot">
                                    <p>امکان دورکاری</p>
                                    <h5>{job?.isremote ? "دارد" : "ندارد"}</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>شهر</p>
                                    <h5>{job?.company.city.name}</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>انقضای اگهی</p>
                                    <h5>
                                      {60 - daysBetween(job.published_at)}
                                    </h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="project-hire-info">
                            <div className="projects-amount proposals">
                              <h3>
                                {job.salary_amount
                                  ? `${job.salary_amount} میلیون تومان`
                                  : "توافقی"}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 d-flex flex-wrap">
                    {job.completed_request_user === null ? (
                      <div className="projects-card flex-fill">
                        <div className="card-body p-2">
                          <div className="prj-proposal-count text-center">
                            <span>{job.num_requests}</span>
                            <h3>درخواست</h3>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="projects-card flex-fill">
                        <div className="card-body p-2">
                          <div className="prj-proposal-count text-center">
                            <h3 style={{ color: "orange" }}>استخدام شده</h3>
                            <Link
                              className="font-semibold text-primary"
                              to={{
                                pathname: "/developer-profile",
                                state: {
                                  idInfo: +job.completed_request_user?.id,
                                },
                              }}
                            >
                              <p className="mb-0">
                                {job.completed_request_user?.first_name}{" "}
                                {job.completed_request_user?.last_name}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* /project list */}
              {/* Proposals list */}

              <div className="proposals-section mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="page-subtitle">درخواست های ارسال شده</h3>
                  <div className="col-md-3 col-lg-3">
                    <div className="form-group">
                      <select
                        onChange={(e) => setStatusShow(e.target.value)}
                        name="price"
                        className="form-control select-level"
                      >
                        <option value="در انتظار بررسی">در انتظار بررسی</option>
                        <option value="بررسی شده">بررسی شده</option>
                        <option value="رد شده">رد شده</option>
                        <option value="استخدام شده">استخدام شده</option>
                      </select>
                    </div>
                  </div>
                </div>

                {loading ? (
                  <Loader />
                ) : (
                  freelancerRequestsAll.map(
                    (item) =>
                      +item.job === +job.id &&
                      item.Company === job.Company &&
                      statusShow === item.status && (
                        <div className="proposal-card">
                          {/* Proposals */}
                          <div className="project-proposals align-items-center">
                            <div className="proposals-info">
                              <div className="proposer-info">
                                <div className="proposer-img">
                                  <img
                                    src={Avatar_1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="proposer-detail">
                                  <h4>{item.employee_user}</h4>
                                  <ul className="proposal-details">
                                    <li>
                                      تاریخ :{" "}
                                      {moment(item.send_at, "YYYY/MM/DD")
                                        .locale("fa")
                                        .format("YYYY/MM/DD")}
                                    </li>

                                    <li>
                                      {" "}
                                      <Link
                                        className="font-semibold text-primary"
                                        to={{
                                          pathname: "/developer-profile",
                                          state: { idInfo: +item.employee },
                                        }}
                                      >
                                        مشاهده پروفایل
                                      </Link>
                                    </li>
                                    <li>وضعیت درخواست :{item.status}</li>
                                  </ul>
                                </div>
                              </div>
                              {item.status === "استخدام شده" ? (
                                <button
                                  style={
                                    hired3 ? { pointerEvents: "none" } : {}
                                  }
                                  className={"disable-btn projects-btn  ms-1"}
                                >
                                  استخدام شده
                                </button>
                              ) : (
                                <div className="proposer-bid-info">
                                  <div className="proposer-bid"></div>
                                  <div className="proposer-confirm">
                                    <button
                                      onClick={(e) => handleChangeStatus(e)}
                                      id={item.id}
                                      //  onClick={(e) =>handleSubmitChangeStatus(e)}
                                      value="استخدام شده"
                                      //  style={hired ? { pointerEvents: "none" } : {}}
                                      //  disabled={hired ? true : false}
                                      className={"projects-btn ms-1"}
                                    >
                                      تغییر به استخدام شده
                                    </button>
                                    <button
                                      onClick={(e) => handleChangeStatus(e)}
                                      id={item.id}
                                      value="بررسی شده"
                                      style={
                                        hired2 ? { pointerEvents: "none" } : {}
                                      }
                                      disabled={hired2 ? true : false}
                                      className={
                                        hired2
                                          ? "disable-btn projects-btn  ms-1"
                                          : "projects-btn ms-1"
                                      }
                                    >
                                      تغییر به بررسی شده
                                    </button>
                                    <button
                                      onClick={(e) => handleChangeStatus(e)}
                                      id={item.id}
                                      value="رد شده"
                                      style={
                                        hired3 ? { pointerEvents: "none" } : {}
                                      }
                                      disabled={hired3 ? true : false}
                                      className={
                                        hired3
                                          ? "disable-btn projects-btn  ms-1"
                                          : "projects-btn ms-1"
                                      }
                                    >
                                      تغییر به رد شده
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="description-proposal">
                              <h5 className="desc-title">متن پیام</h5>
                              <p>{item.message}</p>
                            </div>
                          </div>
                        </div>
                      )
                  )
                )}
              </div>

              {/* /Proposals list */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade custom-modal" id="hire">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-modal">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center pt-0 mb-4">
                <img src={Logo_01} alt="logo" className="img-fluid mb-1" />
                <h5 className="modal-title">تماس با محمد مهدیزاده</h5>
              </div>
              <form>
                <div className="modal-info">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="نام و نام خانودگی"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="name"
                          className="form-control"
                          placeholder="ایمیل"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="شماره تماس"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-12 col-md-4 pr-0">
                          <label className="file-upload">
                            اضافه کردن فایل <input type="file" />
                          </label>
                        </div>
                        <div className="col-12 col-md-8">
                          <p className="mb-1">
                            فرمت های مجاز : zip, pdf, png, jpg
                          </p>
                          <p>حجم مجاز : حداکثر ۵۰ مگابایت</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block submit-btn"
                  >
                    استخدامحثد
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default Projectproposal;
