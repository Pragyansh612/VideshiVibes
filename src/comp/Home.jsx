import React, { useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Home = ({ videos, onVideoSelect, SearchVid, Saved }) => {
  const [option, setOption] = useState(false);
  const [id, setid] = useState();

  const handleClick = (index) => {
    onVideoSelect(index);
  };

  const handleoption = (index) => {
    setOption(!option)
    setid(index)
  }

  const handlesave = (index) => {
    Saved(index)
    setOption(!option)
  }
  

  return (
    <div className='m-6 p-3 relative left-5 w-11/12'>
      <div className=" flex gap-10">
        {SearchVid ? 
          SearchVid.map((video, index) => (
            <div key={video.title} className='w-80 items-center'>
              <Link to="/Video">
                <img
                  onClick={() => handleClick(index)}
                  className='rounded-xl'
                  src={video.image}
                  width={320}
                  alt=""
                />
              </Link>
              <div className='flex justify-center'>
                <h1 className=' text-xl font-medium'>{video.title}</h1>
              </div>
              <div className=" flex justify-end relative bottom-5">
                <button className='' onClick={() => handleoption(index)}>
                  <SlOptionsVertical />
                </button>
              </div>
              <div>
                <div className='flex justify-center gap-4 relative bottom-3'>
                  <h2>{video.channel}</h2>
                  <h4>{video.view}</h4>
                  <h4>{video.time}</h4>
                </div>
                {index === id && <div>
                  {option && (
                    <div className='bg-white w-28 rounded-3xl h-8 relative flex justify-center left-72 bottom-24'>
                      <button>Save Video</button>
                    </div>
                  )}
                </div>}
              </div>
            </div>
          )) 
          :
          videos.map((video, index) => (
            <div key={video.title} className='w-80 items-center'>
              <Link to="/Video">
                <img
                  onClick={() => handleClick(index)}
                  className='rounded-xl'
                  src={video.image}
                  width={320}
                  alt=""
                />
              </Link>
              <div className='flex justify-center'>
                <h1 className=' text-xl font-medium'>{video.title}</h1>
              </div>
              <div className=" flex justify-end relative bottom-5">
                <button className='' onClick={() => handleoption(index)}>
                  <SlOptionsVertical />
                </button>
              </div>
              <div>
                <div className='flex justify-center gap-4 relative bottom-3'>
                  <h2>{video.channel}</h2>
                  <h4>{video.view}</h4>
                  <h4>{video.time}</h4>
                </div>
                {index === id && <div>
                  {option && (
                    <div className='bg-white w-28 rounded-3xl h-8 relative flex justify-center left-72 bottom-24'>
                      <button onClick={()=>handlesave(index)}>Save Video</button>
                    </div>
                  )}
                </div>}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
