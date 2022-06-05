import React from "react";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <divs className="flex px-10 my-12">
      {/* <h1 className="text-lg font-bold">Where do you want to go?</h1> */}
      {/* search section  */}
      <div className="flex-1">
        <SearchBox />
      </div>
      <div className="flex-1"></div>
    </divs>
  );
};

export default Home;
