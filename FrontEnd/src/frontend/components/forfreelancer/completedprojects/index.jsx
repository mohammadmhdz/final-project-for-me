import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import StickyBox from "react-sticky-box";
import { Developer_02, Developer_01, Developer_03 } from "../../imagepath";
// import { Sidebar } from "../sidebar";
import moment from "jalali-moment";

const FreelacerCompletedProjects = ({data}) => {
  // useEffect(() => {
  //   document.body.className = "dashboard-page";
  //   return () => {
  //     document.body.className = "";
  //   };
  // });
  const localItem = JSON.parse(localStorage.getItem("userInfo"));
  const daysBetween =(input) => {
    const now = new Date().getDate()
    const date = new Date(input).getDate()
    return now - date

  }
  console.log(data , " ssss")
  return (
    <>
      {/* Page Content */}
      {/* <div className="content"> */}
      {data?.map((items) => (

        // console.log(items.status === "بررسی شده")
        items.status === "بررسی شده" && (
          <div style={{paddingBottom : 10}}>
                <div className="col-lg-12 flex-wrap">
                  <div className="projects-card flex-fill">
                      <div className="card-body">
                        <div className="projects-details align-items-center">
                        <div className="proposer-img">
                            <img src={Developer_01} alt="" className="img-fluid" />
                          </div>
                          <div className="proposer-detail">
                           <Link to={{pathname : "/project-details" ,
                                               state : {jobIdInput: items.job , employeeId : +localItem.id}  
                                              }}>
                            <h4 className="">{items.job_title}</h4>
                           </Link>
                            <ul className="proposal-details">
                              <li className="Bold">
                              <Link to={{pathname : "/company-profile" ,
                                               state : {companyIdInput: items.Company} 
                                              }}>
                              <div>ارسال شده برای {items.company_name}</div>
                              </Link>
                                {/* <ahref="">ارسال شده برای {items.company_name}</a> */}
                              </li>
                              <li>{daysBetween(items.send_at)} روز پیش</li>
                              <li>
                              <span style={{color : "green"}}>بررسی شده </span>
                              </li>
                              <li >
                       
                             <span> تاریخ : {moment(items.status_change_date, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY/MM/DD")}</span>
                              </li>
                              </ul>
                          </div>
                        </div>
                        </div>
                    </div>
                    </div>
                {/* </div> */}
              </div>
            )
          
          
          )
          )
      }
      {/* </div> */}

      <div className="row">
        <div className="col-md-12">
          {/* <ul className="paginations freelancer">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fas fa-angle-right" /> قبلی
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      بعدی <i className="fas fa-angle-left" />
                    </a>
                  </li>
                </ul> */}
        </div>
      </div>
      {/* /pagination */}

      {/* /Page Content */}
    </>
  );
};
export default FreelacerCompletedProjects;
