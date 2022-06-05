import React from "react";
import { FaPlus, FaMinus, FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div>
      {/* ---------location------- */}
      <div className="flex flex-col text-left shadow-lg p-6 rounded-xl border border-base-100">
        <label htmlFor="location" className="font-bold">
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
      <div className="mt-6 flex justify-between">
        {/* arrival */}
        <div className="flex basis-2/4 mr-3 flex-col text-left shadow-xl p-6 rounded-xl border border-base-100">
          <label className="text-base-300" htmlFor="arrival">
            Arrival
          </label>
          <input
            type="date"
            name="arrival"
            id="arrival"
            className="font-bold"
          />
        </div>
        {/* departure */}
        <div className="flex basis-2/4 flex-col text-left shadow-xl p-6 rounded-xl border border-base-100">
          <label className="text-base-300" htmlFor="departure">
            Departure
          </label>
          <input
            type="date"
            name="departure"
            id="departure"
            className="font-bold"
          />
        </div>
      </div>

      {/* ---------member-------- */}
      <div className="mt-6 flex-col text-left shadow-xl rounded-xl border border-base-100">
        {/* member type  */}
        <div>
          <select
            name="member"
            id="member"
            className="font-bold uppercase p-6 outline-0 w-full"
          >
            <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
          </select>
          <hr />
          <div className="p-6 font-bold uppercase">
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
            <div className="flex justify-between items-center py-12">
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
          {/* btn  */}
          <div className="text-right m-6">
            <button className="btn btn-primary btn-outline btn-sm px-8 font-bold uppercase">
              Apply
            </button>
          </div>
          {/* btn end */}
        </div>
      </div>
      {/* -------member end----- */}

      {/* -----search btn------ */}
      <div className="w-full mt-4">
        <button className="btn btn-primary btn-lg w-full text-base-100 capitalize text-xl">
          <FaSearch className="mx-2 mt-1" /> Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
