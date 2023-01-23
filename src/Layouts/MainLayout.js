import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import RightSideNav from "../Components/RightSideNav";

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-12">
        <div className="col-span-8  m-5">
            <Outlet/>
        </div>
        <div className="col-span-4 border-solid border-4 border-gray-400 px-4">
           <RightSideNav/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
