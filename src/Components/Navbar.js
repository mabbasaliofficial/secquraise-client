import React from 'react';
import { AiOutlineMenu} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-900">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <AiOutlineMenu className='text-white font-bold h-6 w-6'/>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={`/`}>Homepage</Link></li>
        <li><Link to={`/add_person`}>Add a member</Link></li>
        <li><Link to={`/`}>About</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <h2 className="font-bold normal-case text-3xl text-green-500">Secqur<span className='text-red-500'>AI</span>se</h2>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      
    </button>

  </div>
</div>
        </div>
    );
};

export default Navbar;