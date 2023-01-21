import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleData = () => {
    const data = useLoaderData()
    return (
        <div className='mb-10'>
            <h1 className='text-center text-xl font-bold mt-10'>{data.gender}</h1>
            <div className='flex justify-between'>
                <div className='ml-20 mt-20'>
                    <h3 className='font-bold'>{data.id}</h3>
                    <h3 className='font-bold'>Person Detected</h3>
                    <br />
                    <br />
                    <br />
                    <p>Name     : {data.name}</p>
                    <p>Location : {data.location}</p>
                    <p>Date     : {data.date}</p>
                    <p>Time     : {data.time}</p>
                    <br />
                    <br />
                    <br />
                    <p>Description :</p>
                    <p>{data.name} detected at <br /> {data.location} on {data.date}</p>
                </div>
                <div className='w-1/2 m-5'>
                    <img src={data.image} className="w-full" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleData;