import React, { useState } from "react";
import { useLoginData } from "../hooks/useLoginData";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");

  const { mutate, data, isError } = useLoginData({
    username: name,
    password: password,
  });
  const userData = data?.data || {
    token: "",
  };

  if (userData?.token) {
    localStorage.setItem("token", userData.token);
    navigate(`/`);
  }

  return (
    <div className="bg-[url('https://colorlib.com/etc/lf/Login_v5/images/bg-01.jpg')] w-full h-screen bg-no-repeat bg-cover bg-center flex items-center flex-wrap justify-center p-4">
      <div className="login-page  bg-white">
        {/* <form className="login-page-container w-full flex justify-between flex-wrap  "> */}
        <span className="w-full block box-border pb-14 font-sans text-4xl text-red-900 text-center">
          Sign in with
        </span>
        {isError && <p style={{ color: "red" }}>Invalid credentials</p>}
        <div className="w-full">
          <div className="pb-2 pt-8  box-border block m-0 p-0 w-full ">
            <span className="font-sans text-base text-red-900">Username</span>
            <div className="relative rounded-xl  w-full border  ">
              <input
                type="text"
                name="name"
                className=" w-full bg-white  px-5 text-lg h-16   text-red-950 "
                value={name}
                onChange={(e) => setName(e?.target?.value)}
              />
              <span className="absolute block w-full h-full top-0 left-0 pointer-events-none border border-blue-500 invisible opacity-0 rounded-xl"></span>
            </div>
          </div>
          <div className="pb-2 pt-8 box-border  block m-0 p-0 w-full ">
            <span className="font-sans text-base text-red-900">Password</span>
            <div className="relative    rounded-xl w-full border  ">
              <input
                type="password"
                name="password"
                className=" w-full bg-white  px-5 text-lg h-16  text-red-950 "
                value={password}
                onChange={(e) => setPassword(e?.target?.value)}
              />
              <span className="absolute block w-full h-full top-0 left-0 pointer-events-none border border-blue-500 invisible opacity-0 rounded-xl"></span>
            </div>
          </div>
          <div className="pb-2 pt-8 box-border block m-0 p-0 w-full ">
            <button
              className="flex justify-center items-center px-5 w-full h-16 bg-slate-600 rounded-xl text-lg text-white relative outline-none border-none "
              onClick={() => {
                mutate();
              }}
            >
              Sign In
            </button>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Login;
