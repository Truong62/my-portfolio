import Contact from "./components/contact/Contact";
import Expperoence from "./components/experience/Expperoence";
import Header from "./components/header/Header";
import Project from "./components/projeect/Project";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Project></Project>
      <Skills></Skills>
      <Expperoence></Expperoence>
      <Contact></Contact>
    </div>
  );
}

export default App;
