import React from "react";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <divs className="flex px-16 my-12">
      {/* <h1 className="text-lg font-bold">Where do you want to go?</h1> */}
      {/* search section  */}
      <div className="basis-2/6">
        <SearchBox />
      </div>
      <div className="basis-8/12"></div>
    </divs>
  );
};

export default Home;
