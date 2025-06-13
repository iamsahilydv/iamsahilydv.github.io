import Header from "./Components/Header";
import Profile from "./Components/Profile";
import About from "./Components/About";
import WorkExperience from "./Components/WorkExperience";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Connect from "./Components/Connect";

function App() {
  // window.addEventListener("scroll",()=>{
  //   let header = document.querySelector("#header")
  //   // if(window.scrollY>"40px"){
  //   //   console.log("hi")
  //   // }
  //   header.classList.toggle("none",window.scrollY > 0)
  // })
  // window.addEventListener("scroll",()=>{
  //   if(window.scrollY === 0){
  //     console.log("hi")
  //   }
  // })
  const fun = () => {
    let header = document.querySelector("#header");
    header.classList.toggle("none");
  };

  const scrollFun = () => {
    console.log(window.scrollY);
  };
  let main = document.getElementById("mainDiv");
  // main.addEventListener("scroll", scrollFun());
  return (
    <div
      id="mainDiv"
      className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll scroll-smooth z-0"
    >
      <section id="header" className=" sticky top-0 bg-[rgb(36,36,36)] z-20 ">
        <Header />
      </section>
      <section id="profile" className="">
        <Profile />
      </section>

      <section id="about" className="">
        <About />
      </section>

      {/* <section id="experience" className="">
        <WorkExperience />
      </section> */}

      <section id="skills" className=" h-fit">
        <Skills />
      </section>

      <section id="projects" className="">
        <Project />
      </section>
      <section id="connect">
        <Connect />
      </section>
    </div>
  );
}

export default App;
