import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_02, Developer_01, Developer_03 } from "../../imagepath";
import { Sidebar } from "../sidebar";
import moment from "jalali-moment";

const FreelacerCancelledProjects = ({data}) => {
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
        items.status === "رد شده" && (
          <div className="my-projects-list">
                        <div className="row align-right">
                          <div className="col-lg-12 flex-wrap">
                            <div className="projects-cancelled-card flex-fill">
                              <div className="card-body">
                                <div className="projects-details align-items-center">
                                  <div className="proposer-img">
                                    <img
                                      src={Developer_01}
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="proposer-detail">
                                  <Link to={{pathname : "/project-details" ,
                                               state : {jobIdInput: items.job , employeeId : +associated_id}  
                                              }}>
                                    <h4 className="">{items.job_title}</h4>
                                    </Link>
                                    <ul className="proposal-details">
                                      <li className="Bold">
                                        {" "}<Link to={{pathname : "/company-profile" ,
                                               state : {companyIdInput: items.Company} 
                                              }}>
                                        <div>{items.company_name}</div>
                                    </Link>
                                      </li>
                                      <li>۲ روزپیش</li>
                                      <li className=" red">
                                        رد شده به علت :{" "}
                                        <span>{items.message}</span>
                                      </li>
                                      <li className=" red">
                                        رد شده درتاریخ :{" "}
                                        <span>
                                          {" "}
                                          {moment(items.send_at, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY/MM/DD")}
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
// const FreelacerCancelledProjects = (props) => {
//   useEffect(() => {
//     document.body.className = "dashboard-page";
//     return () => {
//       document.body.className = "";
//     };
//   });
//   return (
//     <>
//       {/* Page Content */}
//       <div className="content">
//         <div className="container-fluid">
//           <div className="row mt-5 align-right">
//             <div className="col-xl-3 col-md-4 theiaStickySidebar">
//               <StickyBox offsetTop={20} offsetBottom={20}>
//                 <Sidebar />
//               </StickyBox>
//             </div>
//             <div className="col-xl-9 col-md-8">
//               <div className="page-title">
//                 <h3>مدیریت درخواست ها</h3>
//               </div>
//               <nav className="user-tabs mb-4">
//                 <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link"
//                       to="/freelancer-project-proposals"
//                     >
//                       همه درخواست های من
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link"
//                       to="/freelancer-ongoing-projects"
//                     >
//                       در انتظار بررسی
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link"
//                       to="/freelancer-completed-projects"
//                     >
//                       بررسی شده
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       className="nav-link active"
//                       to="/freelancer-cancelled-projects"
//                     >
//                       رد شده
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//               {/* project list */}
//               <div className="my-projects-list">
//                 <div className="row align-right">
//                   <div className="col-lg-12 flex-wrap">
//                     <div className="projects-cancelled-card flex-fill">
//                       <div className="card-body">
//                         <div className="projects-details align-items-center">
//                           <div className="proposer-img">
//                             <img
//                               src={Developer_01}
//                               alt=""
//                               className="img-fluid"
//                             />
//                           </div>
//                           <div className="proposer-detail">
//                             <h4 className="">طراح UI/UX</h4>
//                             <ul className="proposal-details">
//                               <li className="Bold">
//                                 {" "}
//                                 <a href="">ارسال شده برای داده ورزی سداد</a>
//                               </li>
//                               <li>۲ روزپیش</li>
//                               <li className=" red">
//                                 رد شده به علت : <span>عدم تطابق سن </span>
//                               </li>
//                               <li className=" red">
//                                 رد شده درتاریخ : <span>۲ مرداد ۱۴۰۲</span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* /project list */}

//               <div className="row">
//                 <div className="col-md-12">
//                   <ul className="paginations freelancer">
//                     <li>
//                       <a href="#">
//                         {" "}
//                         <i className="fas fa-angle-right" /> قبلی
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">1</a>
//                     </li>
//                     <li>
//                       <a href="#" className="active">
//                         2
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">3</a>
//                     </li>
//                     <li>
//                       <a href="#">4</a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         بعدی <i className="fas fa-angle-left" />
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               {/* /pagination */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Page Content */}
//     </>
//   );
// };
export default FreelacerCancelledProjects;
