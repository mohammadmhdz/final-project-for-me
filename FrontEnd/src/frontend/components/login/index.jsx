import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo_01 } from "../imagepath";
import { useState } from "react";
// redux
import { login } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Password from "antd/lib/input/Password";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeURL = (newURL) => {
    window.location.href = newURL;
  };
  // redux
  const dispatch = useDispatch();
  //  useEffect(() => {
  const submithandler = (e) => {
    // redux
    dispatch(login(email, password));
    e.preventDefault();
    // {localStorage.getItem("userInfo") ? pass : e.preventDefault()}
  };

  const userLogin = useSelector((state) => state.userLogin);

  // const { error, loading, userInfo } = userLogin
  //     document.body.className = 'account-page';
  //     return () => { document.body.className = ''; }
  //   });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row justify-content-center mt-5 align-right">
            <div className="col-md-6 ">
              {/* Login Content */}
              <div className="account-content">
                <div className="align-items-center justify-content-center">
                  <div className="login-right">
                    <div className="login-header text-center">
                      <Link to="/">
                        <img src={Logo_01} alt="logo" className="img-fluid" />
                      </Link>
                      <h3>خوش آمدید</h3>
                      <p>
                        فرصت بعدی را از دست ندهید.وارد شوید تا از تمام وقابع
                        دنیای حرفه ای مطلع شوید
                      </p>
                    </div>
                    {userLogin.loading ? (
                      <p1>لطفا صبر کنید...</p1>
                    ) : userLogin.error ? (
                      <p1 className="align-right">
                        رمز یا نام کاربری شما نادرست میباشد
                      </p1>
                    ) : userLogin.userInfo?.isAdmin ? (
                      changeURL("/template-reactjs/admin/index")
                    ) : userLogin.userInfo?.role === "employee" ? (
                      changeURL("/template-reactjs/freelancer-dashboard")
                    ) : userLogin.userInfo?.role === "employer" ? (
                      changeURL("/template-reactjs/dashboard")
                    ) : null}
                    {/* // {userLogin.error?<p1>your email or password is wrong</p1> : null} */}
                    {/* {userLogin.userInfo ?() => changeURL("/template-reactjs/dashboard"): null} */}

                    <form
                      onSubmit={submithandler}
                      action="/template-reactjs/dashboard"
                    >
                      <div className="form-group form-focus">
                        <label className=" mb-2 ">ایمیل</label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          className="form-control floating"
                        />
                      </div>
                      <div className="form-group form-focus">
                        <label className="mb-2 mt-4">رمزعبور</label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control floating mb-2"
                        />
                      </div>
                      <div className="form-group align-right">
                        <label className="custom_check mt-5">
                          <input type="checkbox" name="rem_password" />
                          به خاطر بسپار
                          <span className="checkmark" />
                        </label>
                      </div>
                      {/* <Link to="/template-reactjs/dashboard" onChange={userLogin.userInfo}>
                    </Link> */}
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                        ورود
                      </button>
                      <div className="login-or">
                        <p>یا با از این طریق وارد شوید</p>
                      </div>
                      <div className="row social-login">
                        <div className="col-4">
                          <a href="#" className="btn btn-twitter btn-block">
                            {" "}
                            Twitter
                          </a>
                        </div>
                        <div className="col-4">
                          <a href="#" className="btn btn-facebook btn-block">
                            {" "}
                            Facebook
                          </a>
                        </div>
                        <div className="col-4">
                          <a href="#" className="btn btn-google btn-block">
                            {" "}
                            Google
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 text-start">
                          <Link className="forgot-link" to="/forgot-password">
                            فراموشی رمز عبور
                          </Link>
                        </div>
                        <div className="col-6 text-end dont-have">
                          حساب ندارید؟ <Link to="/register">ایجاد حساب</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Login;
