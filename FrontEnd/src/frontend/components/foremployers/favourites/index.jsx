import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Flags_us,
  Flags_de,
  Img_01,
  Img_02,
  Img_03,
  Img_04,
  Img_05,
  home_icon,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
// redux
// import {companyFavoriteEmployee}from "../../../../store"
import { useDispatch, useSelector} from "react-redux";
import {companyFavoriteEmployees , companyToggleFavoriteList} from "../../../../actions/companyActions"
import { employeeFavoriteList } from "../../../../actions/employeeActions";

const Favourites = (props) => {
  // redux
  const dispatch = useDispatch();
  const companyEmployeeFavorite = useSelector((state) => state.companyFavoriteEmployee);
  const {companyFavoriteEmployeesList} = companyEmployeeFavorite 

  const localItem = JSON.parse(localStorage.getItem("userInfo"));
  
  const handleToggleFavorite = (e , idInfo) => {
    e.preventDefault()
    dispatch(companyToggleFavoriteList(localItem.associated_id,idInfo))

  }

  useEffect(() => {
    dispatch(companyFavoriteEmployees(localItem.associated_id))
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  },[dispatch]);
  console.log(companyFavoriteEmployeesList);
  return (
    <>
      {/* Page Content */}
      <div className="content bookmark content-page align-right">
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
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">کارجویان ذخیره شده</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive table-box">
                          <table className="table table-hover table-center mb-0 datatable">
                            <thead className="thead-pink">
                              <tr>
                                <th>اطلاعات کارجو</th>
                                <th>حداقل حقوق</th>
                                <th>سابقه کار</th>
                                <th>شهر</th>
                                <th>وضعیت</th>
                                <th />
                              </tr>
                            </thead>
                            {companyFavoriteEmployeesList?.map((item) => (

                              <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to="/freelancer-profile"
                                      className="avatar avatar-md tab-imgcircle ms-2"
                                      >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src={`http://127.0.0.1:8000/${item?.image}`}
                                        alt="User Image"
                                        />
                                    </Link>
                                    <Link to="/developer-profile">
                                      <span className="profile-name">
                                        {item.user?.first_name}{" "}{item.user?.last_name}
                                      </span>
                                      <span>{item.perfession_title}</span>
                                      {/* <span className="rating mt-2">
                                      <i className="fa fa-star filled" />
                                      <i className="fa fa-star filled" />
                                      <i className="fa fa-star filled" />
                                      <i className="fa fa-star filled" />
                                      <i className="fa fa-star" />
                                    </span> */}
                                    </Link>
                                  </h2>
                                </td>
                                <td>15 milion</td>
                                <td>۳ سال</td>
                                <td>
                                  <h2 className="table-avatar">{item.city?.name}</h2>
                                </td>
                                <td>
                                  <a onClick={(e) => handleToggleFavorite(e , item.id)} href="" className="fav">
                                    <i className="fa fa-heart filled" />
                                  </a>
                                </td>
                                <td className="text-end">
                                  <div className="table-action">
                                  
                                    <Link className="btn btn-primary btn-invite" 
                                         to={{pathname : "/developer-profile" ,
                                         state : {idInfo: item.id} 
                                                  }}>
                                      <span className="profile-name">مشاهده بیشتر</span>
                                     </Link>
                        
                                    {/* <a
                                      data-bs-toggle="modal"
                                      href="#bookmark"
                                      className="btn btn-primary btn-invite"
                                      >
                                      مشاهده پروفایل
                                    </a> */}
                                    <Link></Link>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                                      ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="bookmark">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">INVITE FREELANCER</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fa fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="average-bids mb-4">
                        <p>
                          Contact{" "}
                          <span className="text-highlight">John Doe </span>{" "}
                          about your Project
                        </p>
                      </div>
                      <div className="form-group">
                        <label>Invite title</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Send a private message</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={
                            "Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hire for</label>
                        <div className="radio">
                          <label className="custom_radio me-2">
                            <input
                              type="radio"
                              defaultValue="fix"
                              defaultChecked
                            />
                            <span className="checkmark" /> Fixed Price
                          </label>
                          <label className="custom_radio">
                            <input type="radio" defaultValue="fix" />
                            <span className="checkmark" /> Hourly Rate
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Hire for</label>
                        <div className="radio">
                          <label className="custom_radio me-2">
                            <input
                              type="radio"
                              defaultValue="rate"
                              defaultChecked
                            />
                            <span className="checkmark" /> Fixed Price
                          </label>
                          <label className="custom_radio">
                            <input type="radio" defaultValue="rate" />
                            <span className="checkmark" /> Hourly Rate
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <div className="form-row">
                          <div className="col-7">
                            <div className="input-group">
                              <div className="input-group-prepend bg-pink d-flex">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  $
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={20.0}
                              />
                            </div>
                          </div>
                          <div className="col-5">
                            <select className="form-control select">
                              <option value={0}>USD</option>
                              <option value={0}>USD</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <div className="form-row">
                          <div className="col-sm-7">
                            <div className="input-group form-inline mb-2">
                              <div className="input-group-prepend bg-pink d-flex">
                                <span
                                  className="input-group-text"
                                  id="basic-add"
                                >
                                  $
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control me-1"
                                placeholder={20.0}
                              />
                              <label className="invited-freelancer-label">
                                / hr
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <select className="form-control select form-select">
                              <option value={0}>USD</option>
                              <option value={0}>USD</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Project</label>
                        <select className="form-control select form-select">
                          <option value={0}>
                            3D Renders and Amazon Product Store images/Video
                          </option>
                          <option value={0}>
                            3D Renders and Amazon Product Store Video
                          </option>
                          <option value={0}>
                            3D Renders and Amazon Product Store images
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-end">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Invite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default Favourites;
