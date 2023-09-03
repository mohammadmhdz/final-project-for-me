import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon, Img_02 } from "../../imagepath";
import { Sidebar } from "../sidebar";
// redux
import {
  companyDetails,
  updateCompanyDetails,
} from "../../../../actions/companyActions";
import { useDispatch, useSelector } from "react-redux";

const Settings = (props) => {
  const dispatch = useDispatch();
  const companyDetailsReducer = useSelector((state) => state.companyDetails);
  const companyDetailsUpdate = useSelector(
    (state) => state.companyUpdateDetail
  );
  const { companyDetail } = companyDetailsReducer;
  const [formData, updateFormData] = useState([]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    dispatch(updateCompanyDetails(formData));
    console.log(formData);
  };
  useEffect(() => {
    dispatch(companyDetails(1));
    // updateFormData(company_data)

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch]);

  useEffect(() => {
    updateFormData({ ...companyDetail?.company_data });
  }, [companyDetail]);

  console.log(companyDetail, "companyDetail");
  console.log(companyDetailsUpdate, "companyDetail");
  console.log(formData, "formData");
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
                            <input
                              onChange={handleChange}
                              id="Email"
                              placeholder={companyDetail.company_data?.Email}
                              type="email"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>آدرس وبسایت</label>
                            <input
                              onChange={handleChange}
                              id="Website"
                              placeholder={companyDetail.company_data?.Website}
                              type="email"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>نام و نام خانوادگی</label>
                            <input
                              onChange={handleChange}
                              id="Owner_name"
                              placeholder={
                                companyDetail.company_data?.user.Owner_name
                              }
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>نام شرکت</label>
                            <input
                              onChange={handleChange}
                              id="Name"
                              placeholder={companyDetail.company_data?.Name}
                              type="email"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>شماره تماس</label>
                            <input
                              onChange={handleChange}
                              id="Phone"
                              placeholder={companyDetail.company_data?.Phone}
                              type="email"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <select
                              id="population"
                              onChange={handleChange}
                              className="form-control select"
                            >
                              <option>1-10</option>
                              <option>10-50</option>
                              <option>50-100</option>
                              <option>100-500</option>
                              <option>بیشتر از 500</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-row pro-pad pt-0">
                          <div className="form-group col-md-6 pro-pic">
                            <label>لوگو شرکت</label>
                            <div className="d-flex align-items-center">
                              <div className="upload-images">
                                <img
                                  id="image"
                                  onChange={handleChangeImage}
                                  src={Img_02}
                                  alt="Image"
                                />
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
                          <input
                            onChange={handleChange}
                            id="Adress"
                            placeholder={companyDetail.company_data?.Adress}
                            type="text"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>شهر</label>
                          <select
                            onChange={handleChange}
                            id="city"
                            className="form-control select"
                          >
                            <option value={0}>تهران</option>
                            <option value={1}>البرز</option>
                            <option value={2}>گیلان</option>
                          </select>
                        </div>
                        {/* <div className="form-group col-md-6">
                          <label>شهر</label>
                          <input type="text" className="form-control" />
                        </div> */}
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
                            onChange={handleChange}
                            id="about"
                            placeholder={companyDetail.company_data?.about}
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
                          <input
                            onChange={handleChange}
                            id="facebook"
                            placeholder={companyDetail.company_data?.facebook}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>لینکداین</label>
                          <input
                            onChange={handleChange}
                            id="linkdin"
                            placeholder={companyDetail.company_data?.linkdin}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>اینستاگرام</label>
                          <input
                            onChange={handleChange}
                            id="instagram"
                            placeholder={companyDetail.company_data?.instagram}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="text-end">
                      <div className="pro-body">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-secondary click-btn btn-plan"
                          type="submit"
                        >
                          تایید
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-primary click-btn btn-plan"
                          type="submit"
                        >
                          بازگشت
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
