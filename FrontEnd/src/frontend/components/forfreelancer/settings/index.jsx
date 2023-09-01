import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon, Img, Img_02 } from "../../imagepath";
import { Sidebar } from "../sidebar";
// redux
import { useDispatch, useSelector } from "react-redux";
import { employeeDetails } from "../../../../actions/employeeActions";
import { jobsPostRequirments } from "../../../../actions/jobActions";
// datePicker
import {CustomizedDatePicker} from "../../../../datePicker/DatePicker/index"
const FreelancerSettings = (props) => {
  // redux
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employeeDetails);
  const Requirments = useSelector((state) => state.jobsPostRequirments);
  const { postJobDetailsRequirments } = Requirments;
  const {employee} = employeeList ;
  const [formData, updateFormData] = useState();

  const localItem = JSON.parse(localStorage.getItem("userInfo"))

  const handleLanguageArray = (e) => {

    const changeLanguage = formData.Language?.map((item , index) =>{
      if(index === +e.target.id){
        return item = {
          employee : localItem.id, 
          id : e.target.id,
          [e.target.name]: e.target.value,
        }
      }  
        else { 
          return item
        }  
      }
      )
    // console.log(changeLanguage , "change")
    updateFormData(formData =>({
      ...formData, 
      ["Language"]: [...changeLanguage]
    })
    )
  }

  const handleEducationArray = (e) => {

    const changeEducation = formData.Education?.map((item , index) =>{
      if(index === +e.target.id){
        return item = {
          ...item ,
          [e.target.name]: e.target.value,
        }
      }  
        else { 
          return item
        }  
      }
      )
    // console.log(changeEducation , "change")
    updateFormData(formData =>({
      ...formData, 
      ["Education"]: [...changeEducation]
    })
    )
  }

  const handleExperiencesArray = (e) => {

    const changeExperiences = formData.Experiences?.map((item , index) =>{
      if(index === +e.target.id){
        return item = {
          employee : localItem.id, 
          id : e.target.id,
          [e.target.name]: e.target.value,
        }
      }  
        else { 
          return item
        }  
      }
      )
    // console.log(changeExperiences , "change")
    updateFormData(formData =>({
      ...formData, 
      ["Experiences"]: [...changeExperiences]
    })
    )
  }
  const handleSkillsArray = (e) => {
    // for getting option id :)
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    const inputId =  el.getAttribute('id');  
  
    const changeSkills = formData.skills?.map((item , index) =>{
      if(index === +e.target.id){
        return item = {
          id : +inputId,
          [e.target.name]: e.target.value,
        }
      }  
        else { 
          return item
        }  
      }
      )
    // console.log(changeExperiences , "change")
    updateFormData(formData =>({
      ...formData, 
      ["skills"]: [...changeSkills]
    })
    )
    // updateSkillsArray([+e.target.value, ...formData.skills]);

    // updateFormData({
    //   ...formData,

    //   // Trimming any whitespace
    //   [e.target.id] : [...skillsArray , +e.target.value]
    // });
  };
  const addInput = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    const newSkillInput =   {
      id: "text",
      title: ""
    }
    const newExprienceInput =   {
      company_name : "",
      employee: "",
      from_date: "",
      id: "",
      title: "",
      to_date : "",
    }
    const newEducationInput ={
      degree: "",
      from_date: "",
      institute: "",
      to_date: "",}
    
      const newLanguageInput ={
        employee: "",
        id : "",
        language: "",
        rate: "",}

    e.target.id === "addExprience" ? 
    updateFormData({
      ...formData,
      ["Experiences"] : [...formData.Experiences ,newExprienceInput]
    }): e.target.id === "addSkills" ?
    updateFormData({
      ...formData,
      ["skills"] : [...formData.skills ,newSkillInput]
    }) : e.target.id === "addLanguage" ?
    updateFormData({
      ...formData,
      ["Language"] : [...formData.Language ,newLanguageInput ]
    }) : 
    updateFormData({
      ...formData,
      ["Education"] : [...formData.Education ,newEducationInput]
    }) ;
  };

  const handleChange = (e) => {
     
    updateFormData({
      ...formData, 
      [e.target.id] : e.target.value.trim()
    });
  }


  useEffect(() => {
    // redux
    dispatch(employeeDetails(localItem.id))
    dispatch(jobsPostRequirments());

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  },[dispatch]);


  useEffect(() => {
    updateFormData({...employeeList?.employee})
  }, [employeeList]);


  console.log(employee)
  console.log(formData ,'formData')
  console.log(postJobDetailsRequirments ,'formData')
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid mt-5">
          <div className="row align-right">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="pro-pos">
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="/freelancer-profile-settings"
                      >
                        تنظیمات حساب کاربری
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-change-password"
                      >
                        تغییر رمز عبور
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-delete-account"
                      >
                        حذف حساب کاربری
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="setting-content">
                  <form>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          تنظیمات{" "}
                        </h3>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>نام کاربری</label>
                            <input
                             onChange={handleChange}
                             id="formatData?.username"
                             placeholder={formData?.user?.username}
                             type="text" className="form-control"  />
                          </div>
                          <div className="form-group col-md-6">
                            <label>آدرس ایمیل</label>
                            <input
                             onChange={handleChange}
                             id="email"
                             placeholder={formData?.user?.email}
                             type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>نام  </label>
                            <input
                            onChange={handleChange}
                            id="first_name"
                            placeholder={formData?.user?.first_name}
                            type="text" className="form-control" />
                          </div>

                          <div className="form-group col-md-6">
                            <label>نام خانوادگی</label>
                            <input 
                            onChange={handleChange}
                            id="last_name"
                            placeholder={formData?.user?.last_name}
                            type="email" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>جنسیت</label>
                            <select
                              onChange={handleChange}
                              id="gender"
                              placeholder={formData?.user?.gender}
                              name="price"
                              className="form-control select"
                            >
                              <option>انتخاب شما : {formData?.gender}</option>
                              <option >آقا</option>
                              <option >خانوم</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>نوع همکاری</label>
                            <select
                              onChange={handleChange}
                              id="cooperation_type"
                              placeholder={formData?.user?.gender}
                              className="form-control select"
                            >
                            <option>انتخاب شما : {formData?.cooperation_type}</option>
                              <option>تمام وقت</option>
                              <option>پاره وقت</option>
                            </select>
                          </div>
                          
                          <div className="pro-body">
                          {formData?.Language?.map((item , index) => (

                            <div  className="row">
                          <div className="form-group col-md-6">
                            <label> زبان </label>
                            <input
                            onChange={(e) =>handleLanguageArray(e)}
                            placeholder={item.language}
                            id={index}
                            name="language"
                            type="text" className="form-control" />
                          </div>
                            <div className="form-group col-md-6">
                            <label> سطح دانش شما</label>
                            <select
                              onChange={handleLanguageArray}
                              id={index}
                              name="rate"
                              className="form-control select"
                            >
                              <option >انتخاب شما : {item.rate}</option>
                              <option >10</option>
                              <option >20</option>
                              <option >30</option>
                              <option >40</option>
                              <option >50</option>
                              <option >60</option>
                              <option >70</option>
                              <option >80</option>
                              <option >90</option>
                              <option >100</option>
                            </select>
                          </div>
                          </div>
                          ))
                        }
                          <button 
                                id="addLanguage"
                                onClick={(e) =>addInput(e)}
                                className="btn fund-btn skill-add">
                              اضافه کردن
                            </button>
                          </div>
                        </div>
                        <div className="form-row pro-pad pt-0">
                          <div className="form-group col-md-6 pro-pic">
                            <label>تصویر حساب کاربری</label>
                            <div className="d-flex align-items-center">
                              <div className="upload-images">
                                {/* <img src={`http://127.0.0.1:8000/${formData?.image}`} alt="Image" /> */}
                                <a
                                  href=""
                                  className="btn btn-icon btn-danger btn-sm"
                                >
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                              <label className="file-upload image-upbtn me-3">
                                تغییر تصویر <input type="file" />
                              </label>
                            </div>
                            <p>اندازه تصویر : ۳۰۰*۳۰۰</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          محل سکونت
                        </h3>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          
                          <div className="form-group col-md-6">
                            <label>شهر</label>
                            <select
                            onChange={handleChange}
                            id="city"
                            name="price"
                            className="form-control select"
                            >
                              <option >انتخاب شما : {formData?.city?.name}</option>
                              { postJobDetailsRequirments.cities?.map((item) => (                               
                                <option value={item.id}>{item.name}</option>
                                ))
                              }
                              
                            </select>
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          درباره من
                        </h3>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="form-group col-md-12">
                            <textarea
                              onChange={handleChange}
                              id="about"
                              placeholder={formData?.about}
                              className="form-control"
                              rows={5}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-12 col-xl-4 d-flex">
                        <div className="pro-card flex-fill mb-3">
                          <div className="pro-head">
                            <h3 className="pro-title without-border mb-0">
                              مهارت ها
                            </h3>
                            <button 
                                id="addSkills"
                                onClick={(e) =>addInput(e)}
                                className="btn fund-btn skill-add">
                              اضافه کردن
                            </button>
                          </div>
                          {formData?.skills?.map((items , index) => (

                            <div className="pro-body skill-info">
                            <div className="form-row align-items-center skill-cont">
                              <div className="form-group col-md-10">
                              <select name="title" onChange={handleSkillsArray} id={index}  className="form-control select">
                                    <option  value={"placeholder"}>{items.title}</option>
                                      {postJobDetailsRequirments.skills?.map((item) => (
                                        <option  id={+item.id} value={item.title}>
                                          {item.title}
                                        </option>
                                          ))}
                                    </select>
                            </div>     
                              <div className="form-group col-md-2">
                                <a href="#" className="btn trash-icon">
                                  <i className="fa fa-trash" />
                                </a>
                              </div>
                            </div>
                            </div>
                           ))} 

                          </div>
                        </div>
                      </div>

                    <div  className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          سوابق شغلی
                          </h3>
                        <button 
                                id="addExprience"
                                onClick={(e) =>addInput(e)}
                                className="btn fund-btn skill-add">
                              اضافه کردن
                         </button>
                        
                      </div>
                      {formData?.Experiences?.map((item , index) => (
                      <div className="pro-body">
                        <div className="exp-info">
                          <div className="row exp-cont">
                            <div className="form-group col-md-6">
                              <label>عنوان</label>
                              <input 
                              id={index}
                              name="title"
                              onChange={handleExperiencesArray}
                              defaultValue={item.title}
                              type="text" 
                              className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                              <label>نام شرکت </label>
                              <input 
                              id={index}
                              name="company_name"
                              onChange={handleExperiencesArray}
                              defaultValue={item.company_name} type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                              <label>از تاریخ</label>
                              <input
                              id={index}
                              name="from_date"
                              onChange={handleExperiencesArray}
                              defaultValue={item.from_date}
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="Select Date"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label>تا تاریخ</label>
                              <input
                              id={index}
                              name="to_date"
                              onChange={handleExperiencesArray}
                              defaultValue={item.to_date}
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="Select Date"
                              />
                            <CustomizedDatePicker/>

                            </div>
                            {/* <div className="form-group col-md-12">
                              <label className="custom_check">
                                <input type="checkbox" name="rem_password" />
                                <span className="checkmark" /> هم اکنون مشغول
                                کار هستم
                              </label>
                            </div> */}

                            {/* <div className="form-group col-md-12">
                              <label>خلاصه</label>
                              <textarea
                                className="form-control"
                                rows={5}
                                defaultValue={""}
                              />
                            </div> */}
                          </div>
                        </div>
                      </div>
                      )) }
                    </div>

                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          سوابق تحصیلی
                        </h3>
                        <button 
                                id="addEducation"
                                onClick={(e) =>addInput(e)}
                                className="btn fund-btn skill-add">
                              اضافه کردن
                         </button>
                      </div>

                      {formData?.Education?.map((item , index)=> (

                      <div className="pro-body">
                        <div className="row">
                          <div className="form-group col-md-12">
                            <label>نام دانشگاه / موسسه آموزشی</label>
                            <input
                            id={index}
                            onChange={handleEducationArray}
                            name="institute"
                             defaultValue={item.institute}
                             type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>مقطع تحصیلی</label>
                            <select
                              id={index}
                              onChange={handleEducationArray}
                              name="degree"
                              className="form-control select"
                            >
                              <option>انتخاب شما :{item.degree}</option>
                              <option>دیپلم</option>
                              <option>کاردانی</option>
                              <option>کارشناسی</option>
                              <option>کارشناسی ارشد</option>
                              <option>دکترا</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>از سال</label>
                            <input
                            id={index}
                            onChange={handleEducationArray}
                            name="from_date"
                              defaultValue={item.from_date}
                              type="text"
                              className="form-control datetimepicker"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>تا سال</label>
                            <input
                            id={index}
                            onChange={handleEducationArray}
                            name="to_date"
                              defaultValue={item.to_date}
                              type="text"
                              className="form-control datetimepicker"
                            />
                          </div> 
                        </div>
                      </div>
                    )) }
                    </div>
                    <div className="card">
                      <div className="pro-head">
                        <h3 className="pro-title without-border mb-0">
                          شبکه های اجتماعی
                        </h3>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label>فیس بوک</label>
                            <input
                            onChange={handleChange}
                            id="about"
                            placeholder={formData?.about}
                            type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>دریبل</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>توییتر</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>لینکداین</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>گیت</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>بی هنس</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card text-end">
                      <div className="pro-body">
                        <button className="btn btn-secondary click-btn btn-plan">
                          بازگشت
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-primary click-btn btn-plan"
                          type="submit"
                        >
                          تایید
                        </button>
                      </div>
                    </div>
                  </form>
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
export default FreelancerSettings;
