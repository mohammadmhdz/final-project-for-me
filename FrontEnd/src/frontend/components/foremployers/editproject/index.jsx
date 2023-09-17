import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
// import StickyBox from "react-sticky-box";
// import { Sidebar } from "../foremployers/sidebar";
// redux
import { postJob, jobsPostRequirments, editJob } from "../../../../actions/jobActions";
import { companyDetails } from "../../../../actions/companyActions";
import { useDispatch, useSelector } from "react-redux";
import { string } from "prop-types";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const EditProject = (props) => {
  const localItem = JSON.parse(localStorage.getItem("userInfo"));

  const location = useLocation()
  const {job} = location.state

  const dispatch = useDispatch();
   const postinJob = useSelector((state) => state.jobsPost);
  const Requirments = useSelector((state) => state.jobsPostRequirments);
  const jobsEditStatus = useSelector((state) => state.jobsEdit);
  const { postJobDetailsRequirments } = Requirments;
  const companyDetailsReducer = useSelector((state) => state.companyDetails);
  const { companyDetail } = companyDetailsReducer;
  const [formData, updateFormData] = useState(job);
  const [skillsArray, updateSkillsArray] = useState([]);



  useEffect(() => {
    dispatch(jobsPostRequirments());
    // dispatch(jobsDetail(1))
    // dispatch(companyDetails(localItem.associated_id));
  }, [dispatch]);
  console.log(postJobDetailsRequirments);

  // this will prepare our data for sending and put it in formData useState
  const handleChange = (e) => {
    console.log(e.target.id)

    e.target.id === "city" ? updateFormData({
      ...formData,
    [e.target.id] : e.target.value
    }): e.target.id === "isremote" ?  updateFormData({
      ...formData,
      [e.target.id] :  (e.target.value === "true" ? true :e.target.value === "false" ? false : null)   
    })  : 
    updateFormData({
      ...formData,
      Company : localItem.associated_id,
      published_at : "2023-08-29T15:47:18",
      status : "درانتظار تایید",  
      
      // Trimming any whitespace
      [e.target.id] : e.target.value
      // category : 1,
    });
  }
  
  // console.log(postinJob)
  // console.log(postinJob)


  const handleChangeSkills = (e) => {
    updateSkillsArray([+e.target.value, ...skillsArray]);

    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.id] : [...skillsArray , +e.target.value]
    });
  };
  const handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    // console.log(formData);
    dispatch(editJob(formData , job.id));
    // ... submit to API or something
  };
  console.log(skillsArray)
  console.log(jobsEditStatus , "put status")
  console.log(formData);
  console.log(job , "input job");

  return (
    <>
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row mt-5 align-right p-4">
            {/* sidebar */}
            {/* <div className="col-xl-3 col-md-4 theiaStickySidebar">
              {/* <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox> */}
            {/* </div>  */}
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="content p-0">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="select-project mb-4">
                        <form>
                          <div className="title-box widget-box p-5">
                            {/* Project Title */}
                            <div className="title-content">
                              <div className="title-detail">
                                <h2
                                  className="mb-5"
                                  style={{ color: "#32795b" }}
                                >
                                  ویرایش کار
                                </h2>
                                <h3>عنوان</h3>
                                <div className="form-group mb-1">
                                  <input
                                    onChange={handleChange}
                                    id="title"
                                    type="text"
                                    className="form-control"
                                    // placeholder="عنوانی برای فرصت شغلی خود وارد کنید"
                                    defaultValue={job.title}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* /Project Title */}
                            {/* /Project description */}
                            <div className="title-content pb-0">
                              <div className="title-detail">
                                <h3>توضیحات </h3>
                                <div className="form-group mb-5">
                                  <textarea
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                    id="description"
                                    defaultValue={job.description}

                                  ></textarea>
                                  {/* <ReactSummernote
                                  onChange={handleChange}
                                  id="description"
                                    value="Default value"
                                    options={{
                                      lang: "ru-RU",
                                      height: 350,
                                      dialogsInBody: true,
                                      toolbar: [
                                        ["style", ["style"]],
                                        [
                                          "font",
                                          ["bold", "underline", "clear"],
                                        ],
                                        ["fontname", ["fontname"]],
                                        ["para", ["ul", "ol", "paragraph"]],
                                        ["table", ["table"]],
                                        [
                                          "insert",
                                          ["link", "picture", "video"],
                                        ],
                                        ["view", ["fullscreen", "codeview"]],
                                      ],
                                    }}
                                  /> */}
                                </div>
                              </div>
                            </div>
                            {/* Category Content */}
                            <div
                              className="d-flex justify-between-md"
                              style={{ justifyContent: "space-between" }}
                            >
                              <div
                                className="title-content mt-1"
                                style={{ width: "48%" }}
                              >
                                <div className="title-detail ">
                                  <h3>دسته بندی حوزه شغلی</h3>
                                  <div className="form-group mb-0 ">
                                    <select
                                      id="category"
                                      onChange={handleChange}
                                      className="form-control select"
                                    >
                                      <option value={0}>انتخاب شما: {job.job_category.title}</option>
                                      {postJobDetailsRequirments.categories?.map((item) => (
                                        <option value={+item.id}>
                                          {item.title}
                                        </option>
                                          ))}


                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="title-content mt-1"
                                style={{ width: "48%" }}
                              >
                                <div className="title-detail ">
                                  <h3>نوع همکاری</h3>
                                  <div className="form-group mb-0 ">
                                    <select
                                      id="job_type"
                                      onChange={handleChange}
                                      className="form-control select"
                                    >
                                      <option>انتخاب شما :{job.job_type}</option>
                                      <option>تمام وقت</option>
                                      <option>پاره وقت</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /Category Content */}
                            <div
                              className="d-flex justify-between-md"
                              style={{ gap: "10px" }}
                            >
                              <div
                                className="title-content mt-1"
                                style={{ width: "48%" }}
                              >
                                <div className="title-detail ">
                                  <h3>حقوق </h3>
                                  <div className="form-group mb-0 ">
                                    <select
                                      id="salary_type"
                                      onChange={handleChange}
                                      className="form-control select"
                                    >
                                      <option>انتخاب شما : {job.salary_type}</option>
                                      <option>توافقی</option>
                                      <option>مشخص</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="title-content mt-1"
                                style={{ width: "22%" }}
                              >
                                <div className="title-detail ">
                                  <h3>مقدار</h3>
                                  <div className="form-group mb-0 ">
                                    <input
                                      id="salary_amount"
                                      onChange={handleChange}
                                      disabled={
                                        formData.salary_type !== "مشخص"
                                          ? true
                                          : false
                                      }
                                      defaultValue={job.salary_amount}
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="title-content title-content mt-1"
                              style={{ width: "48%" }}
                            >
                              <div className="title-detail">
                                <h3> امکان دورکاری</h3>
                                <div className="form-group mb-0">
                                  <select
                                    className="form-control select"
                                    id="isremote"
                                    onChange={handleChange}
                                    name="price"
                                  >
                                    <option >انتخاب شما : {job.isremote ? "دارد" : "ندارد"}</option>
                                    <option value={true}>دارد</option>
                                    <option value={false}>ندارد</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {/* Price Content */}
                            <div className="title-content">
                              <div className="title-detail">
                                <h2
                                  className="mb-5"
                                  style={{ color: "#32795b" }}
                                >
                                  مهارت ها و سابقه شغلی
                                </h2>
                                <h3>مهارت ها</h3>
                                <div
                                  className="form-group price-cont mb-0"
                                  id="price_type"
                                >

                                    <select id="skills" onChange={handleChangeSkills} className="form-control select">
                                      <option >انتخاب کنید</option>
                                      {postJobDetailsRequirments.skills?.map((item) => (
                                        <option value={item.id}>
                                          {item.title}
                                        </option>
                                          ))}

                                    </select>

                                  <div className=" d-flex tags mt-3">
                                    <div>
                                      {skillsArray?.map((item) => (
                                        <span onClick={() => skillsArray.splice(skillsArray.indexOf(item), 1)} className="align-items-center badge badge-pill badge-design">
                                          {postJobDetailsRequirments.skills[item-1].title}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /Price Content */}
                            {/* Skills Content */}
                            <div
                              className="d-flex justify-between-md"
                              style={{ justifyContent: "space-between" }}
                            >
                              <div
                                className="title-content title-content mt-1"
                                style={{ width: "48%" }}
                              >
                                <div className="title-detail">
                                  <h3> سابقه شغلی مورد نیاز</h3>
                                  <div className="form-group mb-0">
                                    <select
                                      id="experience"
                                      onChange={handleChange}
                                      name="price"
                                      className="form-control select"
                                    >
                                      <option>انتخاب شما : {job.experience}</option>
                                      <option>بدون محدودیت</option>
                                      <option>کمتر از ۲ سال</option>
                                      <option>۲ تا ۵ سال</option>
                                      <option>بیشتر از ۵ سال</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="title-content title-content mt-1"
                                style={{ width: "48%" }}
                              >
                                <div className="title-detail">
                                  <h3>سطح تجربه</h3>
                                  <div className="form-group mb-0">
                                    <select
                                      id="level"
                                      onChange={handleChange}
                                      name="price"
                                      className="form-control select"
                                    >
                                      <option>انتخاب شما : {job.level}</option>
                                      <option>intern(کاراموز)</option>
                                      <option>Junior(جوان)</option>
                                      <option>Senior(ارشد)</option>
                                      <option>Lead(راهبر)</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /Skills Content */}

                            {/* /Add Document */}
                            {/* <div className="title-content">
                              <div className="title-detail">
                                <h3>اضافه کردن فایل</h3>
                                <div className="custom-file">
                                  <input
                                    onChange={handleChange}
                                    id=""
                                    type="file"
                                    className="custom-file-input"
                                  />
                                  <label className="custom-file-label" />
                                </div>
                                <p className="mb-0">
                                  فرمت فایل PDF و حجم آن کمتر از ۲ مگ باشد
                                </p>
                              </div>
                            </div> */}
                            {/* /Add Document */}
                            {/* /adress */}

                            <div
                              className="d-flex justify-between-md"
                              style={{ justifyContent: "space-between" }}
                            >
                              <div
                                className="title-content mt-1"
                                style={{ width: "48%" }}
                              >
                                <div className="title-detail ">
                                  <h3>شهر </h3>
                                  <div className="form-group mb-0 ">

                                    <select  
                                      id="city" 
                                      onChange={handleChange} 
                                      className="form-control select">
                                      {postJobDetailsRequirments.cities?.map((item) => ( 
                                          <option value={item.id}>{item.name}</option>
                                          ))
                                        }
                                        <option>قزوین</option>
                                      

                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <img style={{ margin: "auto" }} src={map}></img> */}
                            <div className="row">
                              <div className="col-md-12 text-end">
                                <div className="btn-item">
                                  <button
                                    type="submit"
                                    className="btn next-btn"
                                    onClick={handleSubmit}
                                  >
                                    تایید
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Project Title */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProject;
