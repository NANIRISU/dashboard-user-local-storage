import React, { useState, useEffect } from "react";
import Input from "../../component/input/Input";
import NewButton from "../../component/button/NewButton";
import "./Register.css";

const Register = (props) => {
  const [authemail, setAuthEmail] = useState("");
  const [authpassword, setAuthPassword] = useState("");
  // const [showPanel, togglePanel] = useState("false");
  const [users, setUsers] = useState([]);
//   console.log(users,"users")

  useEffect(() => {
    var userLogin = localStorage.getItem("users");
  //  console.log(userLogin);
    if (userLogin !== null) {
      setUsers(JSON.parse(userLogin));
    } else {
      setUsers([]);
    }
  }, []);

  const emailChangeHandler = (event) => {
    setAuthEmail(event.target.value);
    console.log("email", event.target.value);
    localStorage.setItem("email", event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setAuthPassword(event.target.value);
    console.log("password", event.target.value);
    localStorage.setItem("pasword", event.target.value);
  };
  
  const signupClickHandlerUSer =  () => {
    let temp = users;
    temp.push({ useremail: authemail, password: authpassword,status:false });
    setUsers(temp);

    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));

    props.history.push("/login");
    
  };
  return (
    <div>
      <Input
        name="email"
        classes={{ inputComponentClass: "login-input" }}
        value={authemail}
        onChange={emailChangeHandler}
        type="email"
        placeholder="Enter email..."
      />
      <Input
        name="password"
        classes={{ inputComponentClass: "login-input" }}
        value={authpassword}
        onChange={passwordChangeHandler}
        type="password"
        placeholder="Enter password..."
      />
      <NewButton
        type="submit"
        className="signup-btn"
        onClick={signupClickHandlerUSer}
      >
        Signup
      </NewButton>
     
    </div>
  );
};

export default Register;
