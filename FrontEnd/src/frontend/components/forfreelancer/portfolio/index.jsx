import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import { Image } from "react-bootstrap";
import {
  home_icon,
  Project_1,
  Project_2,
  Project_3,
  Project_4,
  Project_5,
  Project_6,
} from "../../imagepath";
import Loader from "../../../../Loader";

import {
  employeePortfolioDetails,
  addPortofolioEmployee,
} from "../../../../actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";

const FreelancerPortfolio = (props) => {
  const localItem = JSON.parse(localStorage.getItem("userInfo"));

  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.employeePortfolio);
  const addPortfolio = useSelector((state) => state.addPortfolioReducer);
  const { success: addsuccess } = addPortfolio;
  const { employeePortfolioArray, loading } = portfolio;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const [postImage, setPostImage] = useState();
  const [selectedFile, setSelectedFile] = useState("");
  const [base, setBase] = useState();
  const selectFile = (event) => {};
  const convertToBase64 = () => {
    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      console.log("called: ", reader);
      setBase(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    if (image) {
      formData.append("image", image);
    }
    formData.append("employee", localItem.associated_id);

    dispatch(addPortofolioEmployee(formData));
    // dispatch(
    //   addPortofolioEmployee({
    //     title: title,
    //     image: image,
    //     employee: localItem.associated_id,
    //     description: "",
    //   })
    // );
  };

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const handleFileUpload = async (e) => {
    setSelectedFile(e.target.files[0]);
    convertToBase64();
    // const file = e.target.files[0];
    // const base64 = await convertToBase64(file);
    setPostImage({
      title: "ارمان ارتباط ویرا",
      description: "برنامه نویسی سایت کاریابی",
      employee: localItem.associated_id,
      image: base,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("here");
  //   dispatch(addPortofolioEmployee(postImage));
  // };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  useEffect(() => {
    dispatch(employeePortfolioDetails(localItem.associated_id));
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch, addsuccess]);
  console.log(employeePortfolioArray, "portfolio");
  console.log(addPortfolio, "upload test");

  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row mt-5 align-right">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {loading ? (
              <Loader />
            ) : (
              <div className="col-xl-9 col-md-8">
                <div className="portfolio-item">
                  <div className="pro-head p-0 pb-4">
                    <h3 className="mb-0">پورتفولیو</h3>
                    <a
                      className="btn btn-primary back-btn br-0"
                      data-bs-toggle="modal"
                      href="#portfolio"
                    >
                      + اضافه کردن
                    </a>
                  </div>

                  <div className="pro-content pt-4 pb-4">
                    <div className="row">
                      {employeePortfolioArray.map((item) => (
                        <div className="col-sm-6 col-lg-4">
                          <div className="project-widget">
                            <div className="portfolio-img">
                              <Image
                                className="img-fluid"
                                alt="User Image"
                                src={`http://127.0.0.1:8000${item.image}`}
                                style={{
                                  height: "250px",
                                  width: "400px",
                                  objectFit: "cover",
                                }}
                              />
                              <div className="portfolio-live">
                                <div className="portfolio-content">
                                  <a
                                    data-bs-toggle="modal"
                                    href="#portfolio-edit"
                                    className="port-icon"
                                  >
                                    <i className="fas fa-pen" />
                                  </a>
                                  <a href="#" className="port-icon me-2">
                                    <i className="fas fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="portfolio-detail">
                              <h3 className="pro-name">{item.title}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-12">
                      {/* <ul className="paginations">
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="portfolio">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content align-right">
            <div className="modal-header">
              <h4>اضافه کردن نمونه کار</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <div className="port-title">
                <h3>
                  نمونه کارهای خود را اضافه کنید تا شانس بیشتری برای استخدام
                  داشته باشید
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-info">
                  <div className="row align-right">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>توضیحات</label>
                        <input
                          type="text"
                          className="form-control"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <label className="br-0 file-upload image-upbtn">
                        بارگذاری تصاویر
                        <input
                          type="file"
                          label="Image"
                          name="myFile"
                          accept=".jpeg, .png, .jpg"
                          onChange={handleImageChange}
                          // onChange={(e) => handleFileUpload(e)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-right">
                  <a
                    data-bs-dismiss="modal"
                    className="btn btn-primary black-btn submit-btn"
                  >
                    لغو
                  </a>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="btn btn-primary submit-btn me-3"
                  >
                    تایید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* The Modal */}
      <div className="modal fade" id="portfolio-edit">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content align-right">
            <div className="modal-header">
              <h4 className="modal-title">ویرایش نمونه کار</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <div className="port-title">
                <h3>
                  نمونه کارهای خود را اضافه کنید تا شانس بیشتری برای استخدام
                  داشته باشید
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-info">
                  <div className="row align-right">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>توضیحات</label>
                        <input
                          type="text"
                          className="form-control"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <label className="br-0 file-upload image-upbtn">
                        بارگذاری تصاویر
                        <input
                          type="file"
                          label="Image"
                          name="myFile"
                          accept=".jpeg, .png, .jpg"
                          onChange={handleImageChange}
                          // onChange={(e) => handleFileUpload(e)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-right">
                  <a
                    data-bs-dismiss="modal"
                    className="btn btn-primary black-btn submit-btn"
                  >
                    لغو
                  </a>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="btn btn-primary submit-btn me-3"
                  >
                    تایید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FreelancerPortfolio;
