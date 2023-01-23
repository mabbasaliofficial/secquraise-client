import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log(d)
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[350px]"
          >
            <div className="mx-10 my-2">
              <h3 className="font-bold">Location</h3>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Chennai</span>
                  <input
                    type="radio"
                    name="location-radio"
                    className="radio radio-info checked:bg-blue-500"
                    checked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Hyderabad</span>
                  <input
                    type="radio"
                    name="location-radio"
                    className="radio radio-info checked:bg-blue-500"
                    checked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Bangalore</span>
                  <input
                    type="radio"
                    name="location-radio"
                    className="radio radio-info checked:bg-blue-500"
                    checked
                  />
                </label>
              </div>
            </div>
            <div className="mx-10 my-2">
            <h3 className="font-bold">Gender</h3>
            <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Male</span>
                  <input
                    type="radio"
                    name="gender-radio"
                    className="radio radio-secondary checked:bg-red-500"
                    checked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Female</span>
                  <input
                    type="radio"
                    name="gender-radio"
                    className="radio radio-secondary checked:bg-red-500"
                    checked
                  />
                </label>
              </div>
            </div>
            <li>
              <Link to={`/`}>About</Link>
            </li>
          </ul>
        </div>
      </div>
      {data.map((dt) => (
        <div key={dt.id} className="bg-gray-400 m-3 text-white rounded p-1">
          <Link to={`/users/${dt.id}`}>
            <div className="px-2">
              <div className="flex justify-between">
                <h1>{dt.name}</h1>
                <div>
                  <span className="mx-1">{dt.date}</span>
                  <span className="mx-1">{dt.time}</span>
                </div>
              </div>
              <h1 className="text-start">Person Detected</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RightSideNav;
