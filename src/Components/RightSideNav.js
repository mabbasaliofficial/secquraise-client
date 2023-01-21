import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

const RightSideNav = () => {
    return (
        <div>
            <div className='flex justify-between'>
             <h3 className="text-left text-xl font-bold">Events</h3>
            <BiMenuAltRight className="font-extrabold text-3xl"/>
            <div>
                
            </div>
            </div>
        </div>
    );
};

export default RightSideNav;