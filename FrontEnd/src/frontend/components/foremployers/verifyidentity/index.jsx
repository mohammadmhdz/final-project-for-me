import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon, Img, Img_02 } from "../../imagepath";
import { Sidebar } from "../sidebar";

const VerifyIdentity = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center"></div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* Verification Details */}
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="payment-list wallet card-body align-right">
                  <h3>اطلاعات شرکت</h3>
                  <form>
                    <div className="row align-right">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="first_name">نام شرکت</label>
                          <input
                            className="form-control"
                            id="first_name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="last_name">شماره تماس</label>
                          <input
                            className="form-control"
                            id="last_name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="card_number">شماره ثبت شرکت</label>
                          <input
                            className="form-control"
                            id="card_number"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>آپلود مدارک</label>
                          <div className="uplod">
                            <label className="file-upload image-upbtn">
                              انتخاب <input type="file" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="comment">آدرس</label>
                          <textarea
                            className="form-control"
                            rows={5}
                            id="comment"
                            defaultValue={""}
                          />
                          <p className="mt-2">
                            اطلاعات ثبت شده باید با مدارک مغایرت داشته باشد
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12 text-end">
                        <button type="submit" className="btn-primary click-btn">
                          تایید
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Verification Details */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default VerifyIdentity;
