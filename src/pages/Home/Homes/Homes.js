import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { link } from "../../../api/link";
import HomeItem from "./HomeItem";

const Homes = () => {
  const [homes, setHomes] = useState([]);

  // get data
  useEffect(() => {
    link("/home")
      .then(({ data }) => setHomes(data))
      .catch((error) => console.log("Error", error.message));
  }, []);

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between px-6 pb-3">
        <h1 className="text-2xl font-bold text-left">Homes</h1>
        <p className="flex items-center cursor-pointer">
          See all
          <FaAngleRight className="ml-1" />
        </p>
      </div>

      {/* -------homes-------- */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 relative">
        {homes?.slice(0, 3)?.map((home) => (
          <HomeItem key={home._id} home={home}></HomeItem>
        ))}
        <div className="bg-base-100 rounded-full shadow-xl border p-1 absolute right-2 top-16 cursor-pointer">
          <FaAngleRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Homes;
