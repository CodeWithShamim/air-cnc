import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div class="navbar bg-base-100 px-6">
        <div class="flex-1">
          <Link to="" class="text-2xl md:text-3xl text-primary font-bold">
            Aircnc
          </Link>
        </div>

        {/* --------------------- */}
        <div class="flex-none">
          {/* ---dropdown content--- */}
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Host your home</Link>
              </li>
              <li>
                <Link to="">Host your experience</Link>
              </li>
              <li>
                <Link to="">Help?</Link>
              </li>
            </ul>
          </div>

          {/* ---content for large device--- */}
          <div class="navbar hidden lg:flex">
            <ul class="menu menu-horizontal p-0 font-semibold">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Host your home</Link>
              </li>
              <li>
                <Link to="">Host your experience</Link>
              </li>
              <li>
                <Link to="">Help?</Link>
              </li>
              <li>
                <div
                  className="btn btn-primary btn-sm text-base-100 capitalize pb-6 px-6"
                  style={{ borderRadius: "50px" }}
                >
                  <Link to="">Sign up</Link>
                </div>
              </li>
            </ul>
          </div>

          {/* ---profile section --- */}
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt="profile-img"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="" class="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="">Settings</Link>
              </li>
              <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
