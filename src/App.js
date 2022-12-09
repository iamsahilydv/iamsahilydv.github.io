import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import About from './Components/About';
import WorkExperience from './Components/WorkExperience';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll z-0">
      
        <Header />

      <section id='profile' className=''>
        <Profile />

      </section>

      <section id='about' className=''>
        <About />
      </section>

      <section id='experience' className=''>
        <WorkExperience />
      </section>

      <section id='skills' className=''>
        <Skills />
      </section>
    </div>
  );
}

export default App;
