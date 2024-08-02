"use client";

import auth from "@/apis/auth";
import "./sign-in.css";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Signin() {
  let [users, setUsers] = useState([]);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function signUpKardo(data) {
    users.push(data);
    setUsers([...users]);
  }

  auth
    .login({
      user_email: "abubakarfarooq098@gmail.com",
      user_password: "abubakar098",
    })
    .then(function (resp) {
      let result = resp.data;
      console.log(result);
      // localStorage.setItem("token", result.token);
    });

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Tabs Titles */}
        {/* Icon */}
        <div className="fadeIn first">
          <img
            src="http://danielzawadzki.com/codepen/01/icon.svg"
            id="icon"
            alt="User Icon"
          />
        </div>
        {/* Login Form */}
        <form onSubmit={handleSubmit(signUpKardo)}>
          <input
            //        yahan single validation h
            {...register("user_email", {})}
            type="text"
            id="login"
            className="fadeIn second"
            placeholder="login"
          />
          {/* single validation per error show krna */}
          {/* {errors.user_email ? <div style={ {color:'red'} }>This field is required</div> :null} */}

          {/* multiple validations per error */}
          {errors.user_email && errors.user_email.type == "required" ? (
            <div style={{ color: "red" }}>This field is required</div>
          ) : null}
          {errors.user_email && errors.user_email.type == "pattern" ? (
            <div style={{ color: "red" }}>Please enter a valid email</div>
          ) : null}
          {errors.user_email && errors.user_email.type == "validate" ? (
            <div style={{ color: "red" }}>Email alerady exists</div>
          ) : null}

          <input
            // yahan multiple validations h
            {...register("user_password", { required: true, minLength: 6 })}
            type="text"
            id="password"
            className="fadeIn third"
            placeholder="password"
          />
          {/* multiple validations case m type bhi check krni hogi */}
          {errors.user_password && errors.user_password.type == "required" ? (
            <div style={{ color: "red" }}>This field is required</div>
          ) : null}
          {errors.user_password && errors.user_password.type == "minLength" ? (
            <div style={{ color: "red" }}>Please enter atleast 6 letters</div>
          ) : null}

          <input
            type="submit"
            className="fadeIn fourth"
            defaultValue="Log In"
          />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
      <table>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.user_email}</td>
              <td>{user.user_password}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
