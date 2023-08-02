import React, { useState } from "react";

const Other = ({ nextTab3, prevTab4 }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="field-card select-account select-btn">
        <div className="text-center onboard-head">
          <h2>سایر اطلاعات</h2>
          <p>بعدا میتوانید این اطلاعات را تغییر دهید </p>
        </div>
        <div className="field-item personal-info">
          <div id="individual-doc">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-2">
                <label className="focus-label">فیس بوک </label>
              </div>
              <div className="col-md-12 col-lg-9 col-xl-9">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="لینک فبس بوک خودرا وارد کنید"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 col-xl-2">
                <label className="focus-label">اینستاگرام</label>
              </div>
              <div className="col-md-12 col-lg-9 col-xl-9">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="لینک  اینستاگرام خودرا وارد کنید"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 col-xl-2">
                <label className="focus-label">لینکداین </label>
              </div>
              <div className="col-md-12 col-lg-9 col-xl-9">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="لینک لینکداین خودرا وارد کنید"
                  />
                </div>
              </div>
              {/* <div className="col-md-12 col-lg-3 col-xl-2">
                <label className="focus-label">Working Hours</label>
              </div>
              <div className="col-md-12 col-lg-9 col-xl-9">
                <div className="form-group working-position">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Same every day"
                  />
                  <div className="form-check form-switch d-inline-block work-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check_hour"
                      defaultChecked="true"
                      onClick={() => setIsShow(!isShow)}
                    />
                  </div>
                </div>
                <div
                  className="checkout-hour"
                  style={{ display: isShow ? "none" : "block" }}
                >
                  <div className="other-info-list">
                    <ul>
                      <li className="active-hour">Mon</li>
                      <li className="active-hour">Tue</li>
                      <li className="active-hour">Wed</li>
                      <li className="active-hour">Thr</li>
                      <li className="active-hour">Fri</li>
                      <li>Sat</li>
                      <li>Sun</li>
                    </ul>
                  </div>
                  <div className="time-box d-flex">
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="8:00"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="20:00"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="check-hour"
                  style={{ display: isShow ? "block" : "none" }}
                >
                  <div className="row">
                    <div className="col-md-6 col-xl-5">
                      <div className="time-box d-flex">
                        <div className="other-info-list">
                          <ul>
                            <li className="active-hour">Mon</li>
                          </ul>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="8:00"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="20:00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-5">
                      <div className="time-box d-flex">
                        <div className="other-info-list">
                          <ul>
                            <li className="active-hour">Tue</li>
                          </ul>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="8:00"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="20:00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-5">
                      <div className="time-box d-flex">
                        <div className="other-info-list">
                          <ul>
                            <li className="active-hour">Wed</li>
                          </ul>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="8:00"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="20:00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-5">
                      <div className="time-box d-flex">
                        <div className="other-info-list">
                          <ul>
                            <li className="active-hour">Tht</li>
                          </ul>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="8:00"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="20:00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-5">
                      <div className="time-box d-flex">
                        <div className="other-info-list">
                          <ul>
                            <li className="active-hour">Fri</li>
                          </ul>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="8:00"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="20:00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-5">
                      <div className="time-box d-flex">
                        <div className="other-info-list">
                          <ul>
                            <li>Sat</li>
                          </ul>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="8:00"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="20:00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-5">
                      <div className="time-box d-flex">
                        <div className="other-info-list">
                          <ul>
                            <li>Sun</li>
                          </ul>
                        </div>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="8:00"
                          />
                        </div>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="20:00"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back ms-3"
            name="next"
            type="button"
            defaultValue="بازگشت"
            onClick={prevTab4}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="ثبت"
            onClick={nextTab3}
          />
        </div>
      </div>
    </>
  );
};

export default Other;
