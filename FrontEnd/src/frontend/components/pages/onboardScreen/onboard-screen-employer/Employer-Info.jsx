import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar_3 } from "../../../imagepath";

export const EmployerInfo = ({ nextTabEmp1, prevTabEmp }) => {
  const [addListEmp, setAddListEmp] = useState([""]);

  const handelAddEmp = () => {
    setAddListEmp([...addListEmp, " "]);
  };
  useEffect(() => {
    console.log("jagan");
  }, []);

  const handelRemoveEmp = (index) => {
    const listEmp = [...addListEmp];
    listEmp.splice(index, 1);
    setAddListEmp(listEmp);
  };

  return (
    <>
      <div className=" field-card select-account select-btn align-right">
        <div className="text-center onboard-head">
          <h2>اطلاعات شخصی</h2>
        </div>
        <div className="field-item personal-info space-info mt-3">
          <form>
            <div className="row">
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">
                  نام <span>*</span>
                </label>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="form-group">
                  <label>نام</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="محمد"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="form-group">
                  <label>نام خانوداگی</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="مهدیزاده"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">
                  تصویر پروفایل <span>*</span>
                </label>
              </div>
              <div className="col-md-12 col-lg-10 col-xl-10">
                <div className="pro-form-img">
                  <img src={Avatar_3} alt="User Image" />
                  <label className="file-upload image-upbtn ">
                    بارگذاری <input type="file" />
                  </label>
                </div>
              </div>
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">
                  اطلاعات تماس <span>*</span>
                </label>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="form-group">
                  <label>شماره تماس</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="+33 43685825"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="form-group">
                  <label>ایمیل</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="eugeneforest@example.com"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">
                  توضیحات <span>*</span>
                </label>
              </div>
              <div className="col-md-12 col-lg-10 col-xl-10">
                <div className="form-group min-characters">
                  <textarea
                    className="form-control"
                    rows={5}
                    defaultValue={""}
                  />
                  <p>حداقل ۱۵۰ کاراکتر</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">
                  توضیحات <span>*</span>
                </label>
              </div>
              <div className="col-md-12 col-lg-10 col-xl-10">
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <div className="form-group description-group">
                      <label>زبان</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="English"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <div className="form-group description-group">
                      <label>سطح</label>
                      <select
                        name="price"
                        className="form-control select-level "
                        id="business-type"
                      >
                        <option value="Individual">انتخاب سطح</option>
                        <option value="Basic">ابتداعی</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-4 col-xl-4">
                    <div className="new-addd">
                      <Link
                        to="#"
                        id="new_add"
                        className="add-new"
                        onClick={handelAddEmp}
                      >
                        <i className="fas fa-plus" /> اضافه کردن
                      </Link>
                    </div>
                  </div>
                </div>

                {addListEmp.map((add, index) => (
                  <div key={index} className="row">
                    <div className="col-md-4 col-lg-4 col-xl-4">
                      <div className="form-group description-group">
                        <label>زبان</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="English"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4">
                      <div className="form-group description-group">
                        <label>سطح</label>
                        <select
                          name="price"
                          className="form-control select-level"
                          id="business-type"
                        >
                          <option value="Individual">انتخاب سطح</option>
                          <option value="Basic">ابتداعی</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4">
                      <Link
                        to="#"
                        style={{
                          color: "red",
                          display: "flex",
                          justifyContent: "end",
                        }}
                        onClick={() => handelRemoveEmp(index)}
                      >
                        حذف
                      </Link>
                    </div>
                    <div id="add_row">{addListEmp.length - 1 === index}</div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back ms-3"
            name="next"
            type="button"
            defaultValue="بازگشت"
            onClick={prevTabEmp}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="ثبت"
            type="button"
            defaultValue="ثبت"
            onClick={nextTabEmp1}
          />
        </div>
      </div>
    </>
  );
};
