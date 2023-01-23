import React from 'react';
import { Link } from 'react-router-dom';

const SideNavCompo = ({data}) => {
    return (
        <div>
            <div key={data.id} className="bg-gray-400 m-3 text-white rounded p-1">
          <Link to={`/users/${data.id}`}>
            <div className="px-2">
              <div className="flex justify-between">
                <h1>{data.name}</h1>
                <div>
                  <span className="mx-1">{data.date}</span>
                  <span className="mx-1">{data.time}</span>
                </div>
              </div>
              <h1 className="text-start">Person Detected</h1>
            </div>
          </Link>
        </div>
        </div>
    );
};

export default SideNavCompo;