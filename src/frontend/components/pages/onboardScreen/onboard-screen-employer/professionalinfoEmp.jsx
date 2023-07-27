import React from "react";
import { Link } from "react-router-dom";

// {setShow3,toggleSetShowTwo,setShow2,toggleSetShowThree}
const ProfessionalInfoEmp = ({ nextTabEmp2, prevTabEmp2 }) => {
  return (
    <>
      {/* Professional Info */}
      <div className=" field-card select-account select-btn align-right">
        <div className="text-center onboard-head">
          <h2>اطلاعات شرکت</h2>
          <p>
            اطلاعات شرکت خود را وارد کنید تا کارجویان با آگاهی بیشتر برای فرصت
            های شغلی شما درخواست بفرستند
          </p>
        </div>
        <div className="field-item personal-info space-info">
          <div id="individual">
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">
                  نام شرکت <span>*</span>
                </label>
              </div>
              <div className="col-md-12 col-lg-10">
                <div className="form-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">
                  جمعیت <span>*</span>
                </label>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="form-group">
                  <select name="price" className="form-control select-level">
                    <option value="">۱-۱۰</option>
                    <option value="">۱۰-۵۰</option>
                    <option value="">۵۰-۱۰۰</option>
                    <option value="">۱۰۰-۵۰۰</option>
                    <option value="">۵۰۰-۱۰۰۰</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">
                  لوگو <span>*</span>
                </label>
              </div>
              <div className="col-md-6 col-lg-10 col-xl-10">
                <div className="pro-form-img">
                  <label className="file-upload image-upbtn ">
                    بارگذاری <input type="file" />
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">سال تاسیس </label>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-5">
                <div className="form-group">
                  <div className="cal-icon employe-cal-icon">
                    <input
                      className="form-control datetimepicker"
                      type="date"
                      placeholder="Enter Date"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">
                  اطلاعات تماس شرکت <span>*</span>
                </label>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="form-group">
                  <label>شماره تماس</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="شماره تماس خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="form-group ">
                  <label>ایمیل</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="آدرس ایمیل خود را وارد کنید"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">وبسایت</label>
              </div>
              <div className="col-md-12 col-lg-10">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="آدرس وبسایت خود را وارد کنید"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">آدرس</label>
              </div>
              <div className="col-md-12 col-lg-10">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="آدرس بخش ۱"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="آدرس بخش ۲"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="form-group">
                      <select
                        name="price"
                        className="form-control select-level"
                      >
                        <option value={0}>استان</option>
                        <option value={1}>تهران</option>
                        <option value={1}>زتجان</option>
                        <option value={1}>گیلان</option>
                        <option value={1}>البرز</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back ms-3"
            name="next"
            type="button"
            defaultValue="بازگشت"
            onClick={prevTabEmp2}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="ثبت"
            onClick={nextTabEmp2}
          />
        </div>
      </div>
      {/* /Professional info */}
    </>
  );
};

export default ProfessionalInfoEmp;
