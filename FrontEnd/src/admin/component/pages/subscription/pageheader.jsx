import React from "react";
import { Link } from "react-router-dom";

function Pageheader() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header subscribe-head">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title"> لیست اشتراک کاربران </h3>
          </div>
          <div className="col-auto">
            <Link
              to="/admin/view-price-employe"
              className="btn add-button ms-2"
            >
              مشاهده پلن ها
            </Link>
          </div>
        </div>
      </div>
      {/* /Page Header */}
    </>
  );
}

export default Pageheader;
