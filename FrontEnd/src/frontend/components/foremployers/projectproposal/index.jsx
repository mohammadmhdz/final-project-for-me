import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Flags_en,
  Logo_01,
} from "../../imagepath";
import { Sidebar } from "../sidebar";

const Projectproposal = (props) => {
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
              <nav className="user-tabs mb-4">
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
              </nav>
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-10 flex-wrap">
                    <div className="projects-card flex-fill">
                      <div className="card-body">
                        <div className="projects-details align-items-center">
                          <div className="project-info">
                            <span>فراوب|FaraWeb</span>
                            <h2>توسعه دهنده فرانت اند</h2>
                            <div className="customer-info">
                              <ul className="list-details">
                                <li>
                                  <div className="slot">
                                    <p>امکان دورکاری</p>
                                    <h5>ندار</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>شهر</p>
                                    <h5>تهران</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>انقضای اگهی</p>
                                    <h5>۱۰ روز</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="project-hire-info">
                            <div className="projects-amount proposals">
                              <h3>۱۷ میلیون</h3>
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
                          <span>5</span>
                          <h3>درخواست</h3>
                        </div>
                      </div>
                    </div>
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
                        name="price"
                        className="form-control select-level"
                      >
                        <option value="">در انتظار بررسی</option>
                        <option value="">بررسی شده</option>
                        <option value="">رد شده</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="proposal-card">
                  {/* Proposals */}
                  <div className="project-proposals align-items-center">
                    <div className="proposals-info">
                      <div className="proposer-info">
                        <div className="proposer-img">
                          <img src={Avatar_1} alt="" className="img-fluid" />
                        </div>
                        <div className="proposer-detail">
                          <h4>محمد مهدی زاده</h4>
                          <ul className="proposal-details">
                            <li> ۲۹ تیر ۱۴۰۲</li>

                            <li>
                              {" "}
                              <Link
                                to="/developer-profile"
                                className="font-semibold text-primary "
                              >
                                مشاهده پروفایل
                              </Link>
                            </li>
                            <li>وضعیت درخواست : درانتظار بررسی</li>
                          </ul>
                        </div>
                      </div>
                      <div className="proposer-bid-info">
                        <div className="proposer-bid"></div>
                        <div className="proposer-confirm">
                          <button
                            style={hired ? { pointerEvents: "none" } : {}}
                            disabled={hired ? true : false}
                            className={
                              hired
                                ? "disable-btn projects-btn  ms-1"
                                : "projects-btn ms-1"
                            }
                          >
                            تغییر به استخدام شده
                          </button>
                          <button
                            style={hired2 ? { pointerEvents: "none" } : {}}
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
                            style={hired3 ? { pointerEvents: "none" } : {}}
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
                    </div>
                    <div className="description-proposal">
                      <h5 className="desc-title">متن پیام</h5>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است وو
                        سه درصد گذشته حال و آینده
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Proposals list */}
              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations">
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fas fa-angle-right" /> قبلی
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
                        بعذی <i className="fas fa-angle-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /pagination */}
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
