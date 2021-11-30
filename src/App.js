import React, {useState} from "react";
import Player from './components/Player';

function App() {

  const [songs] = useState([
     {
       title: "I Want To Break Free",
       artist: "Queen",
       img_src: "breakfree.jpg",
       src: "BreakFree.m4a"
     },
     {
      title: "Show Must Go On",
      artist: "Queen",
      img_src: "breakfree.jpg",
      src: "BreakFree.m4a"
    },
    {
      title: "Breakthrough",
      artist: "Queen",
      img_src: "breakfree.jpg",
      src: "BreakFree.m4a"
    },
    {
      title: "Radio Gaga",
      artist: "Queen",
      img_src: "breakfree.jpg",
      src: "BreakFree.m4a"
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  return (
    <div className="App">
       <Player />
    </div>
  );
}

export default App;
