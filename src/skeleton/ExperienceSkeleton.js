import React from "react";
import Skeleton from "react-loading-skeleton";

const ExperienceSkeleton = () => {
  return (
    <div>
      <div className="w-100 rounded">
        <Skeleton height={140} />
      </div>
      <p className="w-4/5 mt-2">
        <Skeleton height={16} />
      </p>
      <h2>
        <Skeleton count={2} />
      </h2>
      <p className="w-3/5">
        <Skeleton height={10} />
      </p>
      <p className="w-4/5">
        <Skeleton height={12} />
      </p>
    </div>
  );
};

export default ExperienceSkeleton;
