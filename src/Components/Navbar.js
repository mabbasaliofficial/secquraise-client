import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);

  useEffect(() => {
    fetch("https://server-side-data-beta.vercel.app/male")
      .then((res) => res.json())
      .then((data) => {
        setMale(data.length);
      });
    fetch("https://server-side-data-beta.vercel.app/female")
      .then((res) => res.json())
      .then((data) => {
        setFemale(data.length);
      });
  }, []);

  return (
    <div>
      <div className="navbar bg-blue-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <AiOutlineMenu className="text-white font-bold h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={`/`}>Homepage</Link>
              </li>
              <li>
                <Link to={`/add_person`}>Add a member</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <h2 className="font-bold normal-case text-3xl text-green-500">
            Secqur<span className="text-red-500">AI</span>se
          </h2>
        </div>
        <div className="navbar-end">
          <div className="w-10 h-10 bg-green-400 mx-2 flex justify-center items-center">
            <span className="font-bold text-black">{male}</span>
          </div>
          <div className="w-10 h-10 bg-orange-400 mx-2 flex justify-center items-center">
            <span className="font-bold text-white">{female}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
