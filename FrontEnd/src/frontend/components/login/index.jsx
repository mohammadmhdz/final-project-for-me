import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo_01 } from "../imagepath";

const Login = (props) => {
  //  useEffect(() => {

  //     document.body.className = 'account-page';
  //     return () => { document.body.className = ''; }
  //   });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row justify-content-center mt-5">
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
                    <form action="/template-reactjs/dashboard">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">ایمیل</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                        />
                        <label className="focus-label">رمزعبور</label>
                      </div>
                      <div className="form-group align-right">
                        <label className="custom_check">
                          <input type="checkbox" name="rem_password" />
                          به خاطر بسپار
                          <span className="checkmark" />
                        </label>
                      </div>
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
