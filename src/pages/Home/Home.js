import React from "react";
import Experiences from "./Experiences/Experiences";
import Homes from "./Homes/Homes";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <divs className="flex flex-col lg:flex-row px-4 md:px-16 my-12">
      {/* <h1 className="text-lg font-bold">Where do you want to go?</h1> */}
      {/* search section  */}
      <div className="basis-3/12">
        <SearchBox />
      </div>
      <div className="basis-9/12 mt-8 lg:mt-0">
        <Experiences />
        <Homes />
      </div>
    </divs>
  );
};

export default Home;
