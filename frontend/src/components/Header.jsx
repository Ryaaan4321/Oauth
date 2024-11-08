import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    // <h1>Header</h1>
    <div className="bg-slate-700">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-white">
            <Link to='/'>Auth App</Link>
        </h1>
        <ul className="flex gap-4 text-white">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signin">
          <li>Signin</li></Link>
        </ul>
      </div>
    </div>
  )
};
