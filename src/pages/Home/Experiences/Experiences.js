import React, { useEffect, useState } from "react";
import { link } from "../../../api/link";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  // get data
  useEffect(() => {
    link("/experience")
      .then(({ data }) => setExperiences(data))
      .catch((error) => console.log("Error", error.message));
  }, []);

  return (
    <div className="px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {experiences?.slice(0, 4)?.map((experience) => (
        <ExperienceItem
          key={experience._id}
          experience={experience}
        ></ExperienceItem>
      ))}
    </div>
  );
};

export default Experiences;
