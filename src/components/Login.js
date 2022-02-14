import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="bg-gray-400 p-8 m-8"
        onClick={() => {
          dispatch(
            login({ name: "Carl", age: 20, email: "serquinajhunlo@gmail.com" })
          );
        }}
      >
        Login
      </button>

      <button
        type="button"
        className="bg-gray-400 p-8 m-8"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
