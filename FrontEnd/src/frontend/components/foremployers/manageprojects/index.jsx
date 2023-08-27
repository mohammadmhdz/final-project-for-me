import React, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Flags_en, home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import moment from "jalali-moment";
import Pendingprojects from "../pendingprojects/index"
import CompletedProjects from "../completedprojects";
// redux
import { companyJobsListAction } from "../../../../actions/companyActions"
import { useDispatch, useSelector} from "react-redux";

const Manageprojects = (props) => {
  const [allRequest, setAllRequest] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState(false);
  const [expired, setExpired] = useState(false);

  const handleAllRequest = () => {
    setAllRequest(true);
    setComplete(false);
    setWaiting(false);
    setActive(false);
    setExpired(false);
  };
  const handleWaiting = () => {
    setAllRequest(false);
    setComplete(false);
    setWaiting(true);
    setActive(false);
    setExpired(false);

  };
  const handleActive = () => {
    setAllRequest(false);
    setComplete(false);
    setWaiting(false);
    setExpired(false);
    setActive(true);

  };
  const handleComplete = () => {
    setAllRequest(false);
    setWaiting(false);
    setActive(false);
    setComplete(true);
    setExpired(false);

  };
  const handleExpired = () => {
    setAllRequest(false);
    setWaiting(false);
    setActive(false);
    setComplete(false);
    setExpired(false);
    setExpired(true);


  };

  const daysBetween =(input) => {
      const now = new Date().getDate()
      const date = new Date(input).getDate()
      return now - date

    }
    // redux
    const dispatch = useDispatch();
    const companyJobsAllList = useSelector((state) => state.companyJobsList);
   const {companyJobsListArray} = companyJobsAllList 

  useEffect(() => {
    dispatch(companyJobsListAction())
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  } , [dispatch]);
  console.log(companyJobsListArray)
  return (
    <>
      {/* Page Content */}
      <div className="content content-page align-right">
        <div className="container-fluid">
          <div className="row mt-5">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <div className="row">
                  <div className="col-md-6">
                    <h3>همه کار های منتشر شده شما</h3>
                  </div>
                  <div className="col-md-6 text-end">
                    <Link
                      to="/post-project"
                      className="btn btn-primary back-btn mb-4"
                    >
                      ایجاد کار
                    </Link>
                  </div>
                </div>
              </div>
              <nav className="user-tabs project-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className={allRequest? "nav-link active" : "nav-link"} to="/manage-projects" onClick={handleAllRequest}>
                      همه
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={waiting? "nav-link active" : "nav-link"} onClick={handleWaiting}>
                      در انتظار
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={active? "nav-link active" : "nav-link"} to="/ongoing-projects" onClick={handleActive}>
                      فعال
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={complete? "nav-link active" : "nav-link"} onClick={handleComplete}>
                      تکمیل شده
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={expired? "nav-link active" : "nav-link"} to="/cancelled-projects" onClick={handleExpired}>
                      منقضی شده
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
            {allRequest ? 
                (companyJobsListArray.map((item) => (
                <div className="my-projects-list">
                  <div className="row">
                    <div className="col-lg-10 flex-wrap">
                      <div className="projects-card flex-fill">
                        <div className="card-body">
                          <div className="projects-details align-items-center">

                            <div className="project-info">
                              <span>{item.Company?.Name}</span>
                              <h2>{item.title}</h2>
                              <div className="customer-info">
                                <ul className="list-details">
                                  <li>
                                    <div className="slot">
                                      <p>امکان دورکاری</p>
                                      <h5>{item.isremote ? "دارد" : "ندارد"}</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="slot">
                                      <p>شهر</p>
                                      <h5>{item.city?.name}</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="slot">
                                      <p>انقضای آگهی</p>
                                      <h5>{daysBetween(item.published_at)} روز دبگر </h5>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="project-hire-info">
                              <div className="content-divider" />
                              <div className="projects-amount">
                                <h3>{item.salary_amount}</h3>
                                {/* <h5>in 12 Days</h5> */}
                              </div>
                              <div className="content-divider" />
                              <div className="projects-action text-center">
                                <Link
                                  to="/view-project-detail"
                                  className="projects-btn"
                                  >
                                  مشاهده بیشتر{" "}
                                </Link>
                                <a href="#" className="hired-detail">
                                  استخدام شده در تاریخ ۱۲ بهمن ۱۴۰۱
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 d-flex flex-wrap">
                      <div className="projects-card flex-fill">
                        <div className="card-body p-2">
                          <div className="prj-proposal-count text-center hired">
                            <h3>استخدام شده</h3>
                            <img
                              src={Developer_01}
                              alt=""
                              className="img-fluid"
                              />
                            <p className="mb-0">محمد مهدیزاده</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))): waiting ? 
              (<Pendingprojects data={companyJobsListArray} /> )
              : complete? 
              (<CompletedProjects data={companyJobsListArray}/>
              ) : null}
            

              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations list-pagination">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" /> قبلی
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
                        بعدی <i className="fa fa-angle-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /pagination */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Manageprojects;
