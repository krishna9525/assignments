import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AuthContex";
import Quiz from "./Quiz";

function Login() {
  const [email, setEmaillog] = useState("");
  const [password, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const { authState, loginUser } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!email || !password) {
      setFlag(true);
      console.log("Empty");
    } else if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      loginUser(true);
    }
  }

  return (
    <div className="buller">
      {home ? (
        <div className="bigdiv">
          {flag && <h4>Please Fill Correct Data</h4>}

          <form onSubmit={handleSubmit}>
            <div className="textdiv">
              <div>
                <div>
                  <h4>Login page</h4>
                </div>
               
              </div>
              <span>Email:</span>
              <input
              style={{marginLeft:"10px"}}
                type="text"
                placeholder="Enter Email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
              <br />
              <label>Password:</label>
              <input
              style={{marginLeft:"10px"}}
                type="text"
                placeholder="Enter Password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
              <br />

              <button type="submit">Login</button>
              <div style={{marginTop:"25px"}}>
                  <span>or</span>
                  <Link to="/signup"> Create Account</Link>
                </div>
            </div>
          </form>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default Login;
