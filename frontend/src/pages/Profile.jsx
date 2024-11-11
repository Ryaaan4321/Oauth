import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useRef } from "react"
import {deleteUserStart,deleteUserSuccess,deleteUserFailure} from '../redux/user/userslice.js'
import { useDispatch } from "react-redux"

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [formdata, setformdata] = useState({});
  const dispatch=useDispatch();
  const handledeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/backend/user/delete/${currentUser._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data))
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  return (
    <div className="p-3 max-w-lg -mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="hmlo"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="username"
          className="bg-slate-200 rounded-lg p-3"
        ></input>
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="email"
          className="bg-slate-200 rounded-lg p-3"
        ></input>
        <input
          type="password"
          id="password"
          placeholder="password"
          className="bg-slate-200 rounded-lg p-3"
        ></input>
        <button className="bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-20 disabled:opacity-65">
          update
        </button>
      </form>
      <div className=" flex justify-between mt-5">
        <span
          onClick={handledeleteAccount}
          className="text-red-800 cursor-pointer "
        >
          Delete Account
        </span>
        <span className="text-red-800 cursor-pointer">Signout</span>
      </div>
    </div>
  );
}
