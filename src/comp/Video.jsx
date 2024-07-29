import React from 'react';

const Video = ({ videos, selectedVideoIndex }) => {
  const selectedVideo = videos[selectedVideoIndex];

  return (
    <>
      {selectedVideo && (
        <div className='w-11/12 m-6 p-3 relative left-5'>
          <div>
            <div className=''>
              <video className='h-96' controls src={selectedVideo.vidd}></video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
