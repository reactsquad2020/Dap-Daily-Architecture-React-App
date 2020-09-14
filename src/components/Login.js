import React from 'react';



class LoginComp extends React.Component {
  render() {
    return (
<div className="login login-page">
  <div className="first-backgroundimg"></div>
  <div className="blackbackground"></div>
  <div className="container-login">
    <div className="loginBox">
      <h2>Login</h2>
      <form action className="login-input">
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            name="username-input"
            id="username-input"
            placeholder="Username (email)"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            name="password-input"
            id="password-input"
            placeholder="Password / Create New Password"
          />
        </div>
        <div className="signupwith">Don't have an account? Sign up with</div>
        <div className="buttons">
          <button type="button" className="btn btn-google">
            Google
          </button>
          <button type="button" className="btn btn-done">
            Done
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
  }
}

export default LoginComp;