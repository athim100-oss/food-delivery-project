import React from "react";
import "../css/SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignUp() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [terms, setTerms] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    //terms check
    if (!terms) {
      alert("please accept terms and conditions");
      return;
    }
    //data
    const data = {
      fullname: fullname,
      phonenumber: phonenumber,
      email: email,
      password: password,
      role: role,
    };

    try {
      let res;
      if (role === "user") {
        res = await axios.post("http://localhost:5000/User/signup", data);
      } else if (role === "admin") {
        res = await axios.post("http://localhost:5000/User/admin/signup", data);
      }

      console.log(res.data);
      alert(
        role === "user" ? "User Signup Successful" : "Admin Signup Successful",
      );

      //clearform
      setFullname("");
      setEmail("");
      setPhonenumber("");
      setPassword("");
      setRole("user");
      setTerms(false);

      //login
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Signup Failed");
    }
  }

  return (
    <div>
      <div className="body">
        <div className="signup-container">
          <div className="signup-header">
            <h1>Create Account</h1>
          </div>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>FullName</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your fullname"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
              />
            </div>
            <div className="form-group">
              <label>Select Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user"> User </option>
                <option value="admin"> Admin </option>
              </select>
            </div>
            <div className="terms">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />{" "}
              <span>
                {" "}
                I agree to the <a href="."> Terms & Conditions </a>{" "}
              </span>
            </div>

            <button type="submit" className="submit-button rounded-pill">
              Create Account
            </button>
          </form>
          <div className="divider">Or</div>
          <div className="login-text">
            Already have an acoount?
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
