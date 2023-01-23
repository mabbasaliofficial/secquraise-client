import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Filter from "./Filter";
import SideNavCompo from "./SideNavCompo";

const RightSideNav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://server-side-data-beta.vercel.app/users")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  return (
    <div className="overflow-y-auto h-screen">
      <div className="flex justify-between sticky top-0 bg-white py-2 px-2">
        <h3 className="text-left text-xl font-bold">Events</h3>
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <BiMenuAltRight className="font-bold mt-1 text-3xl border-gray-900 border-2" />
          </label>
          <div
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 text-black rounded-box w-[350px]"
          >
            <Filter />
          </div>
        </div>
      </div>
      {data.map((d) => (
        <SideNavCompo key={d.id} data={d}/>
      ))}
    </div>
  );
};

export default RightSideNav;
