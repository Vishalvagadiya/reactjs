import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">
          Flavoro Foods
          <span className="text-sm block">
            {new Date().toUTCString().slice(0, 16)}
          </span>
        </h1>
      </div>
      <div className="flex space-x-5 mt-2">
        <NavLink
          to="/"
          className={({ isActive }) => `hover:underline ${isActive ? 'text-black-500' && 'underline' : 'text-gray-500'}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `hover:underline ${isActive ? 'text-black-500' && 'underline' : 'text-gray-500'}`}
        >
          About
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => `hover:underline ${isActive ? 'text-black-500' && 'underline' : 'text-gray-500'}`}
        >
          Product
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => `hover:underline ${isActive ? 'text-black-500' && 'underline' : 'text-gray-500'}`}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => `hover:underline ${isActive ? 'text-black-500' && 'underline' : 'text-gray-500'}`}
        >
          Signup
        </NavLink>
      </div>
      <input
        type="search"
        name="search"
        placeholder="Search here"
        autoComplete="off"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
      />
    </nav>
  );
};

export default Navbar;
