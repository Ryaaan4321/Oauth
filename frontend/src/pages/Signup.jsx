import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formdata,setformdata]=useState({});
  const handlechnage=(e)=>{
   setformdata({...formdata,[e.target.id]:e.target.value});
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"> Signup</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg" onChange={handlechnage}
        ></input>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg" onChange={handlechnage}
        ></input>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg" onChange={handlechnage}
        ></input>
        <button className="bg-slate-800 rounded-lg uppercase hover:opacity-75 text-white p-3">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-1 ">
        <p>Have an Account ?</p>
        <span className="text-blue-900 "> 
          <Link to="/signin">Sign In</Link>
        </span>
      </div>
    </div>
  );
}
