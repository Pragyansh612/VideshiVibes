import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Saved = ({ videos, onVideoSelect, SavedVideos }) => {
    const [savedVideosData, setSavedVideosData] = useState([]);

    useEffect(() => {
        localStorage.setItem('SavedVideos', JSON.stringify(SavedVideos));
    }, [])

    useEffect(() => {
        const viddd = localStorage.getItem('SavedVideos');
        if (viddd) {
            const savedVideoIndices = JSON.parse(viddd);
            const savedVideos = savedVideoIndices.map(index => videos[index]);
            setSavedVideosData(savedVideos);
        }
    }, [videos]);

    const handleClick = (index) => {
        onVideoSelect(index);
    };

    return (
        <div className='m-6 p-3 relative left-5 w-11/12'>
            <div className="flex gap-10">
                {savedVideosData.map((savedVideo, index) => (
                    <div key={index} className='w-80 items-center'>
                        <Link to="/Video">
                            <img
                                onClick={() => handleClick(index)}
                                className='rounded-xl'
                                src={savedVideo.image}
                                width={320}
                                alt=""
                            />
                        </Link>
                        <div className='flex justify-center'>
                            <h1 className='text-xl font-medium'>{savedVideo.title}</h1>
                        </div>
                        <div>
                            <div className='flex justify-center gap-4'>
                                <h2>{savedVideo.channel}</h2>
                                <h4>{savedVideo.view}</h4>
                                <h4>{savedVideo.time}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Saved;
