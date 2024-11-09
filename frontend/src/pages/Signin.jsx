import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signinstart,
  signinsuccess,
  signinfailure,
} from "../redux/user/userslice";
import { useDispatch, useSelector } from "react-redux";

export default function Signup() {
  const [formdata, setformdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlechnage = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch(signinstart());

    const response = await fetch("/backend/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    const data = await response.json();
    if (data.success) {
      dispatch(signinsuccess(data));
      navigate("/");
    }
    if (data.success === false) {
      dispatch(signinfailure());
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"> Signin</h1>
      <form onSubmit={handlesubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handlechnage}
        ></input>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handlechnage}
        ></input>
        <button className="bg-slate-800 rounded-lg uppercase hover:opacity-75 text-white p-3">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-1 ">
        <p>Dont Have an Account?</p>
        <span className="text-blue-900 ">
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
      <p className="text-red-800">{error && "Something went wrong"}</p>
    </div>
  );
}
