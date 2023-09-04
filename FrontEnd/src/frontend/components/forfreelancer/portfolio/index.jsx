import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import { Image } from "react-bootstrap";
import {
  home_icon,
  Project_1,
  Project_2,
  Project_3,
  Project_4,
  Project_5,
  Project_6,
} from "../../imagepath";
import { employeePortfolioDetails } from "../../../../actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";

const FreelancerPortfolio = (props) => {
  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.employeePortfolio);
  const localItem = JSON.parse(localStorage.getItem("userInfo"));
  const { employeePortfolioArray } = portfolio;
  useEffect(() => {
    dispatch(employeePortfolioDetails(localItem.associated_id));
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch]);
  console.log(employeePortfolioArray, "portfolio");

  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row mt-5 align-right">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="portfolio-item">
                <div className="pro-head p-0 pb-4">
                  <h3 className="mb-0">پورتفولیو</h3>
                  <a
                    className="btn btn-primary back-btn br-0"
                    data-bs-toggle="modal"
                    href="#portfolio"
                  >
                    + اضافه کردن
                  </a>
                </div>
                <div className="pro-content pt-4 pb-4">
                  <div className="row">
                    {employeePortfolioArray.map((item) => (
                      <div className="col-sm-6 col-lg-4">
                        <div className="project-widget">
                          <div className="portfolio-img">
                            <Image
                              className="img-fluid"
                              alt="User Image"
                              src={`http://127.0.0.1:8000/${item.image}`}
                            />
                            <div className="portfolio-live">
                              <div className="portfolio-content">
                                <a
                                  data-bs-toggle="modal"
                                  href="#portfolio-edit"
                                  className="port-icon"
                                >
                                  <i className="fas fa-pen" />
                                </a>
                                <a href="#" className="port-icon me-2">
                                  <i className="fas fa-trash-alt" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="portfolio-detail">
                            <h3 className="pro-name">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                          بعدی <i className="fas fa-angle-left" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="portfolio">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4>اضافه کردن نمونه کار</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <div className="port-title">
                <h3>
                  نمونه کارهای خود را اضافه کنید تا شانس بیشتری برای استخدام
                  داشته باشید
                </h3>
              </div>
              <form>
                <div className="modal-info">
                  <div className="row align-right">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>توضیحات</label>
                        <input type="text" className="form-control" />
                      </div>

                      <label className="br-0 file-upload image-upbtn">
                        بارگذاری تصاویر <input type="file" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-right">
                  <a
                    data-bs-dismiss="modal"
                    className="btn btn-primary black-btn submit-btn"
                  >
                    لغو
                  </a>
                  <button type="submit" className="btn btn-primary submit-btn">
                    تایید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* The Modal */}
      <div className="modal fade" id="portfolio-edit">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">اضافه کردن نمونه کار</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <div className="port-title">
                <h3>
                  نمونه کارهای خود را اضافه کنید تا شانس بیشتری برای استخدام
                  داشته باشید
                </h3>
              </div>
              <form>
                <div className="modal-info">
                  <div className="row align-right">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>توضیحات</label>
                        <input type="text" className="form-control" />
                      </div>

                      <label className="br-0 file-upload image-upbtn">
                        بارگذاری تصاویر <input type="file" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-right">
                  <a
                    data-bs-dismiss="modal"
                    className="btn btn-primary black-btn submit-btn ms-2"
                  >
                    لغو
                  </a>
                  <button type="submit" className="btn btn-primary submit-btn">
                    تایید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FreelancerPortfolio;
