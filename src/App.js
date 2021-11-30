import React, {useState, useEffect} from "react";
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

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [])

  return (
    <div className="App">
       <Player />
    </div>
  );
}

export default App;
