import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmErrorPassword, setConfirmErrorPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be atleast 8 letters long.");
      setUserColor("red");
    }

    if (email.includes("@gmail.com")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("email must include @gmail.com");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("password must be atleast 8 letters long.");
      setPasswordColor("red");
    }

    if (password !== "" && confirmPassword === password) {
      setConfirmErrorPassword("");
      setConfirmPasswordColor("green");
    } else {
      setConfirmErrorPassword("The passwords must match!");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <form>
          <h2>Submit Info</h2>
          <input
            type="text"
            style={{ borderColor: userColor }}
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span className="error">{errorUserName}</span>
          <br />
          <input
            type="email"
            placeholder="xyz@gmail.com"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error">{errorEmail}</span>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{errorPassword}</span>
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="error">{confirmErrorPassword}</span>
          <br />
          <div className="submit-section">
            <button type="submit" onClick={validate}>
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
