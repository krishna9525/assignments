import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function SignUP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("set  Login data  in local Storage");
      setLogin(!login);
    }
  }

  return (
    <div className="buller">
      {login ? (
        <div className="bigdiv">
          {flag && (
            <h4
              style={{
                color: "red",
                textAlign: "center",
              }}
            >
              Please Fill Every field
            </h4>
          )}
          <form onSubmit={handleSubmit}>
            <div
              className="textdiv"
              style={{
                width: "300px",
                height: "300px",
                margin: "auto",
                padding: "50px",
              }}
            >
              <h3>SignUp Page</h3>
              <span>Email:</span>

              <input
                style={{ marginLeft: "10px" }}
                type="email"
                placeholder="Enter Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                style={{ marginLeft: "10px", marginTop: "10px" }}
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <button
                style={{
                  margin: "20px",
                }}
              >
                Sign up
              </button>
              <Link to="/login">
                <h5
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    color: "green",
                  }}
                >
                  User Already Register
                </h5>
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default SignUP;
