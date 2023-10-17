import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import userData from "../JSON/userData.json";
import MyContext from "../context/myContext";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { toggleLogin } = context;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const errorMsg = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === userData.username && password === userData.password) {
      navigate("/");
      toggleLogin();
    } else {
      errorMsg.current.style.display = "block";
    }
  };

  const enterTestUserCred = (e) => {
    e.preventDefault();
    setUsername(userData.username);
    setPassword(userData.password);
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      {/* login form */}
      <form
        action="#"
        className="relative space-y-8 bg-zinc-800/70 text-center rounded-3xl m-4 px-4 py-10 max-w-sm "
      >
        <div>
          <h1 className="text-4xl font-bold">Welcome back</h1>
          <p className="text-zinc-400 text-sm my-3">
            Please Login to view Private blogs
          </p>
        </div>

        <div className="space-y-6">
          <input
            className="w-full p-2 text-lg font-medium bg-transparent border-b border-b-zinc-600 focus:outline-none focus:border-b-amber-500"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <input
            className="w-full p-2 text-lg font-medium bg-transparent border-b border-b-zinc-600 focus:outline-none focus:border-b-amber-500"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {/* error msg */}
        <p ref={errorMsg} className="text-red-500 font-semibold hidden">
          Username or Password is wrong
        </p>

        <button
          onClick={handleLogin}
          type="submit"
          className="w-full rounded-lg p-3 bg-amber-600 flex items-center justify-center gap-2 text-xl font-medium hover:bg-teal-600 duration-300 "
        >
          Login <i className="ri-arrow-right-s-line text-xl lg:text-2xl"></i>
        </button>
        <button
          className="border-b hover:text-teal-500"
          onClick={enterTestUserCred}
        >
          Login with test user credentials
        </button>
      </form>
    </div>
  );
};

export default Login;
