import Header from "./Components/Header";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Connect from "./Components/Connect";
import ParticleCanvas from "./Components/ParticleCanvas";

function App() {
  return (
    <div
      id="mainDiv"
      className="bg-transparent text-white min-h-screen w-full overflow-x-hidden scroll-smooth z-0 relative"
    >
      <ParticleCanvas />
      
      <section id="header" className="sticky top-0 bg-[rgb(20,20,20)]/50 backdrop-blur-lg border-b border-white/5 z-40">
        <Header />
      </section>
      
      <section id="profile" className="min-h-screen flex items-center justify-center relative">
        <Profile />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center relative py-20">
        <About />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center relative py-20">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center relative py-20">
        <Project />
      </section>
      
      <section id="connect" className="min-h-screen flex items-center justify-center relative py-20">
        <Connect />
      </section>
    </div>
  );
}

export default App;
