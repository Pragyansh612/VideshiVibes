// App.js
import React, { useState } from 'react';
import './App.css';
import Nav from './comp/Nav';
import Home from './comp/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Video from './comp/Video';
import Saved from './comp/Saved';

function App() {
  const [videos, setVideos] = useState([
    {
      title: "New Year Special Pack",
      channel: "ProdBy ShyRap",
      view: "100k Views",
      time: "6 months ago",
      image: "src/comp/content/image_1.jpg",
      vidd: "src/comp/content/video_1.mp4"
    },
    {
      title: "Hello Pack",
      channel: "ShyRap",
      view: "10 Views",
      time: "1 months ago",
      image: "src/comp/content/image_2.png",
      vidd: "src/comp/content/video_2.mp4"
    }
  ]);

  const [selectedVideoIndex, setSelectedVideoIndex] = useState();
  const [SearchedVideo, setSearchedVideo] = useState()
  const [Save, setSavedVideos] = useState([])

  const handleVideoSelect = (index) => {
    setSelectedVideoIndex(index);
  };

  const handleVidSearch = (searchQuery) => {
    if (searchQuery) {
      const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchedVideo(filteredVideos);
    } else {
      setSearchedVideo(null);
    }
  };

  const handleSaved = (index) => {
    if (!Save.includes(index)) {
      setSavedVideos([...Save, index]);
    }
  }
  
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nav SearchVideo={handleVidSearch}/><Home videos={videos} onVideoSelect={handleVideoSelect} SearchVid={SearchedVideo} Saved={handleSaved} /></>
    },
    {
      path: "/Video",
      element: <><Nav SearchVideo={handleVidSearch}/><Video videos={videos} selectedVideoIndex={selectedVideoIndex} /></>
    },
    {
      path: "/Saved",
      element: <><Nav SearchVideo={handleVidSearch}/><Saved videos={videos}  onVideoSelect={handleVideoSelect} SavedVideos={Save}/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
