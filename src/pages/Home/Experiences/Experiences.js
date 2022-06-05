import React, { useEffect, useState } from "react";
import { link } from "../../../api/link";
import ExperienceItem from "./ExperienceItem";
import { FaAngleRight } from "react-icons/fa";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  // get data
  useEffect(() => {
    link("/experience")
      .then(({ data }) => setExperiences(data))
      .catch((error) => console.log("Error", error.message));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between  px-6 pb-3">
        <h1 className="text-2xl font-bold text-left">Experiences</h1>
        <p className="flex items-center cursor-pointer">
          See all
          <FaAngleRight className="ml-1" />
        </p>
      </div>

      {/* -------experiences--------- */}
      <div className="px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {experiences?.slice(0, 4)?.map((experience) => (
          <ExperienceItem
            key={experience._id}
            experience={experience}
          ></ExperienceItem>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
