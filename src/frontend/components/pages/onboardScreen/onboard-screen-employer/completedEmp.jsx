import React from "react";
import { Link } from "react-router-dom";
import { Completed_select } from "../../../imagepath";

const CompleteingEmp = ({ prevTabEmp3 }) => {
  return (
    <>
      <div className=" field-card">
        <div className="account-onborad complte-board back-home">
          <img src={Completed_select} className="img-fluid" alt="icon" />
          <h2>سلام سپیده زینال زادگان</h2>
          <p>
            اطلاهات ورودی شما با موفقیت ثبت گردید.لطفا برای تکمیل فرایند ثبت نام
            ایمیل خود را بررسی کنید
          </p>
          <Link to="#" className="btn btn-primary" onClick={prevTabEmp3}>
            {/* {" "} */}
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompleteingEmp;
