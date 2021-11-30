import React, {useState, useEffect} from "react";
import Player from './components/Player';
import './index.css';

function App() {

  const [songs] = useState([
     {
       title: "I Want To Break Free",
       artist: "Queen",
       img_src: "./img/breakfree.png",
       src: "./songs/BreakFree.m4a"
     },
     {
      title: "Show Must Go On",
      artist: "Queen",
      img_src: "./img/showmustgoon.png",
      src: "./songs/ShowMustGoOn.m4a"
    },
    {
      title: "Breakthrough",
      artist: "Queen",
      img_src: "./img/breakthrough.png",
      src: "./songs/Breakthrough.m4a"
    },
    {
      title: "Radio Gaga",
      artist: "Queen",
      img_src: "./img/radiogaga.png",
      src: "./songs/RadioGaga.m4a"
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])

  return (
    <div className="App">
       <Player 
         currentSongIndex = { currentSongIndex}
         setCurrentSongIndex = {setCurrentSongIndex}
         nextSongIndex = {nextSongIndex}
         songs = {songs}
       />
    </div>
  );
}

export default App;
