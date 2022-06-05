import React, { useEffect, useState } from "react";
import { link } from "../../../api/link";
import ExperienceItem from "./ExperienceItem";
import { FaAngleRight } from "react-icons/fa";
import ItemSkeleton from "../../../skeleton/ItemSkeleton";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get data
  useEffect(() => {
    link("/experience")
      .then(({ data }) => {
        setIsLoading(false);
        setExperiences(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Error", error.message);
      });
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

        {/* set loading skeleton  */}
        {isLoading && [1, 2, 3, 4].map((n) => <ItemSkeleton key={n} />)}
      </div>
    </div>
  );
};

export default Experiences;
