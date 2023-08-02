import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Img_404 } from "../imagepath";

const Page404 = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 " style={{ margin: "0 auto" }}>
              {/* Page Not Found */}
              <div className="empty-content text-center">
                <img src={Img_404} alt="logo" className="img-fluid" />

                <div className="btn-item">
                  <Link className="btn get-btn" to="/">
                    بروبه خانه
                  </Link>
                </div>
              </div>
              {/* / Page Not Found */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Page404;
