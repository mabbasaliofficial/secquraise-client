import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-left text-xl font-bold">Events</h3>
        <BiMenuAltRight className="font-bold mt-1 text-3xl border-gray-900 border-2" />
      </div>
      {data.map((dt) => (
        <div className="bg-gray-400 m-2 text-white rounded p-1">
          <Link to={`/data/${dt.id}`}>
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
