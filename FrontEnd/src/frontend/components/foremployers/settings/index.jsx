import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon, Img_02 } from "../../imagepath";
import { Sidebar } from "../sidebar";

const Settings = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row mt-5 align-right">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="pro-pos">
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/profile-settings">
                        تنظیمات پروفایل
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/change-password">
                        تغییر رمز عبور
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/delete-account">
                        حذف حساب کاربری
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="setting-content">
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        تنظیمات پروفایل{" "}
                      </h3>
                    </div>
                    <form>
                      <div className="pro-body p-0">
                        <div className="form-row pro-pad">
                          <div className="form-group col-md-6">
                            <label>آدرس ایمیل</label>
                            <input type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>آدرس وبسایت</label>
                            <input type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>نام و نام خانوادگی</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>نام شرکت</label>
                            <input type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>شماره تماس</label>
                            <input type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>جمعیت شرکت</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>
                        <div className="form-row pro-pad pt-0">
                          <div className="form-group col-md-6 pro-pic">
                            <label>لوگو شرکت</label>
                            <div className="d-flex align-items-center">
                              <div className="upload-images">
                                <img src={Img_02} alt="Image" />
                                <a
                                  href=""
                                  className="btn btn-icon btn-danger btn-sm"
                                >
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                              <label className="file-upload image-upbtn me-3">
                                تغییر تصویر <input type="file" />
                              </label>
                            </div>
                            <p>اندازه تصویر : ۳۰۰*۳۰۰</p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        محل شرکت
                      </h3>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="form-group col-md-12">
                          <label>آدرس</label>
                          <input type="text" className="form-control" />
                        </div>

                        <div className="form-group col-md-6">
                          <label>استان</label>
                          <select className="form-control select">
                            <option value={0}>تهران</option>
                            <option value={1}>البرز</option>
                            <option value={2}>گیلان</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>شهر</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        درباره شرکت
                      </h3>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="form-group col-md-12">
                          <textarea
                            className="form-control"
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        شبکه های اجتماعی
                      </h3>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>فیس بوک</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>لینکداین</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>اینستاگرام</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="text-end">
                      <div className="pro-body">
                        <button
                          className="btn btn-secondary click-btn btn-plan"
                          type="submit"
                        >
                          بازگشت
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-primary click-btn btn-plan"
                          type="submit"
                        >
                          تایید
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Settings;
