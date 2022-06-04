import React from "react";
import { Link } from "react-router-dom";
import LoadCountry from "./LoadCountry";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen mt-16">
      <div className="flex flex-col w-4/5 md:w-2/4 lg:w-1/3">
        <h1 className="text-2xl font-bold pb-8">Login</h1>

        <select
          className="border border-gray-200 outline-none rounded-2xl text-gray-900 py-4 px-3"
          type="text"
          name="country"
          id="country"
        >
          <LoadCountry />
        </select>

        <input
          className="border border-gray-200 outline-none rounded-2xl py-4 px-3 my-3 "
          type="text"
          name="phone"
          id="phone"
          minLength="8"
          maxLength="13"
          placeholder="Phone Number"
        />
        <p className="text-left ml-4 text-sm">
          We'll call or text you to confirm your number. Standard messaage and
          data rates apply.
        </p>

        <button className="btn btn-primary rounded-full text-base-100 capitalize text-lg my-6">
          Continue
        </button>
        <p>
          Dont't have an account?{" "}
          <Link to="/signup">
            <span className="font-bold cursor-pointer">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
