import { useState } from "react";
import Contact from "./components/contact/Contact";
import Expperoence from "./components/experience/Expperoence";
import Header from "./components/header/Header";
import Project from "./components/projeect/Project";
import Skills from "./components/skills/Skills";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("/Nhacs.mp3");

  const toggleAudio = async () => {
    if (isPlaying) {
      try {
        await audio.pause();
        setIsPlaying(false);
      } catch (error) {
        console.error("Error pausing audio:", error);
      }
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  //đâu dsdas

  return (
    <div className="relative">
      <Header />
      <Project />
      <Skills />
      <Expperoence />
      <Contact />
      <button className="fixed bg-blue-400 rounded-full bottom-5 p-2 right-5 z-50" onClick={toggleAudio}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </button>
    </div>
  );
}

export default App;
