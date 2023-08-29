import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon, Img, Img_02 } from "../../imagepath";
import { Sidebar } from "../sidebar";
// redux
import { useDispatch, useSelector } from "react-redux";
import { employeeDetails } from "../../../../actions/employeeActions";

const FreelancerSettings = (props) => {
  // redux
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employeeDetails);
  const {employee} = employeeList ;
  const [formData, setFormData] = useState({employee});

  
  const localItem = JSON.parse(localStorage.getItem("userInfo"))

  useEffect(() => {
    // redux
    dispatch(employeeDetails(localItem.id))

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  },[dispatch]);

  console.log(employee)
  console.log(formData ,'formData')
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid mt-5">
          <div className="row align-right">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="pro-pos">
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="/freelancer-profile-settings"
                      >
                        تنظیمات حساب کاربری
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-change-password"
                      >
                        تغییر رمز عبور
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-delete-account"
                      >
                        حذف حساب کاربری
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="setting-content">
                  <form>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          تنظیمات{" "}
                        </h3>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>نام کاربری</label>
                            <input type="text" className="form-control" defaultValue={formData.user?.name} />
                          </div>
                          <div className="form-group col-md-6">
                            <label>آدرس ایمیل</label>
                            <input type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>نام و نام خانوادگی</label>
                            <input type="text" className="form-control" />
                          </div>

                          <div className="form-group col-md-6">
                            <label>شماره تماس</label>
                            <input type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>جنسیت</label>
                            <select
                              name="price"
                              className="form-control select"
                            >
                              <option value={0}>مرد</option>
                              <option value={1}>زن</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>نوع همکاری</label>
                            <select
                              name="price"
                              className="form-control select"
                            >
                              <option value={0}>تمام وقت</option>
                              <option value={1}>پاره وقت</option>
                              <option value={2}>ساعتی </option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label> زبان </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-row pro-pad pt-0">
                          <div className="form-group col-md-6 pro-pic">
                            <label>تصویر حساب کاربری</label>
                            <div className="d-flex align-items-center">
                              <div className="upload-images">
                                <img src={Img_02} alt="Image" />
                                <a
                                  href=""
                                  className="btn btn-icon btn-danger btn-sm"
                                >
                                  <i className="fa fa-trash" />
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
                    </div>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          محل سکونت
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
                            <select
                              name="price"
                              className="form-control select"
                            >
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
                          درباره من
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
                    <div className="form-row">
                      <div className="col-md-12 col-xl-4 d-flex">
                        <div className="pro-card flex-fill mb-3">
                          <div className="pro-head">
                            <h3 className="pro-title without-border mb-0">
                              مهارت ها
                            </h3>
                            <a href="#" className="btn fund-btn skill-add">
                              اضافه کردن
                            </a>
                          </div>
                          <div className="pro-body skill-info">
                            <div className="form-row align-items-center skill-cont">
                              <div className="form-group col-md-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Front End Developer"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="form-group col-md-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Front End Developer"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="form-group col-md-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Front End Developer"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="form-group col-md-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Front End Developer"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="form-group col-md-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Front End Developer"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center skill-cont">
                              <div className="form-group col-md-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Front End Developer"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-xl-8">
                        <div className="card">
                          <div className="pro-head">
                            <h3 className="pro-title without-border mb-0">
                              مدارک رسمی /جوایز
                            </h3>
                            <a href="#" className="btn fund-btn add-award">
                              اضافه کردن
                            </a>
                          </div>
                          <div className="pro-body  award-info">
                            <div className="form-row align-items-center award-cont">
                              <div className="form-group col-md-2">
                                <img
                                  alt="profile image"
                                  src={Img}
                                  className="avatar-medium"
                                />
                              </div>
                              <div className="form-group col-md-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Best Game Designer"
                                />
                              </div>
                              <div className="form-group col-md-3">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  defaultValue="05/10/2020"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center award-cont">
                              <div className="form-group col-md-2">
                                <img
                                  alt="profile image"
                                  src={Img}
                                  className="avatar-medium"
                                />
                              </div>
                              <div className="form-group col-md-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Best Game Designer"
                                />
                              </div>
                              <div className="form-group col-md-3">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  defaultValue="05/10/2020"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center award-cont">
                              <div className="form-group col-md-2">
                                <img
                                  alt="profile image"
                                  src={Img}
                                  className="avatar-medium"
                                />
                              </div>
                              <div className="form-group col-md-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Best Game Designer"
                                />
                              </div>
                              <div className="form-group col-md-3">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  defaultValue="05/10/2020"
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="pro-head">
                            <h3 className="pro-title without-border mb-0">
                              زبان
                            </h3>
                            <a href="#" className="btn fund-btn add-lang">
                              اضافه کردن
                            </a>
                          </div>
                          <div className="pro-body  lang-info">
                            <div className="form-row align-items-center lang-cont">
                              <div className="form-group col-md-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="انگلیسی"
                                />
                              </div>
                              <div className="form-group col-md-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={100}
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center lang-cont">
                              <div className="form-group col-md-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="روسی"
                                />
                              </div>
                              <div className="form-group col-md-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={90}
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            <div className="form-row align-items-center lang-cont">
                              <div className="form-group col-md-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="آلمانی"
                                />
                              </div>
                              <div className="form-group col-md-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={90}
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          سوابق شغلی
                        </h3>
                        <a href="#" className="btn fund-btn add-exp">
                          اضافه کردن
                        </a>
                      </div>
                      <div className="pro-body">
                        <div className="exp-info">
                          <div className="row exp-cont">
                            <div className="form-group col-md-6">
                              <label>عنوان</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                              <label>نام شرکت </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                              <label>از تاریخ</label>
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="Select Date"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label>تا تاریخ</label>
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="Select Date"
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label className="custom_check">
                                <input type="checkbox" name="rem_password" />
                                <span className="checkmark" /> هم اکنون مشغول
                                کار هستم
                              </label>
                            </div>
                            <div className="form-group col-md-12">
                              <label>خلاصه</label>
                              <textarea
                                className="form-control"
                                rows={5}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          سوابق تحصیلی
                        </h3>
                        <a href="#" className="btn fund-btn">
                          اضافه کردن
                        </a>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="form-group col-md-12">
                            <label>مقطع تحصیلی</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>نام دانشگاه / موسسه آموزشی</label>
                            <select
                              name="price"
                              className="form-control select"
                            >
                              <option value={0}>انتخاب کنید </option>
                              <option value={1}>University</option>
                              <option value={2}>University</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>از سال</label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>تا سال</label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                            />
                          </div>
                          <div className="form-group col-md-12">
                            <label>خلاصه</label>
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
                            <label>دریبل</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>توییتر</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>لینکداین</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>گیت</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>بی هنس</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card text-end">
                      <div className="pro-body">
                        <button className="btn btn-secondary click-btn btn-plan">
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
                  </form>
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
export default FreelancerSettings;
