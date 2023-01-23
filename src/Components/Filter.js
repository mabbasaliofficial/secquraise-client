import React from 'react';

const Filter = () => {
    return (
        <div>
             <div className="mx-10 my-1">
              <h3 className="font-bold">Location</h3>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Chennai</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Hyderabad</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Bangalore</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>
            </div>
            <div className="mx-10 my-1">
              <h3 className="font-bold">Gender</h3>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Male</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Female</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>
            </div>
            <div className="mx-10 my-1">
              <h3 className="font-bold">Date</h3>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="date" name="" className="input input-bordered w-full" id="" />
                </label>
              </div>
            </div>
        </div>
    );
};

export default Filter;