import React from "react";
import { logo_small } from "../imagepath";

function AddFreelancer() {
  return (
    <>
      {/* Add Modal */}
      <div className="modal fade custom-modal" id="add-category">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header flex-wrap">
              <div className="text-center w-100 mb-3">
                <img src={logo_small} alt="" />
              </div>
              <h4 className="modal-title">اضافه کردن کارجو</h4>
              <button type="button" className="close" data-bs-dismiss="modal">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>نام نام خوانوادگی</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>ایمیل</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>رمزعبور</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>تایید رمزعبور</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>تخصص </label>
                  <select className="form-control form-select">
                    <option>انتخاب</option>
                    <option>Frontend Developer</option>
                    <option>Graphic Designer</option>
                  </select>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    تایید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Add Modal */}
    </>
  );
}

export default AddFreelancer;
