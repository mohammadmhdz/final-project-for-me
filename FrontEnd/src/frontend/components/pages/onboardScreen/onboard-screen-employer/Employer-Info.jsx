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
                    placeholder="مهدیزاده"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-2 col-xl-2">
                <label className="focus-label">
                  ایمیل <span>*</span>
                </label>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-5">
                <div className="form-group">
                  <label>ایمیل</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="yourname@example.com"
                  />
                </div>
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
