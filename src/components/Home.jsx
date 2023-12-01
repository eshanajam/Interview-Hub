import React from "react";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="h-[92vh] w-full flex flex-col space-y-3 justify-center items-center">
        <h1 className="text-6xl font-semibold">Interview Hub</h1>
        <p>The Easiest Way to get your new job</p>
      </div>
    </div>
  );
};

export default Home;
