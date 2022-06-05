import React from "react";
import { FaPlus, FaMinus, FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div>
      {/* ---------location------- */}
      <div className="flex flex-col text-left shadow-lg p-6 rounded-xl border border-base-100">
        <label htmlFor="location" className="font-semibold">
          Location
        </label>
        <input
          className="outline-none border-0"
          type="text"
          name="location"
          id="location"
          placeholder="Add city, or address"
        />
      </div>

      {/* ---------date-------- */}
      <div className="mt-4 flex flex-col md:flex-row justify-between">
        {/* arrival */}
        <div className="flex basis-2/4 md:mr-3 flex-col text-left shadow-xl p-6 rounded-xl border border-base-100">
          <label className="text-base-300" htmlFor="arrival">
            Arrival
          </label>
          <input
            type="date"
            name="arrival"
            id="arrival"
            className="font-semibold"
          />
        </div>
        {/* departure */}
        <div className="flex basis-2/4 mt-4 md:mt-0 flex-col text-left shadow-xl p-6 rounded-xl border border-base-100">
          <label className="text-base-300" htmlFor="departure">
            Departure
          </label>
          <input
            type="date"
            name="departure"
            id="departure"
            className="font-semibold"
          />
        </div>
      </div>

      {/* ---------member-------- */}
      <div className="mt-4 flex-col text-left shadow-xl rounded-xl border border-base-100">
        {/* member type  */}
        <div>
          <select
            name="member"
            id="member"
            className="font-semibold uppercase p-6 outline-0 w-full"
          >
            <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
          </select>
          <hr />

          <div className="p-6 font-semibold uppercase">
            {/* adults  */}
            <div className="flex justify-between items-center">
              <p>Adults</p>
              <p className="flex items-center justify-center">
                <FaMinus />
                <span className="px-8">2</span>
                <FaPlus />
              </p>
            </div>
            {/* child  */}
            <div className="flex justify-between items-center py-10">
              <p className="flex flex-col">
                Child
                <span className="font-medium text-base-300 capitalize text-sm">
                  age 2-12
                </span>
              </p>

              <p className="flex items-center justify-center">
                <FaMinus />
                <span className="px-8">2</span>
                <FaPlus />
              </p>
            </div>
            {/* babies  */}
            <div className="flex justify-between items-center">
              <p className="flex flex-col">
                Babies
                <span className="font-medium text-sm text-base-300 capitalize">
                  Younger than 12
                </span>
              </p>
              <p className="flex items-center justify-center">
                <FaMinus />
                <span className="px-8">2</span>
                <FaPlus />
              </p>
            </div>
          </div>
          {/* ----------- */}
          {/* apply btn  */}
          <div className="text-right m-4">
            <button className="btn btn-primary btn-outline btn-sm px-8 font-semibold uppercase">
              Apply
            </button>
          </div>
          {/* btn end */}
        </div>
      </div>
      {/* -------member end----- */}

      {/* -----search btn------ */}
      <div className="w-full mt-3">
        <button className="btn btn-primary btn-lg w-full text-base-100 capitalize text-xl">
          <FaSearch className="mx-2 mt-1" /> Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
