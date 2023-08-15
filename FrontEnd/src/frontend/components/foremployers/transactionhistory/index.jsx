import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";

const Transactionhistory = (props) => {
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
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="transaction-table card">
                <div className="card-header">
                  <div className="row mt-5 align-right justify-content-between align-items-center">
                    <div className="col">
                      <h5 className="card-title">پرداخت ها</h5>
                    </div>
                    <div className="col-auto d-flex align-items-center flex-wrap transaction-shortby"></div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-box">
                    <table className="table">
                      <thead>
                        <tr className="thead-pink">
                          <th>شماره رهگیری</th>
                          <th>درگاه</th>
                          <th>مقدار</th>
                          <th>وضعیت</th>
                          <th>تاریخ</th>
                        </tr>
                      </thead>
                      <tbody className="table table-hover table-center">
                        <tr>
                          <td>
                            <Link to="/view-invoice">5622</Link>
                          </td>
                          <td>زرین پال</td>
                          <td>۲۱۰ هزار تومان</td>
                          <td>
                            <span className="badge bg-success-light">
                              پرداخت شده
                            </span>
                          </td>
                          <td>۱۰ مرداد ۱۴۰۲</td>
                        </tr>
                      </tbody>
                    </table>
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
export default Transactionhistory;
